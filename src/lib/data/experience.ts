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
      "Continued research building on my bachelor's thesis",
      "Developing a tool for analyzing attacks on released statistical information",]
  },
  {
    position: "Studentische Hilfskraft",
    period: "2026 - Present",
    institution: "Universität Kassel",
    location: "Kassel, Germany",
    type: "Automation and Sensorics in Networked Systems",
    notes: [
      "Building a digital twin of the Therme Bad Wörishofen",
      "Developing forecasting methods for uncertain values",]
  },
  {
    position: "Working Student Software Development",
    period: "Sept. 2023 - May 2026",
    institution: "valantic - Digital Marketing & CRM",
    location: "Langenfeld, Germany",
    type: "Remote",
    notes: [
      "Developed Apex solutions on the Salesforce platform",
      "Built a custom Salesforce logging framework integrated with Sentry",
      "Implemented e-commerce shop frontends",
      "Automated data migrations with custom Python scripts",
      "Set up CI/CD pipelines using GitHub Actions",]
  },
  {
    position: "Studentische Hilfskraft",
    period: "March 2023 - August 2023",
    institution: "Universität zu Lübeck",
    location: "Lübeck, Germany",
    type: "Institute of Human-Centered Interactive Systems",
    notes: [
      "Conducted research in human-centered interactive systems and e-governance solutions",
      "Co-developed a digital children's book for educational use",]
  }
];
