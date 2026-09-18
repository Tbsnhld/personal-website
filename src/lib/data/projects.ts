interface Project {
  title: string;
  year: number;
  tech: string[];
  description: string;
  repoUrl: URL;
  liveUrl: URL;
}

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    year: 2026,
    tech: ["Svelte", "Svelte Kit", "Figma", "TailwindCSS"],
    description: "Current Personal Website",
    repoUrl: "https://github.com/Tbsnhld/personal-website" as URL,
    liveUrl: "https://nhld.net" as URL,
  },
];

