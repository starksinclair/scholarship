"use client";

import { MotionInView } from "@/components/story/motion-in-view";
import {
  stateInternetData,
  zoneData,
  monthlyTrend,
  DATA_SOURCE,
} from "@/lib/content/telecom-data";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Cell,
} from "recharts";

const AMBER = "#d6935d";
const CREAM = "#f2e6d8";
const STEEL = "#314356";
const MUTED = "#9da7b7";

function millions(n: number) {
  return `${(n / 1_000_000).toFixed(1)}M`;
}

function ChartTooltipContent({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { value: number; name: string; color: string }[];
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-white/10 bg-[#0d121a] px-3 py-2 text-xs shadow-xl">
      <p className="mb-1 text-white/50">{label}</p>
      {payload.map((p) => (
        <p key={p.name} style={{ color: p.color }} className="font-medium">
          {p.name}: {millions(p.value)}
        </p>
      ))}
    </div>
  );
}

function StateChart() {
  const sorted = [...stateInternetData].sort(
    (a, b) => a.internetSubs - b.internetSubs
  );
  const bottom = sorted.slice(0, 8);
  const top = sorted.slice(-4);
  const data = [...bottom, ...top].map((s) => ({
    name: s.state,
    subs: s.internetSubs,
    isTop: top.includes(s),
  }));

  return (
    <div>
      <p className="mb-1 text-xs uppercase tracking-[0.28em] text-white/42">
        Internet subscriptions by state
      </p>
      <h3 className="mb-2 font-display text-2xl text-(--signal-cream) md:text-3xl">
        Lagos alone has more internet users than the bottom 8 states combined.
      </h3>
      <p className="mb-6 text-sm text-white/50">
        Active internet subscriptions, Q3 2023. The 4 most connected states
        compared with the 8 least connected.
      </p>
      <div className="h-72 w-full min-w-0 md:h-80">
        <ResponsiveContainer width="100%" height="100%" minWidth={200} minHeight={200}>
          <BarChart
            data={data}
            layout="vertical"
            margin={{ left: 0, right: 12, top: 0, bottom: 0 }}
          >
            <XAxis
              type="number"
              tickFormatter={millions}
              tick={{ fill: MUTED, fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              dataKey="name"
              type="category"
              width={90}
              tick={{ fill: CREAM, fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<ChartTooltipContent />} />
            <Bar dataKey="subs" name="Internet subs" radius={[0, 4, 4, 0]}>
              {data.map((d) => (
                <Cell
                  key={d.name}
                  fill={d.isTop ? AMBER : STEEL}
                  fillOpacity={d.isTop ? 1 : 0.7}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function ZoneChart() {
  const data = zoneData.map((z) => ({
    name: z.zone,
    subs: z.totalSubs,
    avg: z.avgPerState,
    states: z.stateCount,
  }));

  return (
    <div>
      <p className="mb-1 text-xs uppercase tracking-[0.28em] text-white/42">
        Internet subscriptions by region
      </p>
      <h3 className="mb-2 font-display text-2xl text-(--signal-cream) md:text-3xl">
        The North-East — where the scholarship targets — has the least access.
      </h3>
      <p className="mb-6 text-sm text-white/50">
        Total active internet subscriptions by geopolitical zone, Q3 2023.
      </p>
      <div className="h-64 w-full min-w-0 md:h-72">
        <ResponsiveContainer width="100%" height="100%" minWidth={200} minHeight={200}>
          <BarChart
            data={data}
            margin={{ left: 0, right: 12, top: 0, bottom: 0 }}
          >
            <XAxis
              dataKey="name"
              tick={{ fill: CREAM, fontSize: 10 }}
              axisLine={false}
              tickLine={false}
              interval={0}
              angle={-20}
              textAnchor="end"
              height={50}
            />
            <YAxis
              tickFormatter={millions}
              tick={{ fill: MUTED, fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<ChartTooltipContent />} />
            <Bar dataKey="subs" name="Internet subs" radius={[4, 4, 0, 0]}>
              {data.map((d) => (
                <Cell
                  key={d.name}
                  fill={
                    d.name === "North-East" || d.name === "North-West"
                      ? AMBER
                      : STEEL
                  }
                  fillOpacity={
                    d.name === "North-East" || d.name === "North-West"
                      ? 1
                      : 0.6
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function TrendChart() {
  const sampled = monthlyTrend.filter((_, i) => i % 3 === 0 || i === monthlyTrend.length - 1);

  return (
    <div>
      <p className="mb-1 text-xs uppercase tracking-[0.28em] text-white/42">
        Demand is growing — infrastructure is not keeping up
      </p>
      <h3 className="mb-2 font-display text-2xl text-(--signal-cream) md:text-3xl">
        Voice subscriptions outpace internet access by 60+ million.
      </h3>
      <p className="mb-6 text-sm text-white/50">
        Monthly active subscriptions, Jun 2020 – Aug 2023. The gap between voice
        and internet shows how many Nigerians have phones but lack data access.
      </p>
      <div className="h-64 w-full min-w-0 md:h-72">
        <ResponsiveContainer width="100%" height="100%" minWidth={200} minHeight={200}>
          <AreaChart
            data={sampled}
            margin={{ left: 0, right: 12, top: 8, bottom: 0 }}
          >
            <defs>
              <linearGradient id="voiceGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={CREAM} stopOpacity={0.2} />
                <stop offset="100%" stopColor={CREAM} stopOpacity={0.02} />
              </linearGradient>
              <linearGradient id="internetGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={AMBER} stopOpacity={0.3} />
                <stop offset="100%" stopColor={AMBER} stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.06)"
              vertical={false}
            />
            <XAxis
              dataKey="month"
              tick={{ fill: MUTED, fontSize: 10 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tickFormatter={millions}
              tick={{ fill: MUTED, fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              domain={[120_000_000, 240_000_000]}
            />
            <Tooltip content={<ChartTooltipContent />} />
            <Area
              type="monotone"
              dataKey="voiceSubs"
              name="Voice subs"
              stroke={CREAM}
              strokeWidth={1.5}
              fill="url(#voiceGrad)"
            />
            <Area
              type="monotone"
              dataKey="internetSubs"
              name="Internet subs"
              stroke={AMBER}
              strokeWidth={2}
              fill="url(#internetGrad)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function InfrastructureCharts() {
  return (
    <section className="border-y border-white/10 bg-[linear-gradient(180deg,rgba(10,12,16,0.98),rgba(12,14,18,0.98))]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
        <MotionInView className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/44">
            NCC infrastructure data
          </p>
          <h2 className="mt-4 font-display text-5xl leading-[0.94] tracking-[-0.03em] text-(--signal-cream) md:text-6xl">
            The data shows where access is rationed.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/60">
            Three views of the same problem — drawn from official Nigerian
            Communications Commission data — that show why infrastructure, not
            talent, determines who gets to build.
          </p>
        </MotionInView>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <MotionInView delay={0.06}>
            <div className="rounded-4xl border border-white/10 bg-white/3 p-6 md:p-8">
              <StateChart />
            </div>
          </MotionInView>

          <MotionInView delay={0.1}>
            <div className="rounded-4xl border border-[rgba(214,147,93,0.24)] bg-[rgba(214,147,93,0.04)] p-6 md:p-8">
              <ZoneChart />
            </div>
          </MotionInView>
        </div>

        <MotionInView delay={0.14}>
          <div className="mt-8 rounded-4xl border border-white/10 bg-white/3 p-6 md:p-8">
            <TrendChart />
          </div>
        </MotionInView>

        <p className="mt-6 text-[10px] tracking-wide text-white/30">
          Source: {DATA_SOURCE.label} ({DATA_SOURCE.file})
        </p>
      </div>
    </section>
  );
}
