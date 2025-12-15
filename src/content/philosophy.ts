export interface Principle {
  title: string;
  description: string;
}

export const principles: Principle[] = [
  {
    title: "Intentional Motion",
    description: "Every animation should feel purposeful, not decorative. Motion guides the eye, reveals hierarchy, and reinforces the narrative.",
  },
  {
    title: "Premium Restraint",
    description: "Less is more. Subtle, smooth animations create a sense of sophistication and confidence.",
  },
  {
    title: "Cinematic Storytelling",
    description: "Approach each project like a film—with careful choreography, atmosphere, and emotional resonance.",
  },
  {
    title: "Technical Excellence",
    description: "Combine artistic vision with technical precision to create experiences that are both beautiful and functional.",
  },
];

export const frameworks = [
  {
    category: "Design",
    tools: ["Figma", "After Effects", "Cinema 4D", "Blender"],
  },
  {
    category: "Development",
    tools: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
  },
  {
    category: "Motion",
    tools: ["Lenis", "GSAP", "Three.js", "WebGL"],
  },
];

export const philosophy = {
  tagline: "Creating digital experiences that feel like art",
  mission: "To blur the boundaries between design and technology, crafting immersive digital experiences that captivate and inspire.",
  approach: "Every project begins with understanding the story we want to tell. From there, we choreograph interactions, design visual systems, and implement with technical precision—always prioritizing the user's emotional journey.",
};
