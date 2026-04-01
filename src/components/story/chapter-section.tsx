import Image from "next/image";
import { MotionInView } from "@/components/story/motion-in-view";
import type { StoryScene } from "@/lib/types";

const themeClasses: Record<StoryScene["theme"], string> = {
  night:
    "bg-[linear-gradient(180deg,rgba(10,13,18,0.96),rgba(12,16,23,0.82))]",
  steel:
    "bg-[linear-gradient(180deg,rgba(14,20,28,0.94),rgba(17,27,37,0.86))]",
  ember:
    "bg-[linear-gradient(180deg,rgba(19,15,18,0.95),rgba(33,24,20,0.88))]",
  light:
    "bg-[linear-gradient(180deg,rgba(21,17,15,0.95),rgba(28,22,18,0.9))]",
};

type ChapterSectionProps = {
  scene: StoryScene;
  priority?: boolean;
  id?: string;
};

export function ChapterSection({
  scene,
  priority = false,
  id,
}: ChapterSectionProps) {
  return (
    <section
      id={id}
      className={`section-shell ${themeClasses[scene.theme]} rounded-[2.2rem] px-6 py-16 md:px-10 md:py-20`}
    >
      <div
        className={`grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(280px,0.8fr)] lg:items-center ${
          scene.align === "right" ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <MotionInView className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/42">
            {scene.eyebrow}
          </p>
          <h2 className="mt-5 font-display text-5xl leading-[0.95] tracking-[-0.03em] text-[var(--signal-cream)] md:text-6xl">
            {scene.title}
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-white/72 md:text-lg">
            {scene.body.split("\n\n").map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {scene.quote ? (
            <p className="mt-8 max-w-xl border-l border-[rgba(214,147,93,0.42)] pl-5 font-display text-2xl leading-tight text-white/86">
              {scene.quote}
            </p>
          ) : null}
        </MotionInView>

        <MotionInView
          className="relative mx-auto w-full max-w-xl"
          delay={0.08}
        >
          <div className="rounded-[2rem] border border-white/12 bg-white/[0.03] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#0e141c] p-4">
              <div className="mb-4 flex items-center justify-between text-[0.68rem] uppercase tracking-[0.3em] text-white/38">
                <span>Story artifact</span>
                <span>Placeholder visual</span>
              </div>
              <Image
                src={scene.media.src}
                alt={scene.media.alt}
                width={860}
                height={640}
                priority={priority}
                className="aspect-[4/3] w-full rounded-[1.15rem] border border-white/8 object-cover"
              />
              <p className="mt-4 text-sm leading-6 text-white/52">
                {scene.media.label}
              </p>
            </div>
          </div>
        </MotionInView>
      </div>
    </section>
  );
}
