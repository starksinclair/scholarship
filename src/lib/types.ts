export type SceneTheme = "night" | "steel" | "ember" | "light";
export type SceneAlign = "left" | "right";

export type StoryScene = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  quote?: string;
  theme: SceneTheme;
  align: SceneAlign;
  media: {
    src: string;
    alt: string;
    label: string;
  };
};

export type ProofItem = {
  id: string;
  title: string;
  label: string;
  description: string;
  href: string;
  image: string;
  type: string;
  date?: string;
};

export type FounderMetric = {
  label: string;
  value: string;
  context: string;
};

export type ScholarshipSpec = {
  name: string;
  thesis: string;
  annualCohortSize: number;
  seedAmountUsd: number;
  benefits: string[];
  eligibility: string[];
  selectionCriteria: string[];
  successMetric: string;
  proposalQuestion: string;
  cohortFlow: string[];
};

export type FocusArea = {
  id: string;
  title: string;
  description: string;
  impactStatement: string;
};

export type FounderClose = {
  note: string;
  signature: string;
  title: string;
};

export type AccessStat = {
  value: string;
  label: string;
  context: string;
  source: string;
  sourceUrl: string;
};
