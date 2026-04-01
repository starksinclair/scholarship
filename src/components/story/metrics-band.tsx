import type { FounderMetric } from "@/lib/types";

type MetricsBandProps = {
  metrics: FounderMetric[];
};

export function MetricsBand({ metrics }: MetricsBandProps) {
  return (
    <section className="border-y border-white/10 bg-[rgba(242,230,216,0.04)]">
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-16">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {metrics.map((metric) => (
            <article key={metric.label} className="border-l border-white/10 pl-5">
              <p className="text-xs uppercase tracking-[0.28em] text-white/44">
                {metric.label}
              </p>
              <p className="mt-2 font-display text-3xl leading-none text-[var(--signal-cream)]">
                {metric.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-white/62">
                {metric.context}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
