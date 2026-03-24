import type { Metadata } from "next";
import { VerificationScreen } from "./components/VerificationScreen";

export const metadata: Metadata = {
  title: "Credential verification",
  description:
    "Verify an academic credential cryptographically against the Sui Mainnet ledger.",
};

export default function VerifyPage() {
  return <VerificationScreen />;
}
