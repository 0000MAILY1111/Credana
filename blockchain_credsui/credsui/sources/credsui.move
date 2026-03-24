/// Credenciales académicas verificables en SUI: insignias NFT con registro de revocación y niveles dinámicos.
module credsui::credsui {
    use std::string::String;
    use sui::event;
    use sui::object::{Self, ID, UID};
    use sui::table::{Self, Table};
    use sui::transfer;
    use sui::tx_context::{Self, TxContext};

    // --- Errores ---
    const ENotIssuer: u64 = 1;
    const EInvalidLevel: u64 = 2;
    const EUnknownBadge: u64 = 3;
    const EMaxLevel: u64 = 4;
    const EDuplicateBadge: u64 = 5;

    /// Insignia digital (NFT): metadata on-chain, propiedad = wallet del estudiante.
    public struct Badge has key, store {
        id: UID,
        course: String,
        professor_name: String,
        issuer: address,
        student: address,
        issued_at_epoch: u64,
        /// Nivel evolutivo 1–5 (credencial dinámica).
        level: u8,
    }

    /// Capacidad de emisor (profesor / institución). Quien posee esto puede emitir y revocar sus credenciales.
    public struct IssuerCap has key, store {
        id: UID,
        issuer: address,
    }

    /// Registro compartido: trazabilidad de emisiones y revocaciones (verificación pública).
    public struct CredentialRegistry has key {
        id: UID,
        /// object::id(Badge) -> emisor que la mintió
        issued_by: Table<ID, address>,
        /// object::id(Badge) -> revocada
        revoked: Table<ID, bool>,
    }

    // --- Eventos ---
    public struct BadgeMinted has copy, drop {
        badge_id: ID,
        issuer: address,
        student: address,
        course: String,
        level: u8,
    }

    public struct BadgeRevoked has copy, drop {
        badge_id: ID,
        issuer: address,
    }

    public struct BadgeLevelUp has copy, drop {
        badge_id: ID,
        new_level: u8,
    }

    fun init(ctx: &mut TxContext) {
        let registry = CredentialRegistry {
            id: object::new(ctx),
            issued_by: table::new(ctx),
            revoked: table::new(ctx),
        };
        transfer::public_share_object(registry);
    }

    /// Crea una capacidad de emisor para el remitente (profesor se registra).
    public fun create_issuer_cap(ctx: &mut TxContext) {
        let cap = IssuerCap {
            id: object::new(ctx),
            issuer: tx_context::sender(ctx),
        };
        transfer::public_transfer(cap, tx_context::sender(ctx));
    }

    /// Emite una insignia al estudiante (mint + registro en blockchain).
    public fun mint_badge(
        registry: &mut CredentialRegistry,
        cap: &IssuerCap,
        course: String,
        professor_name: String,
        student: address,
        initial_level: u8,
        ctx: &mut TxContext,
    ) {
        assert!(cap.issuer == tx_context::sender(ctx), ENotIssuer);
        assert!(initial_level >= 1 && initial_level <= 5, EInvalidLevel);

        let badge = Badge {
            id: object::new(ctx),
            course,
            professor_name,
            issuer: cap.issuer,
            student,
            issued_at_epoch: tx_context::epoch(ctx),
            level: initial_level,
        };

        let inner_id = object::id(&badge);
        assert!(!table::contains(&registry.issued_by, inner_id), EDuplicateBadge);

        table::add(&mut registry.issued_by, inner_id, cap.issuer);

        event::emit(BadgeMinted {
            badge_id: inner_id,
            issuer: cap.issuer,
            student,
            course: badge.course,
            level: initial_level,
        });

        transfer::public_transfer(badge, student);
    }

    /// Revoca una credencial (el emisor original invalida el ID; la verificación pública fallará).
    public fun revoke_badge(registry: &mut CredentialRegistry, cap: &IssuerCap, badge_id: ID, ctx: &TxContext) {
        assert!(table::contains(&registry.issued_by, badge_id), EUnknownBadge);
        assert!(*table::borrow(&registry.issued_by, badge_id) == cap.issuer, ENotIssuer);
        assert!(cap.issuer == tx_context::sender(ctx), ENotIssuer);
        if (!table::contains(&registry.revoked, badge_id)) {
            table::add(&mut registry.revoked, badge_id, true);
        } else {
            *table::borrow_mut(&mut registry.revoked, badge_id) = true;
        };
        event::emit(BadgeRevoked {
            badge_id,
            issuer: cap.issuer,
        });
    }

    /// Sube el nivel de la insignia (1 → 5), solo el emisor original.
    public fun upgrade_badge(badge: &mut Badge, cap: &IssuerCap, registry: &CredentialRegistry, ctx: &TxContext) {
        assert!(cap.issuer == tx_context::sender(ctx), ENotIssuer);
        let bid = object::id(badge);
        assert!(table::contains(&registry.issued_by, bid), EUnknownBadge);
        assert!(*table::borrow(&registry.issued_by, bid) == cap.issuer, ENotIssuer);
        assert!(badge.level < 5, EMaxLevel);
        badge.level = badge.level + 1;
        event::emit(BadgeLevelUp {
            badge_id: bid,
            new_level: badge.level,
        });
    }

    /// Verificación on-chain: credencial conocida, no revocada y emisor consistente.
    public fun verify_badge(badge: &Badge, registry: &CredentialRegistry): (bool, address, u8) {
        let bid = object::id(badge);
        if (!table::contains(&registry.issued_by, bid)) {
            return (false, @0x0, 0)
        };
        let reg_issuer = *table::borrow(&registry.issued_by, bid);
        if (reg_issuer != badge.issuer) {
            return (false, @0x0, 0)
        };
        if (table::contains(&registry.revoked, bid) && *table::borrow(&registry.revoked, bid)) {
            return (false, badge.issuer, badge.level)
        };
        (true, badge.issuer, badge.level)
    }

    public fun badge_course(badge: &Badge): String {
        badge.course
    }

    public fun badge_professor(badge: &Badge): String {
        badge.professor_name
    }

    public fun badge_issuer(badge: &Badge): address {
        badge.issuer
    }

    public fun badge_student(badge: &Badge): address {
        badge.student
    }

    public fun badge_issued_at(badge: &Badge): u64 {
        badge.issued_at_epoch
    }

    public fun badge_level(badge: &Badge): u8 {
        badge.level
    }

    public fun issuer_of_cap(cap: &IssuerCap): address {
        cap.issuer
    }
}
