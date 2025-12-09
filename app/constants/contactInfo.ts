import { Briefcase, Phone, Github as GithubIcon } from "lucide-react";
import { LinkedInIcon } from "~/components/icons/linkedin-icon";

export type IconType = typeof Briefcase;

export const contactInfo = [
  {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: LinkedInIcon as any,
    text: "https://www.linkedin.com/in/brian-cilenti-65754749/",
    isLink: true,
  },
  {
    icon: Phone,
    text: "+1 (123) 456-7890",
    isLink: false,
  },
  {
    icon: GithubIcon,
    text: "github.com/keepforever",
    isLink: true,
  },
] as const;

export const contactInfoObject = {
  linkedin: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: LinkedInIcon as any,
    href: "https://www.linkedin.com/in/brian-cilenti-65754749/",
    isLink: true,
  },
  phone: {
    icon: Phone,
    text: "+1 (123) 456-7890",
    isLink: false,
  },
  github: {
    icon: GithubIcon,
    text: "github.com/keepforever",
    href: "https://github.com/keepforever",
    isLink: true,
  },
} as const;
