import { type Experience } from "~/components/experience-card";

export const experiences: Experience[] = [
  {
    role: "Sr. Frontend Engineer",
    company: "Ketch Cloud Inc",
    location: "San Francisco, CA (remote)",
    duration: "6/2021 - 2/2024",
    description:
      "Collaborated with Designers and Product Managers at a fast-paced startup, focusing on the SaaS Dashboard and Consent Management UI. Sprints varied, encompassing large new features, bug fixes, and extensions of existing functionality.",
  },
  {
    role: "React Developer",
    company: "AWH",
    location: "Columbus, OH (remote)",
    duration: "3/2021 - 6/2021",
    description:
      "AWH, a software consulting company, hired me for a project focusing on a healthcare application. I implemented screens from mockups using Next.js and integrated CRUD functionality with a GraphQL API.",
  },
  {
    role: "React Developer",
    company: "Findaway",
    location: "Solon, OH",
    duration: "4/2019 - 02/2021",
    description:
      "Supported multiple React apps and built/deployed React apps from scratch (create-react-app).",
  },
  {
    role: "React Native Developer",
    company: "Prefixd",
    location: "San Francisco, CA",
    duration: "10/2018 - 12/2018 (Contract)",
    description:
      "Converted Sketch design wireframes into JavaScript code for React-Native mobile screens, leveraged Redux Thunk and AJAX to implement CRUD functionality along with mobile routing.",
  },
];

const skills = [
  "CSS",
  "Figma",
  "GraphQL",
  "HTML",
  "JavaScript",
  "JIRA",
  "Material UI",
  "Node",
  "React Query",
  "react-router",
  "React",
  "React Native",
  "Redux",
  "Remix",
  "REST",
  "Tailwind CSS",
  "TypeScript",
  "Vercel",
  "VS Code",
  "WebPack",
  "styled-components",
];

export const config = {
  name: "Brian Cilenti",
  title: "Senior Frontend Developer",
  location: "Cleveland, OH",
  yearsOfExperience: 7,
  experience: experiences,
  skills,
} as const;

export const projectConfig = [
  {
    title: "Band Management App",
    imageSrc: "/band-mgmt-project-thumb.png",
    githubUrl: "https://github.com/keepforever/band-mgmt-8",
    deployedUrl: "https://band-mgmt-8-e1d0-staging.fly.dev/bands",
    demoUrl: "https://youtu.be/R4ngj5QHayU?si=i_BaSRlPyHAtin-Q",
    detailViewLink: "/projects/band-mgmt-project",
    description:
      "A comprehensive app for managing a cover band logistics including booking shows, tracking venues, building set lists, and managing songs.",
  },

  {
    title: "EndRock Cover Band Marketing Site",
    imageSrc: "/erc-og-image.png",
    githubUrl: "",
    deployedUrl: "https://www.endrockcle.com/",
    demoUrl: "",
    detailViewLink: "/projects/erc-marketing-site",
    description:
      "A marketing site for the '90s Rock cover band I'm in, that gives information about the band, promotional videos, upcoming shows, and contact information.",
  },
] as const;

export const navigation = [
  { name: "Home", href: "/" },
  { name: "Resume", href: "/resume" },
  { name: "Projects", href: "/projects" },
  { name: "Demos", href: "/demo" },
  // { name: 'Contact', href: '/contact' },
] as const;
