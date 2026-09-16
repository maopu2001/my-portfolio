"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { profile } from "@/lib/content";

export function CopyEmail() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.socialLinks.rawEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable — fall back to opening the mail client
      window.location.href = profile.socialLinks.email;
    }
  };

  return (
    <button
      onClick={copy}
      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
      aria-label={copied ? "Email copied to clipboard" : `Copy email address ${profile.socialLinks.rawEmail}`}
    >
      {profile.socialLinks.rawEmail}
      {copied ? (
        <Check className="h-3.5 w-3.5 text-accent-strong" aria-hidden="true" />
      ) : (
        <Copy className="h-3.5 w-3.5" aria-hidden="true" />
      )}
      <span className="sr-only" role="status">
        {copied ? "Copied" : ""}
      </span>
    </button>
  );
}
