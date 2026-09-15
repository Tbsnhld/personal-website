interface ExperienceEntry {
  position: string;
  period: string;
  institution: string;
  location: string;
  type: string;
  notes: string[];
}

export const experience: ExperienceEntry[] = [
  {
    position: "Wissenschaftliche Hilfskraft",
    period: "2026 - Present",
    institution: "Universität zu Lübeck",
    location: "Lübeck, Germany",
    type: "Institute for IT-Security ",
    notes: [
      "Continuing development of my bachelors thesis tool",
    ]
  },
  {
    position: "Studentische Hilftskraft",
    period: "2026 - Present",
    institution: "Universität Kassel",
    location: "Kassel, Germany",
    type: "Automation and Sensorics in Networked Systems",
    notes: [
    ]
  },
  {
    position: "Working Student Software Development",
    period: "Sept. 2023 - May 2026",
    institution: "valantic - Digital Marketing & CRM",
    location: "Langenfeld, Germany",
    type: "Remote",
    notes: [
    ]
  },
  {
    position: "Studentische Hilfskraft",
    period: "March 2023 - August 2023",
    institution: "Universität zu Lübeck",
    location: "Lübeck, Germany",
    type: "Institute of Human-Centered Interactive Systems",
    notes: [
    ]
  }
];
