import type { NavigationItem } from "./types";

export const profile = {
  name: "M. Aktaruzzaman Opu",
  shortName: "Opu",
  headline: "Computer Science · Software · Web Development",
  intro:
    "I enjoy building software, exploring computer science, and turning ideas into useful applications.",
  subIntro:
    "Interested in computer vision and machine learning. Long-term, I want to build a career in university teaching and academia.",
  statement:
    "I like understanding technical problems and building things that actually work.",
  longTermGoal:
    "My long-term goal is to become a university professor. I want to combine teaching, technical work, and research.",

  socialLinks: {
    github: "https://github.com/maopu2001",
    linkedin: "https://www.linkedin.com/in/maopu2001",
    facebook: "https://facebook.com/maopu2001",
    email: "mailto:aktaruzzamanopu2001@gmail.com",
    rawEmail: "aktaruzzamanopu2001@gmail.com",
  },

  education: {
    institution: "Rangamati Science and Technology University (RMSTU)",
    degree: "B.Sc. (Engg.) in Computer Science & Engineering",
    period: "2021 — Present",
    location: "Rangamati, Bangladesh",
    status: "Undergraduate (Final Year)",
  },

  cvUrl: "/cv.pdf",
};

export const navigationItems: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Research", href: "/research" },
  { label: "Experiments", href: "/experiments" },
  { label: "Journey", href: "/journey" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/* Bottom bar guideline: max 5 destinations. Experiments, Journey and CV stay
   reachable via the home page sections and the footer. */
export const mobileNavigationItems: NavigationItem[] = [
  { label: "Home", href: "/", shortLabel: "Home" },
  { label: "Projects", href: "/projects", shortLabel: "Work" },
  { label: "Research", href: "/research", shortLabel: "Research" },
  { label: "About", href: "/about", shortLabel: "About" },
  { label: "Contact", href: "/contact", shortLabel: "Contact" },
];
