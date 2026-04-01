"use client";

import type { FounderMetric } from "@/lib/types";

type HeroProps = {
  metrics: FounderMetric[];
};

export function Hero({ metrics }: HeroProps) {
  return (
    <section className="grain relative overflow-hidden border-b border-white/10">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      >
        <source src="/presenting.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,13,18,0.62),rgba(9,13,18,0.78)_44%,rgba(9,13,18,0.97)_88%)]" />

      <div className="relative mx-auto flex min-h-svh max-w-7xl flex-col px-6 py-6 md:px-10 lg:px-16">
        <header className="flex items-center justify-between py-4 text-sm uppercase tracking-[0.28em] text-white/60">
          <span>Sinclair Nzenwata · Ball State University</span>
          <span className="hidden md:inline">Create Your Own Scholarship</span>
        </header>

        <div className="flex flex-1 items-center py-12">
          <div className="grid w-full gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.72fr)] lg:items-end">
            <div className="max-w-3xl">
              <p className="mb-5 text-sm uppercase tracking-[0.32em] text-[rgba(242,230,216,0.66)]">
                Scholarship proposal
              </p>
              <h1 className="font-display text-[clamp(4rem,10vw,8.6rem)] leading-[0.88] tracking-[-0.03em] text-(--signal-cream)">
                Access
                <br />
                to Build.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
                I learned to code on a phone, pushed through limited internet,
                and crossed continents to study computer science at Ball State.
                That global education showed me what builders can do with the
                right tools — and who gets left behind without them. This is my
                scholarship to close that gap for young builders in Nigeria.
              </p>
              <blockquote className="mt-10 max-w-2xl border-l border-[rgba(214,147,93,0.45)] pl-5 font-display text-3xl leading-tight text-white/90 md:text-4xl">
                &ldquo;I was not separated by talent. I was separated by access.&rdquo;
              </blockquote>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#scholarship"
                  style={{ color: "black" }}
                  className="rounded-full bg-(--signal-cream) px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#11151b] transition hover:bg-white"
                >
                  Scholarship info
                </a>
                <a
                  href="/Riley Paulsen - Sinclair Nzenwata.pdf"
                  download
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/84 transition hover:border-white/30 hover:bg-white/10"
                >
                  Recommendation letter
                </a>
              </div>
            </div>

            <div className="space-y-4 rounded-4xl border border-white/10 bg-(--surface) p-6 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.28em] text-white/46">
                Trajectory markers
              </p>
              <div className="grid gap-4">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="border-t border-white/10 pt-4 first:border-t-0 first:pt-0"
                  >
                    <p className="text-xs uppercase tracking-[0.28em] text-white/42">
                      {metric.label}
                    </p>
                    <p className="mt-1 font-display text-3xl leading-none text-(--signal-cream)">
                      {metric.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/64">
                      {metric.context}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
