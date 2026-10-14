export const siteConfig = {
  name: "Sayem Raina",
  taglineLines: [
    "Currently building Ground.",
    "No-Prompt AI for commercial real estate.",
  ],
  bioLines: [
    "I build AI products that do the work before you ask.",
    "Previously founded Saba and built InfoMonitor.",
    "Based in Gurgaon/Bangalore.",
  ],
  email: "sayam07raina@gmail.com",
  social: {
    twitter: "https://x.com/sayemvirraina",
    github: "https://github.com/sayemraina",
    linkedin: "https://www.linkedin.com/in/sayem-raina-384362153/",
  },
};

export const workExperience = [
  {
    company: "Ground",
    role: "Founder",
    period: "2026 - Present",
    location: "Gurgaon",
    description: [
      "Building no-prompt AI for mid-market CRE investment firms and brokerages.",
    ],
    url: undefined,
  },
  {
    company: "Saba",
    role: "Founder",
    period: "2025 - 2026",
    location: "Bangalore",
    description: [
      "Built a proactive AI advisor that surfaced non-obvious next steps and the non-obvious person to act on them, then made the introduction.",
    ],
    url: undefined,
  },
  {
    company: "Onnivation",
    role: "Manager, Strategy & Operations (Founder's Office)",
    period: "2024",
    location: "Mumbai",
    description: [
      "Repositioned the firm from a SaaS reseller to a strategic advisor — built the go-to-market around a new SI partnership and ran engagements with customers, product companies, and VC/PE partners alongside the founder.",
    ],
    url: undefined,
  },
  {
    company: "PricewaterhouseCoopers (PwC)",
    role: "Associate Consultant",
    period: "2022 - 2023",
    location: "Delhi",
    description: [
      "Built EV penetration and charging infrastructure models that drove a German development bank's capital deployment strategy for India. Ran stakeholder relationships across 200+ organizations for a national EV financing program.",
    ],
    url: undefined,
  },
  {
    company: "Hudson Institute",
    role: "Foreign Policy Researcher (Fellowship)",
    period: "2021 - 2022",
    location: "Washington DC",
    link: {
      text: "authored a memo",
      url: "https://www.linkedin.com/pulse/us-innovation-competition-act-objectives-government-businesses-raina/",
    },
    description: [
      "Organized a closed roundtable series on India-US economic relations across private sector, government, and academia for one of DC's most influential foreign policy think tanks.",
      "Researched developments in critical areas of the US-India relationship, and authored a memo on the US Innovation and Competition Act.",
    ],
    url: undefined,
  },
];

export const projects = [
  {
    title: "Ground",
    description:
      "No-prompt AI for mid-market CRE investment firms and brokerages. Captures site visits, pulls intelligence from the firm's scattered data, and gets each team member exactly what their role needs — without anyone chasing it.",
    url: "https://ground-landing-page.vercel.app",
    images: [{ src: "/images/ground-wordmark.svg", fit: "contain" }],
    year: "2026",
  },
  {
    title: "Saba",
    description:
      "Proactive AI advisor for relationship intelligence. Recommends non-obvious next steps and connects you with people you didn't know to ask for.",
    url: "https://www.sabaconnect.io",
    images: [
      { src: "/images/saba-1.jpg", fit: "full", bg: "#0D1520" },
      { src: "/images/saba-2.jpg", fit: "full", bg: "#0D1627" },
      { src: "/images/saba-3.jpg", fit: "full", bg: "#0D1627" },
    ],
    year: "2026",
  },
  {
    title: "InfoMonitor",
    description:
      "A self-updating narrative topology instrument. Maps competing positions on any contested topic into a measurable structure — across platforms, populations, and time. Built solo in a week.",
    url: "https://infomonitor.app",
    images: [
      { src: "/images/infomonitor-1.png", fit: "full", bg: "#0E141C" },
      { src: "/images/infomonitor-2.png", fit: "full", bg: "#0E141C" },
      { src: "/images/infomonitor-3.png", fit: "full", bg: "#0E141C" },
    ],
    year: "2026",
  },
  {
    title: "Podcast",
    description:
      "Conversations with founders and operators building in AI, SaaS, and Deep-Tech. Guests include Shruti Gupta (Ex CISO Airbnb, Instacart, Brex) and Sri Kallakuri (Founder Dxtr.co).",
    url: "#podcast",
    images: [{ src: "/images/podcast-preview.jpg", fit: "cover" }],
    year: "2025",
  },
];

export const podcast = {
  name: "Build and Beyond",
  description:
    "Conversations with founders and operators building what comes next.",
};

export const podcastEpisodes = [
  {
    guest: "Shruti Gupta",
    company: "Zania",
    topic:
      "Building AI agents for GRC, what agents mean for security, and why boring problems create asymmetric advantages",
    url: "https://www.linkedin.com/posts/sayem-raina-384362153_shruti-gupta-founder-zania-former-ciso-activity-7380722801114222592-jIqh",
  },
  {
    guest: "Sri Kallakuri",
    company: "Dxtr Co.",
    topic:
      "Autonomous vehicles, robotics, and what deep-tech founders get wrong about timing and fundraising",
    url: "https://www.linkedin.com/posts/sayem-raina-384362153_preview-sri-kallakuri-autonomous-vehicles-activity-7401221994119110656-1y15",
  },
  {
    guest: "Coming soon",
    company: "",
    topic: "New episodes dropping regularly",
    url: "#",
  },
];
