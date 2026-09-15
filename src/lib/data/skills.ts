interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "Programming Languages",
    items: ["TypeScript", "Python", "Rust", "Apex/Java"]
  },
  {
    category: "Frameworks & Libraries",
    items: ["Node.js", "Pandas", "Django", "Express", "Numpy"]
  },
  {
    category: "Databases ",
    items: ["PostgreSQL", "MongoDB", "SQLite", "Salesforce"]
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "VS Code", "Vite", "SvelteKit"]
  },
  {
    category: "Design",
    items: ["Figma", "Tailwind CSS", "Responsive Design"]
  },
  {
    category: "Languages",
    items: ["German", "English", "French"]
  }
];
