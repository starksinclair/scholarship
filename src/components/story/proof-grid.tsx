import Image from "next/image";
import { MotionInView } from "@/components/story/motion-in-view";
import type { ProofItem } from "@/lib/types";

type ProofGridProps = {
  items: ProofItem[];
};

export function ProofGrid({ items }: ProofGridProps) {
  return (
    <section id="proof" className="space-y-10">
      <MotionInView className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.32em] text-white/44">
          Proof of trajectory
        </p>
        <h2 className="mt-4 font-display text-5xl leading-[0.95] tracking-[-0.03em] text-[var(--signal-cream)] md:text-6xl">
          The argument only works if the work is real.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
          These are the public markers I can point to today: academic
          performance, shipped products, startup work, research, and competition
          results. They are the bridge between my story and the scholarship I am
          proposing.
        </p>
      </MotionInView>

      <div className="space-y-5">
        {items.map((item, index) => (
          <MotionInView key={item.id} delay={index * 0.05}>
            <article className="rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.03)] p-5 md:p-7">
              <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:items-center">
                <Image
                  src={item.image}
                  alt={`${item.title} placeholder visual`}
                  width={720}
                  height={540}
                  className="aspect-[4/3] w-full rounded-[1.5rem] border border-white/8 object-cover"
                />

                <div>
                  <div className="flex flex-wrap items-center gap-3 text-[0.72rem] uppercase tracking-[0.28em] text-white/44">
                    <span>{item.label}</span>
                    <span className="h-1 w-1 rounded-full bg-white/28" />
                    <span>{item.type}</span>
                    {item.date ? (
                      <>
                        <span className="h-1 w-1 rounded-full bg-white/28" />
                        <span>{item.date}</span>
                      </>
                    ) : null}
                  </div>

                  <h3 className="mt-4 font-display text-4xl leading-tight text-[var(--signal-cream)]">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-white/68">
                    {item.description}
                  </p>

                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex rounded-full border border-white/14 px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/78 transition hover:border-white/28 hover:bg-white/[0.06]"
                  >
                    Open source link
                  </a>
                </div>
              </div>
            </article>
          </MotionInView>
        ))}
      </div>
    </section>
  );
}
