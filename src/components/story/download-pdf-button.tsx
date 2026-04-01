"use client";

import { useState } from "react";
import { scholarshipSpec, focusAreas } from "@/lib/content/site";
import { MotionInView } from "@/components/story/motion-in-view";

export function DownloadPdfButton() {
  const [generating, setGenerating] = useState(false);

  async function handleDownload() {
    setGenerating(true);
    try {
      const { generateScholarshipPdf } = await import(
        "@/lib/pdf/generate-scholarship-pdf"
      );
      const doc = generateScholarshipPdf(scholarshipSpec, focusAreas);
      doc.save("access-to-build-scholarship.pdf");
    } finally {
      setGenerating(false);
    }
  }

  return (
    <MotionInView>
      <button
        onClick={handleDownload}
        disabled={generating}
        className="group inline-flex items-center gap-3 rounded-full border border-[rgba(214,147,93,0.32)] bg-[rgba(214,147,93,0.08)] px-7 py-3.5 text-sm font-medium tracking-wide text-(--signal-cream) transition-all hover:border-[rgba(214,147,93,0.56)] hover:bg-[rgba(214,147,93,0.14)] disabled:pointer-events-none disabled:opacity-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform group-hover:translate-y-0.5"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        {generating ? "Generating PDF…" : "Download Scholarship PDF"}
      </button>
    </MotionInView>
  );
}
