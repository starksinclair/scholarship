import { MotionInView } from "@/components/story/motion-in-view";
import type { AccessStat } from "@/lib/types";

type AccessStatsSectionProps = {
  stats: AccessStat[];
};

export function AccessStatsSection({ stats }: AccessStatsSectionProps) {
  const headline = stats[0];
  const rest = stats.slice(1);

  return (
    <section className="border-y border-white/10 bg-[linear-gradient(180deg,rgba(12,14,18,0.98),rgba(10,11,14,0.98))]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
        <MotionInView className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/44">
            The access gap in numbers
          </p>
          <h2 className="mt-4 font-display text-5xl leading-[0.94] tracking-[-0.03em] text-(--signal-cream) md:text-6xl">
            The problem is not talent. The problem is infrastructure.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/60">
            These figures show why access — not ability — is the bottleneck for
            millions of young Nigerians trying to build.
          </p>
        </MotionInView>

        {headline && (
          <MotionInView
            className="mt-14 rounded-4xl border border-[rgba(214,147,93,0.24)] bg-[rgba(214,147,93,0.06)] p-8 md:p-10"
            delay={0.06}
          >
            <p className="text-xs uppercase tracking-[0.28em] text-white/42">
              {headline.label}
            </p>
            <p className="mt-3 font-display text-[clamp(4rem,10vw,8rem)] leading-[0.88] tracking-[-0.04em] text-(--signal-amber)">
              {headline.value}
            </p>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/70">
              {headline.context}
            </p>
            <a
              href={headline.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-xs tracking-wide text-white/40 underline decoration-white/20 underline-offset-4 transition hover:text-white/60"
            >
              {headline.source}
            </a>
          </MotionInView>
        )}

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((stat, index) => (
            <MotionInView key={stat.label} delay={0.04 * (index + 1)}>
              <div className="flex h-full flex-col rounded-[1.6rem] border border-white/10 bg-white/3 p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-white/42">
                  {stat.label}
                </p>
                <p className="mt-2 font-display text-5xl text-(--signal-cream)">
                  {stat.value}
                </p>
                <p className="mt-3 flex-1 text-sm leading-7 text-white/60">
                  {stat.context}
                </p>
                <a
                  href={stat.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 self-start text-[10px] tracking-wide text-white/36 underline decoration-white/16 underline-offset-4 transition hover:text-white/56"
                >
                  {stat.source}
                </a>
              </div>
            </MotionInView>
          ))}
        </div>
      </div>
    </section>
  );
}
