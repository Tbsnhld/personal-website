interface EducationEntry {
  degree: string;
  period: string;
  institution: string;
  location: string;
  gpa: string;
  notes: string[];
}

export const education: EducationEntry[] = [
  {
    degree: "M.Sc. Computer Science",
    period: "2026 - today",
    institution: "University Kassel",
    location: "Kassel, Germany",
    gpa: "GPA: 3.8/4.0",
    notes: [
      "Relevant coursework in Web Development, Algorithms, and Data Structures",
      "Graduated with Honors",
      "Thesis: Modern Web Frameworks Comparison"
    ]
  },
  {
    degree: "B.Sc. Media Computer Science",
    period: "2021 - 2026",
    institution: "University of Lübeck",
    location: "Lübeck, Germany",
    gpa: "GPA: 3.8/4.0",
    notes: [
      "Relevant coursework in Web Development, Algorithms, and Data Structures",
      "Graduated with Honors",
      "Thesis: Modern Web Frameworks Comparison"
    ]
  },
  {
    degree: "Abitur",
    period: "2020",
    institution: "Stiftsgymnasium Sindelfingen",
    location: "Sindelfingen, Germany",
    gpa: "GPA: 3.9/4.0",
    notes: [
      "Focus on Mathematics and Natural Sciences"
    ]
  }
];
