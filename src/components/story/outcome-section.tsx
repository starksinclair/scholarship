import { MotionInView } from "@/components/story/motion-in-view";
import type { ScholarshipSpec } from "@/lib/types";

type OutcomeSectionProps = {
  scholarshipSpec: ScholarshipSpec;
};

export function OutcomeSection({ scholarshipSpec }: OutcomeSectionProps) {
  return (
    <section className="border-y border-white/10 bg-[linear-gradient(180deg,rgba(17,17,17,0.98),rgba(11,12,15,0.98))]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
        <MotionInView className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/44">
            Outcome model
          </p>
          <h2 className="mt-4 font-display text-5xl leading-[0.94] tracking-[-0.03em] text-[var(--signal-cream)] md:text-6xl">
            Talent without tools becomes a delay. Talent with tools becomes a
            product.
          </h2>
        </MotionInView>

        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <MotionInView>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7">
              <p className="text-xs uppercase tracking-[0.28em] text-white/42">
                Before
              </p>
              <ul className="mt-4 space-y-4 text-base leading-8 text-white/68">
                <li>Strong curiosity but no reliable hardware</li>
                <li>Slow learning because internet access is inconsistent</li>
                <li>Few mentors, little structure, and almost no seed support</li>
              </ul>
            </div>
          </MotionInView>

          <MotionInView delay={0.08}>
            <div className="rounded-[2rem] border border-[rgba(214,147,93,0.24)] bg-[rgba(214,147,93,0.06)] p-7">
              <p className="text-xs uppercase tracking-[0.28em] text-white/42">
                After
              </p>
              <ul className="mt-4 space-y-4 text-base leading-8 text-white/74">
                <li>Laptop, internet support, mentorship, and seed funding</li>
                <li>Shipped prototype or community project with visible traction</li>
                <li>First real users in Nigeria and a builder identity strengthened by proof</li>
              </ul>
            </div>
          </MotionInView>
        </div>

        <MotionInView className="mt-8 rounded-[2rem] border border-white/10 bg-[var(--surface)] p-7" delay={0.12}>
          <p className="text-xs uppercase tracking-[0.28em] text-white/42">
            Success metric
          </p>
          <p className="mt-4 max-w-4xl font-display text-4xl leading-tight text-[var(--signal-cream)] md:text-5xl">
            {scholarshipSpec.successMetric}
          </p>
        </MotionInView>
      </div>
    </section>
  );
}
