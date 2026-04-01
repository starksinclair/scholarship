import {
  accessStats,
  focusAreas,
  founderClose,
  founderMetrics,
  proofItems,
  scholarshipSpec,
  storyScenes,
} from "@/lib/content/site";
import { AccessStatsSection } from "@/components/story/access-stats-section";
import { ChapterSection } from "@/components/story/chapter-section";
import { DownloadPdfButton } from "@/components/story/download-pdf-button";
import { FounderClose } from "@/components/story/founder-close";
import { Hero } from "@/components/story/hero";
import { InfrastructureCharts } from "@/components/story/infrastructure-charts";
import { MetricsBand } from "@/components/story/metrics-band";
import { OutcomeSection } from "@/components/story/outcome-section";
import { ProofGrid } from "@/components/story/proof-grid";
import { ScholarshipSections } from "@/components/story/scholarship-sections";

export default function Home() {
  return (
   <>
    <main className="bg-background text-foreground">
      <Hero metrics={founderMetrics} />

      <div className="relative z-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-0 px-6 pb-24 md:px-10 lg:px-16">
          {storyScenes.map((scene, index) => (
            <ChapterSection
              key={scene.id}
              scene={scene}
              priority={index === 0}
              id={index === 0 ? "story" : scene.id}
            />
          ))}
        </div>

        <MetricsBand metrics={founderMetrics} />

        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
          <ProofGrid items={proofItems} />
        </div>

        <AccessStatsSection stats={accessStats} />

        <InfrastructureCharts />

        <ScholarshipSections
          focusAreas={focusAreas}
          scholarshipSpec={scholarshipSpec}
        />

        <OutcomeSection scholarshipSpec={scholarshipSpec} />

        <section className="border-y border-white/10 bg-[linear-gradient(180deg,rgba(14,11,10,0.98),rgba(12,13,16,0.98))]">
          <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
            <p className="text-xs uppercase tracking-[0.32em] text-white/44">
              Application essay question
            </p>
            <blockquote className="mt-6 max-w-4xl border-l-2 border-(--signal-amber) pl-6 font-display text-[clamp(2.4rem,5vw,4.8rem)] leading-[0.96] tracking-[-0.03em] text-(--signal-cream)">
              &ldquo;{scholarshipSpec.proposalQuestion}&rdquo;
            </blockquote>
            <p className="mt-8 max-w-2xl text-base leading-8 text-white/60">
              Every applicant answers this single question with a written essay
              and a working prototype or project. The answer is the application.
            </p>
            <div className="mt-10">
              <DownloadPdfButton />
            </div>
          </div>
        </section>

        <FounderClose founderClose={founderClose} />
      </div>
    </main>

    <footer className="border-t border-white/8 bg-[rgba(9,10,12,1)]">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 lg:px-16">
        <div className="mb-8 rounded-2xl border border-white/10 bg-white/3 px-6 py-5">
          <p className="text-xs uppercase tracking-[0.28em] text-white/42">
            AI-use disclosure
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-white/50">
            AI tools were used during the creation of this submission to help
            rephrase text for clarity and to ensure correct English grammar
            and spelling. All ideas, scholarship design, personal narrative,
            and data analysis are original work by the author. The website,
            its code, and all interactive elements were built by the author
            with AI-assisted development tooling.
          </p>
        </div>
        <p className="text-center text-sm text-white/50">
          Copyright © {new Date().getFullYear()}{" "}
          <a
            href="https://www.sinclairnzenwata.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 underline underline-offset-4 decoration-white/20 hover:text-white"
          >
            Sinclair Nzenwata
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
   </>
  );
}
