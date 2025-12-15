export interface Principle {
  title: string;
  description: string;
}

export const principles: Principle[] = [
  {
    title: "Systems Over Motivation",
    description:
      "Motivation is unreliable. Systems create progress by making the right actions automatic, repeatable, and inevitable.",
  },
  {
    title: "Discipline Compounds",
    description:
      "Small, consistent actions outperform bursts of intensity. Most people quit before the compounding starts.",
  },
  {
    title: "Consistency Wins",
    description:
      "Showing up daily is rare. That’s why it works. Momentum is built through repetition, not inspiration.",
  },
  {
    title: "Long-Term Thinking",
    description:
      "Short-term gains are easy. Meaningful growth comes from playing long games and making decisions that compound over years.",
  },
];

export const frameworks = [
  {
    category: "Discipline",
    tools: [
      "Daily non-negotiables",
      "Environment design",
      "Friction removal",
      "Identity-based habits",
    ],
  },
  {
    category: "Growth",
    tools: [
      "Skill stacking",
      "Feedback loops",
      "Deliberate practice",
      "Leverage through systems",
    ],
  },
  {
    category: "Consistency",
    tools: [
      "Streaks over goals",
      "Process-first thinking",
      "Minimum viable effort",
      "Long-term tracking",
    ],
  },
];

export const philosophy = {
  tagline: "Building discipline through systems, not motivation.",
  mission:
    "To design and build systems that help people stay consistent, grow intentionally, and play long-term games.",
  approach:
    "I focus on reducing friction, clarifying priorities, and turning effort into repeatable processes. Progress comes from showing up daily, refining systems, and letting consistency do the work.",
};
