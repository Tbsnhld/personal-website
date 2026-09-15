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
    tech: ["Svelte", "Svelte Kit", "Figma"],
    description: "Current Prsonal Website",
    repoUrl: "youtube.com" as URL,
    liveUrl: "google.com" as URL,
  },
];

