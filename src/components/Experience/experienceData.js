import MobileDevelopment from "../../../assets/experience/mobileDev.png";
import Devops from "../../../assets/experience/devops.svg";
import WebDevelopment from "../../../assets/experience/webDev.png";

export const experienceData = [
  {
    company: "Thoughtworks",
    role: "Mobile Development",
    locations: ["Coimbatore, India"],
    duration: "Dec. 2020 - Feb. 2022",
    pic: MobileDevelopment,
    projects: [
      {
        name: "Mobile Development",
        description:
          "Cross-platform mobile application for BP-Aral enhancing customer engagement with coupon-based offers and fuel station information.",
        contributions: [
          "Developed a versatile coupon feature, enhancing user interaction and retention.",
          "Led release activities, coordinated release plans and timelines, collaborated with cross-functional teams, maintained regular client communication.",
          "Provided assistance with iteration management, estimation support for project planning and resource allocation.",
          "Conducted regular code reviews and implemented best practices to maintain high code quality.",
        ],
        techUsed: ["React Native", "TypeScript", "Storybook"],
      },
    ],
  },
  {
    company: "Thoughtworks",
    role: "Infrastructure Consultant",
    locations: ["Coimbatore, India"],
    duration: "March 2023 - May 2023",
    pic: Devops,
    projects: [
      {
        name: "Devops Delivery",
        description:
          "Participated in an infrastructure bootcamp to gain hands-on experience in DevOps methodologies and tools.",
        contributions: [
          "Developed Ansible playbooks for infrastructure automation, streamlining deployment processes.",
          "Collaborated with cross-functional teams to optimize the development and deployment pipeline.",
        ],
        techUsed: ["Ansible", "Terraform"],
      },
    ],
  },
  {
    company: "Thoughtworks",
    role: "Web Development",
    locations: ["Coimbatore, India"],
    duration: "June 2023 - March 2024",
    pic: WebDevelopment,
    projects: [
      {
        name: "Web Development",
        description:
          "Enhanced and developed features for Bahmni, an open-source EMR and hospital system.",
        contributions: [
          "Collaborated with a dedicated team to improve existing modules and create new features for both the In Patient (IPD) and Out Patient Department (OPD) of Bahmni.",
          "Developed new IPD workflows, facilitating comprehensive patient management and seamless integration with existing OPD modules.",
        ],
        techUsed: ["React", "Angular", "SASS"],
      },
    ],
  },
];
