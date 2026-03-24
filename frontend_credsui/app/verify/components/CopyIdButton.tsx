"use client";

import { Check, Copy } from "lucide-react";
import { useCallback, useState } from "react";

type CopyIdButtonProps = {
  value: string;
  label: string;
};

export function CopyIdButton({ value, label }: CopyIdButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, [value]);

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 rounded-md text-zinc-500 transition hover:text-[#00d2ff]"
      aria-label={label}
    >
      {copied ? (
        <Check className="size-4 text-emerald-400" aria-hidden />
      ) : (
        <Copy className="size-4" aria-hidden />
      )}
    </button>
  );
}
