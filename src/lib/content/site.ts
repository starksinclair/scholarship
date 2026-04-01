import type {
  AccessStat,
  FocusArea,
  FounderClose,
  FounderMetric,
  ProofItem,
  ScholarshipSpec,
  StoryScene,
} from "@/lib/types";

export const founderMetrics: FounderMetric[] = [
  {
    label: "Ball State GPA",
    value: "4.0",
    context: "Computer Science, minor in Computer Technology",
  },
  {
    label: "Current Role",
    value: "Digital Corps",
    context: "Software Engineer building faculty web and mobile products",
  },
  {
    label: "Builder Role",
    value: "Co-Founder",
    context: "Naahia, a student-focused marketplace platform",
  },
  {
    label: "Competition",
    value: "XTERN Finalist",
    context: "Second-place team placement in Cummins' 2026 challenge",
  },
  {
    label: "Shipped Product",
    value: "WillItRain",
    context:
      "Published weather forecasting app built during NASA Space Apps Hackathon",
  },
];

export const storyScenes: StoryScene[] = [
  {
    id: "origin",
    eyebrow: "Chapter 01",
    title:
      "I started learning to program on a phone before I ever owned a computer.",
    body: "I grew up with more curiosity than infrastructure. I kept asking one question over and over: how are websites made?\n\nThat question pulled me into programming, but the first version of my learning environment was not a desk setup. It was my phone. I read, watched, and practiced there because that was the access I had.",
    quote: "The curiosity came first. The hardware came later.",
    theme: "night",
    align: "left",
    media: {
      src: "/main/origin-phone.jpg",
      alt: "Learning on a phone",
      label: "This was me learning to code on a phone",
    },
  },
  {
    id: "barrier",
    eyebrow: "Chapter 02",
    title:
      "The challenge was never whether I could learn. It was whether I could reach the tools.",
    body: "I did not have enough money to get a computer. I also could not freely leave the house to find one somewhere else. Even when I pushed forward, poor internet access slowed everything down and cut my learning speed in half.\n\nIt became obvious to me that I was not lagging because of ability. I was lagging because access was rationed.",
    quote: "Lack of access can look like lack of talent from the outside.",
    theme: "steel",
    align: "right",
    media: {
      src: "/main/access.jpg",
      alt: "Sinclair thinking about how to get a computer",
      label: "This was me — trying to figure out how to get a computer so I could actually build.",
    },
  },
  {
    id: "breakthrough",
    eyebrow: "Chapter 03",
    title:
      "When my father saw the determination, he bought me a Dell Latitude. Everything accelerated.",
    body: "That laptop was more than a device. It was proof that persistence can move people around you. Once I had a machine of my own, I started improving fast, building websites, learning deeper concepts, and testing what I could make with my own hands.\n\nAccess did not create my drive. It unlocked the full expression of it.",
    quote:
      "The turning point was not motivation. It was a machine, a signal, and room to build.",
    theme: "ember",
    align: "left",
    media: {
      src: "/main/laptop-breakthrough.jpg",
      alt: "The Dell Latitude turning point",
      label: "This was me trying to remake fiverr",
    },
  },
  {
    id: "abroad",
    eyebrow: "Chapter 04",
    title:
      "Studying in the United States was my way of catching up with the version of myself that access had delayed.",
    body: "During college in Nigeria, the internet bottleneck was still there. I knew I needed a different environment if I wanted to compete at the level I believed I could reach. After convincing my father and negotiating for the chance, I studied abroad.\n\nThat decision changed my trajectory. At Ball State, I became stronger at building, joined serious teams, won competitions, worked across web, mobile, data, and AI, and started preparing to launch a startup that serves students and communities back home.",
    quote:
      "Global education did not change my ambition. It gave me a vision of what I could build.",
    theme: "light",
    align: "right",
    media: {
      src: "/main/global-path.jpeg",
      alt: "A path from Nigeria to the United States",
      label: "This was me displaying a project built in VR at Ball State.",
    },
  },
];

export const proofItems: ProofItem[] = [
  {
    id: "digital-corps",
    title: "Software Engineer, Ball State Digital Corps",
    label: "Current role",
    description:
      "Collaborating with designers, videographers, developers, and project managers to ship web and mobile applications for faculty using React, TypeScript, MySQL, and Duo SSO.",
    href: "https://www.bsu.edu/academics/centersandinstitutes/digital-corps",
    image: "/main/digital-corps.jpeg",
    type: "experience",
  },
  {
    id: "naahia",
    title: "Co-Founder and Software Engineer, Naahia",
    label: "Startup building",
    description:
      "Building a marketplace platform for buying, selling, and services within university communities, with a React Native app, AdonisJS services, CI/CD, Docker, and app store deployment pipelines.",
    href: "https://naahia.com",
    image: "/main/naahia1.png",
    type: "startup",
  },
  {
    id: "xtern",
    title: "Second-place team in the 2026 Cummins XTERN Challenge",
    label: "Public award",
    description:
      "A public competition result that supports the story of technical growth, collaboration, and execution under pressure.",
    href: "https://techpoint.org/cummins-xtern-challenge-2026-recap/",
    image: "/main/techpoint.jpeg",
    type: "competition",
    date: "March 2026",
  },
  {
    id: "willitrain",
    title: "WillItRain mobile app",
    label: "Published product",
    description:
      "A published weather forecasting app built during the NASA International Space Apps Hackathon using React Native, NASA POWER API, and Python.",
    href: "https://apps.apple.com/gb/app/wilitrain/id6753659941",
    image: "/main/willitrain.jpg",
    type: "product",
  },
  {
    id: "healthpal",
    title: "Healthpal project listing",
    label: "AI systems work",
    description:
      "A public listing tied to an AI developer competition that supports the story of cross-disciplinary product building.",
    href: "https://ai.google.dev/competition/projects/healthpal",
    image: "/main/healthpal.jpg",
    type: "project",
  },
  {
    id: "research",
    title: "Undergraduate Data Science Researcher, Purdue's The Data Mine",
    label: "Academic research",
    description:
      "Contributed to the Ball State Energy Dashboard for forecasting and analyzing campus energy data, tying product engineering to sustainability work.",
    href: "https://datamine.purdue.edu",
    image: "/main/datamine.jpeg",
    type: "datamine",
  },
];

export const accessStats: AccessStat[] = [
  {
    value: "23%",
    label: "Rural internet access",
    context:
      "Only 23% of rural Nigerian communities have internet access, compared to 57% in urban areas — one of the widest digital gaps in Africa.",
    source: "Nigerian Communications Commission (NCC), Oct 2025",
    sourceUrl:
      "https://theeconomictimes.com.ng/2025/10/23/only-23-of-rural-communities-have-internet-access-in-nigeria-ncc-raises-alarm-over-widening-digital-divide/",
  },
  {
    value: "123M",
    label: "Nigerians offline",
    context:
      "Out of a population of 226.5 million, approximately 123.4 million Nigerians had no internet access at the start of 2024 — the fourth-largest offline population in the world.",
    source: "DataReportal, Digital 2024: Nigeria",
    sourceUrl: "https://www.datareportal.com/reports/digital-2024-nigeria",
  },
  {
    value: "2×",
    label: "Above UN affordability target",
    context:
      "A basic 2 GB mobile data plan costs 4.2% of gross national income per capita — more than double the UN Broadband Commission's 2% affordability target.",
    source: "The Borgen Project / ITU Facts and Figures 2024",
    sourceUrl: "https://borgenproject.org/internet-access-in-nigeria/",
  },
  {
    value: "48.8%",
    label: "Broadband penetration",
    context:
      "Nigeria's broadband penetration sits at roughly 48.8%, well short of the National Broadband Plan's 70% target for 2025.",
    source: "NCC via ThisDay, Oct 2025",
    sourceUrl:
      "https://www.thisdaylive.com/2025/10/23/with-140m-internet-subscribers-nigerias-broadband-penetration-hits-48-8-less-than-70-target/",
  },
  {
    value: "35%",
    label: "Data usage growth YoY",
    context:
      "Internet data consumption surged from 9.76 million TB in 2024 to 13.2 million TB in 2025 — demand is growing fast even as infrastructure lags behind.",
    source: "NCC via Businessday NG, Jan 2026",
    sourceUrl:
      "https://businessday.ng/news/article/nigerias-internet-data-usage-surges-to-13-2-million-tb-in-2025-ncc/",
  },
];

export const scholarshipSpec: ScholarshipSpec = {
  name: "Access to Build",
  thesis:
    "I was not separated from these students by talent. I was separated by access. This scholarship is designed for builders who already have the drive but not yet the infrastructure.",
  annualCohortSize: 10,
  seedAmountUsd: 2000,
  benefits: [
    "A laptop for each scholar",
    "An internet stipend that removes the basic connectivity bottleneck",
    "Six months of mentorship from diaspora professionals",
    "Seed funding for product experimentation and early community rollout",
    "A cohort model that creates accountability and peer momentum",
  ],
  eligibility: [
    "Young Nigerians aged 18 to 26",
    "Priority for applicants from underserved states, especially the North-East and North-West",
    "Applicants must already be actively building and submit an active project or working prototype",
    'Applicants must answer the essay question: "What are you building and why does Nigeria need it?"',
    "Community impact must be demonstrated or clearly planned",
  ],
  selectionCriteria: [
    "Clarity of the problem being solved",
    "Evidence that the applicant can actually build, not just describe, the solution",
    "Potential for meaningful Nigerian community impact",
  ],
  successMetric:
    "Each scholar must ship a working prototype or community project, and the goal is for each product to be used by at least 10 Nigerians within one year of receiving the scholarship.",
  proposalQuestion: "What are you building and why does Nigeria need it?",
  cohortFlow: [
    "Open application with essay and prototype submission",
    "Review by a network of diaspora professionals",
    "Selection of 10 scholars into a shared cohort",
    "Six-month mentorship, support, and prototype shipping period",
    "End-of-cohort presentations with demonstrated product progress",
  ],
};

export const focusAreas: FocusArea[] = [
  {
    id: "education",
    title: "Education access and digital literacy",
    description:
      "Support builders improving how students discover, access, and retain useful digital learning tools.",
    impactStatement:
      "The scholarship should help reduce the gap between curiosity and infrastructure for young learners.",
  },
  {
    id: "commerce",
    title: "Digital entrepreneurship and commerce",
    description:
      "Back products that help Nigerians trade, transact, and create new forms of economic opportunity.",
    impactStatement:
      "The goal is not just ideas. It is useful, tested products that can create momentum for local economies.",
  },
  {
    id: "youth-employment",
    title: "Youth employment and skills infrastructure",
    description:
      "Fund builders creating tools for job readiness, hiring pathways, and practical workforce coordination.",
    impactStatement:
      "Infrastructure for skills and work can move young builders from potential to participation.",
  },
];

export const founderClose: FounderClose = {
  note: "Access changed my trajectory. This scholarship is how I would multiply that same shift for builders in Nigeria who are already doing the hard part: showing up, learning, and trying to ship something real.",
  signature: "Sinclair Nzenwata",
  title: "Founder, Access to Build",
};
