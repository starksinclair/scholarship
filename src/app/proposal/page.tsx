import type { Metadata } from "next";
import Link from "next/link";
import {
  focusAreas,
  founderClose,
  proofItems,
  scholarshipSpec,
  storyScenes,
} from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Access to Build Proposal",
  description:
    "A print-friendly scholarship proposal for Access to Build by Sinclair Nzenwata.",
};

export default function ProposalPage() {
  return (
    <main className="proposal-print min-h-screen bg-[linear-gradient(180deg,#f4ede4,#ffffff)] text-[#161b22]">
      <div className="mx-auto max-w-5xl px-6 py-10 md:px-10 lg:px-12">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 pb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-black/52">
              Access to Build
            </p>
            <h1 className="mt-3 font-display text-5xl leading-none tracking-[-0.03em]">
              Printable Proposal
            </h1>
          </div>
          <Link
            href="/"
            className="rounded-full border border-black/12 px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-black/72 transition hover:border-black/20 hover:bg-black/[0.04]"
          >
            Back to immersive site
          </Link>
        </div>

        <section className="mt-10 grid gap-8 md:grid-cols-[minmax(0,1fr)_280px]">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-black/52">
              Author
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight">
              Sinclair Nzenwata
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-black/72">
              I learned to program on a phone before I owned a laptop. Limited
              hardware, restricted mobility, and unreliable internet slowed my
              growth in Nigeria, but they never removed the drive. Studying in
              the United States gave me the environment to build at the pace I
              knew I was capable of, and this proposal is my plan to multiply
              that same shift for other young builders in Nigeria.
            </p>
          </div>

          <div className="rounded-[1.6rem] border border-black/10 bg-white p-6 shadow-[0_24px_60px_rgba(0,0,0,0.06)]">
            <p className="text-xs uppercase tracking-[0.28em] text-black/45">
              Proposal summary
            </p>
            <dl className="mt-4 space-y-4">
              <div>
                <dt className="text-xs uppercase tracking-[0.24em] text-black/44">
                  Annual cohort
                </dt>
                <dd className="mt-1 font-display text-4xl">
                  {scholarshipSpec.annualCohortSize}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.24em] text-black/44">
                  Seed support
                </dt>
                <dd className="mt-1 font-display text-4xl">
                  ${scholarshipSpec.seedAmountUsd.toLocaleString()}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.24em] text-black/44">
                  End goal
                </dt>
                <dd className="mt-1 text-sm leading-7 text-black/70">
                  Working prototype or community project used by at least 10
                  Nigerians within one year.
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="mt-12 border-t border-black/10 pt-10">
          <p className="text-sm uppercase tracking-[0.28em] text-black/52">
            Personal story
          </p>
          <div className="mt-5 space-y-5 text-base leading-8 text-black/74">
            {storyScenes.map((scene) => (
              <p key={scene.id}>
                <span className="font-semibold text-black">{scene.title}</span>{" "}
                {scene.body.replaceAll("\n\n", " ")}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-8 border-t border-black/10 pt-10 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-black/52">
              Scholarship overview
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight">
              {scholarshipSpec.name}
            </h2>
            <p className="mt-4 text-base leading-8 text-black/74">
              {scholarshipSpec.thesis}
            </p>
            <p className="mt-4 text-base leading-8 text-black/74">
              The scholarship is designed for young Nigerian builders who are
              already trying to ship useful products but lack critical
              infrastructure: hardware, reliable internet, seed support, and
              mentorship.
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-black/52">
              What it funds
            </p>
            <ul className="mt-4 space-y-4 text-base leading-8 text-black/74">
              {scholarshipSpec.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-12 grid gap-8 border-t border-black/10 pt-10 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-black/52">
              Focus areas
            </p>
            <div className="mt-4 space-y-4">
              {focusAreas.map((area) => (
                <div key={area.id} className="rounded-[1.4rem] border border-black/10 bg-white p-5">
                  <h3 className="font-display text-3xl">{area.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-black/72">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-black/52">
              Eligibility and process
            </p>
            <ul className="mt-4 space-y-4 text-base leading-8 text-black/74">
              {scholarshipSpec.eligibility.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p className="mt-8 text-sm uppercase tracking-[0.28em] text-black/52">
              Selection flow
            </p>
            <ol className="mt-4 space-y-4 text-base leading-8 text-black/74">
              {scholarshipSpec.cohortFlow.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mt-12 border-t border-black/10 pt-10">
          <p className="text-sm uppercase tracking-[0.28em] text-black/52">
            Proof references
          </p>
          <div className="mt-4 grid gap-4">
            {proofItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.4rem] border border-black/10 bg-white p-5 transition hover:border-black/20 hover:bg-black/[0.02]"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-black/48">
                  {item.label}
                </p>
                <p className="mt-2 font-display text-3xl">{item.title}</p>
                <p className="mt-2 text-sm leading-7 text-black/70">
                  {item.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-8 border-t border-black/10 pt-10 md:grid-cols-[minmax(0,1fr)_280px]">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-black/52">
              Success metric
            </p>
            <p className="mt-4 font-display text-4xl leading-tight">
              {scholarshipSpec.successMetric}
            </p>
            <p className="mt-6 text-base leading-8 text-black/74">
              The ambition is not to award potential in the abstract. It is to
              fund builders who can reach real users and prove that with
              infrastructure, their work can move from possibility to adoption.
            </p>
          </div>

          <div className="rounded-[1.6rem] border border-black/10 bg-white p-6 shadow-[0_24px_60px_rgba(0,0,0,0.06)]">
            <p className="text-xs uppercase tracking-[0.28em] text-black/48">
              AI-use disclosure
            </p>
            <p className="mt-3 font-display text-3xl">Transparency note</p>
            <p className="mt-3 text-sm leading-7 text-black/66">
              AI tools were used during the creation of this submission to help
              rephrase text for clarity and to ensure correct English grammar
              and spelling. All ideas, scholarship design, personal narrative,
              and data analysis are original work by the author. The website,
              its code, and all interactive elements were built by the author
              with AI-assisted development tooling.
            </p>
          </div>
        </section>

        <section className="mt-12 border-t border-black/10 pt-10">
          <p className="font-display text-4xl leading-tight">
            {founderClose.note}
          </p>
          <p className="mt-6 text-sm uppercase tracking-[0.28em] text-black/52">
            {founderClose.signature} · {founderClose.title}
          </p>
        </section>
      </div>
    </main>
  );
}
