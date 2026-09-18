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
    gpa: "",
    notes: [
      "Focusing on Software Engineering, Cryptography and modern technology challenges",
    ]
  },
  {
    degree: "B.Sc. Media Computer Science",
    period: "2021 - 2026",
    institution: "University of Lübeck",
    location: "Lübeck, Germany",
    gpa: "",
    notes: [
      "Basics of Computer Science with some extras in Human-Computer-Interaction and Design",
      "Thesis: Implementation and Experimental Analysis of Statistical Privacy (Grade 1.0)"
    ]
  },
  {
    degree: "Abitur",
    period: "2012-2020",
    institution: "Stiftsgymnasium Sindelfingen",
    location: "Sindelfingen, Germany",
    gpa: "",
    notes: [
    ]
  }
];
