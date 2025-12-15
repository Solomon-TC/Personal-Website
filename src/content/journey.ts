export interface Chapter {
  title: string;
  description: string;
  theme: string;
}

export const chapters: Chapter[] = [
  {
    title: "Chapter I: Discovery",
    description: "Finding the intersection of design and code. Learning that constraints breed creativity.",
    theme: "Foundation"
  },
  {
    title: "Chapter II: Craft",
    description: "Obsessing over details. Understanding that motion tells stories words cannot.",
    theme: "Refinement"
  },
  {
    title: "Chapter III: Systems",
    description: "Building frameworks that scale. Creating order from chaos through design systems.",
    theme: "Architecture"
  },
  {
    title: "Chapter IV: Experience",
    description: "Shifting focus from pixels to people. Designing for emotion, not just function.",
    theme: "Empathy"
  },
  {
    title: "Chapter V: Evolution",
    description: "Embracing change as constant. Pushing boundaries while honoring fundamentals.",
    theme: "Growth"
  }
];
