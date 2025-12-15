export interface Project {
  title: string;
  description: string;
  status: "Live" | "Building" | "Experiment";
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "Education",
    description:
      "Creating books that help people with finances and personal growth.",
    status: "Live",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    link: "#",
  },
  {
    title: "Personal Branding",
    description:
      "Building in public and sharing wins, losses, and lifestyle on X.",
    status: "Live",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    link: "#",
  },
  {
    title: "Direct Mail Marketing",
    description: "Building community postcard mailers for local businesses.",
    status: "Building",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    link: "#",
  },
];

export const featuredProject = {
  title: "Featured Project",
  description: "A showcase of work I've done over the years",
  image:
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  link: "#",
};
