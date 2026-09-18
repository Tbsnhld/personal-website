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
    items: ["Node.js", "Pandas", "Numpy"]
  },
  {
    category: "Databases ",
    items: ["PostgreSQL", "MongoDB"]
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "GitHub Actions", "GitLab"]
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
