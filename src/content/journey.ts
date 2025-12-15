export interface Chapter {
  title: string;
  description: string;
  theme: string;
}

export const chapters: Chapter[] = [
  {
    title: "Chapter I: Discovery",
    description:
      "Finding my passion for creating at a young age, I began building things and never stopped.",
    theme: "Foundation",
  },
  {
    title: "Chapter II: Craft",
    description:
      "Working on project after project, obsessing over the details that feel like prgress.",
    theme: "Refinement",
  },
  {
    title: "Chapter III: Systems",
    description:
      "Building frameworks that scale. Creating order from chaos through systems.",
    theme: "Architecture",
  },
  {
    title: "Chapter IV: Experience",
    description:
      "Shifting focus from pixels to people. Designing for emotion, not just function.",
    theme: "Empathy",
  },
  {
    title: "Chapter V: Evolution",
    description:
      "Embracing change as constant. Pushing boundaries while honoring fundamentals.",
    theme: "Growth",
  },
];
