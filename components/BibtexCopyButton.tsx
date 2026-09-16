"use client";

import { useState } from "react";
import { Check, Copy, Code2 } from "lucide-react";
import type { Publication } from "@/lib/content/types";

type BibtexCopyButtonProps = {
  publication: Publication;
};

export function formatBibtex(pub: Publication): string {
  const firstAuthorLast = (pub.authors[0] || "Author").split(" ").pop()?.toLowerCase() || "author";
  const citeKey = `${firstAuthorLast}${pub.year}${pub.publisher ? pub.publisher.toLowerCase() : "conf"}`;
  const authorList = pub.authors.join(" and ");

  return `@inproceedings{${citeKey},
  author    = {${authorList}},
  title     = {${pub.title}},
  booktitle = {${pub.venue}},
  year      = {${pub.year}},${pub.pages ? `\n  pages     = {${pub.pages}},` : ""}${pub.publisher ? `\n  publisher = {${pub.publisher}},` : ""}${pub.doi ? `\n  doi       = {${pub.doi}},` : ""}
  address   = {${pub.location}}
}`;
}

export function BibtexCopyButton({ publication }: BibtexCopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const bibtex = formatBibtex(publication);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy BibTeX citation to clipboard"
          className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 font-mono text-xs text-foreground transition-all duration-150 hover:border-accent hover:text-accent-strong active:scale-95 shadow-sm"
        >
          {copied ? (
            <>
              <Check className="size-3.5 text-emerald-500" />
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                Copied BibTeX!
              </span>
            </>
          ) : (
            <>
              <Copy className="size-3.5 text-muted-foreground" />
              <span>Copy BibTeX</span>
            </>
          )}
        </button>

        <button
          type="button"
          onClick={() => setShowPreview((prev) => !prev)}
          aria-expanded={showPreview}
          aria-label="Toggle BibTeX preview block"
          className="inline-flex cursor-pointer items-center gap-1 rounded-full border border-border bg-muted/60 px-3 py-1.5 font-mono text-[0.7rem] text-muted-foreground hover:text-foreground hover:border-accent transition-colors active:scale-95"
        >
          <Code2 className="size-3" />
          <span>{showPreview ? "Hide Citation" : "View BibTeX"}</span>
        </button>
      </div>

      {showPreview && (
        <div className="relative mt-2 overflow-x-auto rounded-xl border border-border bg-muted/80 p-3 font-mono text-[0.72rem] text-foreground">
          <pre className="whitespace-pre-wrap leading-relaxed">{bibtex}</pre>
        </div>
      )}
    </div>
  );
}
