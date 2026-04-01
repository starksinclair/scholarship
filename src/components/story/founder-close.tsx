
import { MotionInView } from "@/components/story/motion-in-view";
import type { FounderClose as FounderCloseType } from "@/lib/types";

type FounderCloseProps = {
  founderClose: FounderCloseType;
};

const interestFormUrl = "https://forms.gle/q1Fwxd1ZmA2Ux8W9A";
const sponsorFormUrl = "https://forms.gle/BMZFdxbmiW2HgzFu9";

export function FounderClose({ founderClose }: FounderCloseProps) {
  return (
    <section className="bg-[linear-gradient(180deg,rgba(12,13,16,0.98),rgba(9,10,12,1))]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
        <MotionInView className="rounded-[2.2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))] p-8 md:p-12">
          <p className="text-xs uppercase tracking-[0.32em] text-white/44">
            Closing Remarks
          </p>
          <p className="mt-5 max-w-4xl font-display text-4xl leading-tight text-[var(--signal-cream)] md:text-6xl">
            {founderClose.note}
          </p>
          <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-display text-3xl text-[var(--signal-cream)]">
                {founderClose.signature}
              </p>
              <p className="mt-2 text-sm uppercase tracking-[0.28em] text-white/46">
                {founderClose.title}
              </p>
            </div>
          </div>
        </MotionInView>

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <MotionInView className="rounded-4xl border border-white/10 bg-white/3 p-7">
            <p className="text-xs uppercase tracking-[0.28em] text-white/42">
              Interested applicants
            </p>
            <h3 className="mt-4 font-display text-4xl leading-tight text-(--signal-cream)">
              Get notified when Access to Build opens.
            </h3>
            <p className="mt-4 max-w-xl text-base leading-8 text-white/68">
              If you want to apply when the scholarship rolls out, use the
              interest form and leave your contact details. I’ll use that list
              to notify future applicants when applications are live.
            </p>
            <a
              href={interestFormUrl}
              target="_blank"
              rel="noreferrer"
              style={{ color: "black" }}
              className="mt-6 inline-flex rounded-full text-black bg-(--signal-cream) px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] transition hover:bg-white"
            >
              Join applicant waitlist
            </a>
          </MotionInView>

          <MotionInView
            className="rounded-4xl border border-[rgba(214,147,93,0.24)] bg-[rgba(214,147,93,0.06)] p-7"
            delay={0.08}
          >
            <p className="text-xs uppercase tracking-[0.28em] text-white/42">
              Sponsors and partners
            </p>
            <h3 className="mt-4 font-display text-4xl leading-tight text-[var(--signal-cream)]">
              Help sponsor access for students studying abroad and building for
              home.
            </h3>
            <p className="mt-4 max-w-xl text-base leading-8 text-white/70">
              If you want to support the scholarship as a sponsor, mentor, or
              partner, use the same form to express interest. The goal is to
              build a network that funds devices, internet, seed support, and
              long-term opportunity for students with real builder potential.
            </p>
            <a
              href={sponsorFormUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full border border-white/14 px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/78 transition hover:border-white/28 hover:bg-white/[0.06]"
            >
              Become a sponsor
            </a>
          </MotionInView>
        </div>
      </div>
    </section>
  );
}
