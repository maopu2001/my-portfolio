import type { Metadata } from "next";
import { ProjectsArchive } from "@/components/ProjectsArchive";
import { Section } from "@/components/Section";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects & Engineering Archive",
  description:
 "Curated collection of software engineering projects, web applications, computer vision research, and developer tools built by M. Aktaruzzaman Opu.",
};

export default function ProjectsPage() {
  return (
    <>
      <Section
        title="Project Inventory & Archive"
        subtitle="A record of software systems, web applications, and technical tools built over the years. Filter by domain or search by technology."
      >
        <ProjectsArchive initialProjects={projects} />
      </Section>
    </>
  );
}
