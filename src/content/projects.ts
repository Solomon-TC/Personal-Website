export interface Project {
  title: string;
  description: string;
  status: "Live" | "Building" | "Experiment";
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "Motion Design",
    description: "Crafting fluid animations that bring digital experiences to life with cinematic precision and attention to detail.",
    status: "Live",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    link: "#",
  },
  {
    title: "Brand Identity",
    description: "Building cohesive visual systems that resonate with audiences and establish memorable brand presence.",
    status: "Live",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    link: "#",
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive interfaces that balance aesthetic excellence with functional user experiences.",
    status: "Building",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    link: "#",
  },
];

export const featuredProject = {
  title: "Featured Project",
  description: "A showcase of cinematic storytelling through motion and design",
  image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  link: "#",
};
