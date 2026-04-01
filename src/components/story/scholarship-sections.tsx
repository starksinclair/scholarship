import { MotionInView } from "@/components/story/motion-in-view";
import type { FocusArea, ScholarshipSpec } from "@/lib/types";

type ScholarshipSectionsProps = {
  scholarshipSpec: ScholarshipSpec;
  focusAreas: FocusArea[];
};

export function ScholarshipSections({
  scholarshipSpec,
  focusAreas,
}: ScholarshipSectionsProps) {
  return (
    <>
      <section className="border-y border-white/10 bg-[linear-gradient(180deg,rgba(18,13,12,0.96),rgba(20,14,12,0.94))]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
          <MotionInView className="max-w-4xl">
            {/* <p className="text-xs uppercase tracking-[0.32em] text-white/44">
              Scholarship thesis
            </p> */}
            <h2 className="mt-5 font-display text-[clamp(3.4rem,7vw,6.6rem)] leading-[0.9] tracking-[-0.04em] text-(--signal-cream)">
              {scholarshipSpec.thesis}
            </h2>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/70">
              Access to Build is not meant for the most polished applicant on
              paper. It is meant for the young builder who is already trying to
              ship something useful but is blocked by the same structural limits
              that once slowed me down.
            </p>
          </MotionInView>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,rgba(16,12,11,0.98),rgba(15,16,20,0.98))]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:px-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.85fr)] lg:px-16">
          <MotionInView>
            <p className="text-xs uppercase tracking-[0.32em] text-white/44">
              Structure
            </p>
            <h2 className="mt-4 font-display text-5xl leading-[0.94] tracking-[-0.03em] text-(--signal-cream) md:text-6xl">
              Fund the tools. Back the builders. Require something real at the
              end.
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.6rem] border border-white/10 bg-white/3 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-white/42">
                  Annual cohort
                </p>
                <p className="mt-2 font-display text-5xl text-(--signal-cream)">
                  {scholarshipSpec.annualCohortSize}
                </p>
              </div>
              <div className="rounded-[1.6rem] border border-white/10 bg-white/3 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-white/42">
                  Seed support
                </p>
                <p className="mt-2 font-display text-5xl text-(--signal-cream)">
                  ${scholarshipSpec.seedAmountUsd.toLocaleString()}
                </p>
              </div>
              <div className="rounded-[1.6rem] border border-white/10 bg-white/3 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-white/42">
                  Success signal
                </p>
                <p className="mt-2 font-display text-5xl text-(--signal-cream)">
                  10+
                </p>
              </div>
            </div>
          </MotionInView>

          <MotionInView delay={0.08}>
            <div className="rounded-4xl border border-white/10 bg-surface p-7">
              <p className="text-xs uppercase tracking-[0.32em] text-white/44">
                Scholar package
              </p>
              <ul className="mt-5 space-y-4">
                {scholarshipSpec.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="border-t border-white/10 pt-4 text-base leading-7 text-white/68 first:border-t-0 first:pt-0"
                  >
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </MotionInView>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[linear-gradient(180deg,rgba(17,20,24,0.98),rgba(15,17,21,0.98))]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
          <MotionInView className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.32em] text-white/44">
              Focus areas
            </p>
            <h2 className="mt-4 font-display text-5xl leading-[0.94] tracking-[-0.03em] text-(--signal-cream) md:text-6xl">
              Build where infrastructure can change the most outcomes.
            </h2>
          </MotionInView>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {focusAreas.map((area, index) => (
              <MotionInView key={area.id} delay={index * 0.06}>
                <article className="rounded-[1.9rem] border border-white/10 bg-white/3 p-7">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/42">
                    Focus {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display text-4xl leading-tight text-(--signal-cream)">
                    {area.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-white/68">
                    {area.description}
                  </p>
                  <p className="mt-5 border-l border-[rgba(214,147,93,0.45)] pl-4 text-sm leading-7 text-white/60">
                    {area.impactStatement}
                  </p>
                </article>
              </MotionInView>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,rgba(15,15,15,0.98),rgba(12,13,16,0.98))]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:px-10 lg:grid-cols-2 lg:px-16">
          <MotionInView>
            <p className="text-xs uppercase tracking-[0.32em] text-white/44">
              Eligibility
            </p>
            <h2 className="mt-4 font-display text-5xl leading-[0.94] tracking-[-0.03em] text-(--signal-cream) md:text-6xl">
              Prioritize builders who already show motion.
            </h2>
            <ul className="mt-8 space-y-4">
              {scholarshipSpec.eligibility.map((item) => (
                <li
                  key={item}
                  className="border-t border-white/10 pt-4 text-base leading-8 text-white/68 first:border-t-0 first:pt-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </MotionInView>

          <MotionInView delay={0.08}>
            <p className="text-xs uppercase tracking-[0.32em] text-white/44">
              Selection process
            </p>
            <div className="mt-4 rounded-4xl border border-white/10 bg-surface p-7">
              <ol className="space-y-5">
                {scholarshipSpec.cohortFlow.map((step, index) => (
                  <li key={step} className="grid grid-cols-[auto_1fr] gap-4">
                    <span className="font-display text-4xl text-(--signal-cream)">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-base leading-8 text-white/68">{step}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-xs uppercase tracking-[0.28em] text-white/42">
                  Judges review for
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-white/62">
                  {scholarshipSpec.selectionCriteria.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </MotionInView>
        </div>
      </section>
    </>
  );
}
