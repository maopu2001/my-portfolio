import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { chip, chipRow, detailLabel, simpleList } from "@/components/ui/tw";
import type { Project } from "@/lib/portfolio-data";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const delayClass = index === 0 ? "" : index === 1 ? "delay-75" : "delay-150";

  return (
    <article className={`pb-[3.2rem] opacity-100 transition ${delayClass}`}>
      <div className="relative mb-[1.2rem] min-h-65 overflow-hidden rounded-[0.72rem] border border-(--line-soft) bg-(--surface-1)">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 900px"
          className="object-cover grayscale-[0.95] transition duration-200 hover:grayscale-[0.55]"
        />
      </div>

      <div className="grid gap-x-[1.6rem] gap-y-[1.2rem] min-[821px]:grid-cols-[minmax(230px,0.45fr)_minmax(0,1fr)]">
        <div className="grid content-start gap-4">
          <h3 className="m-0 font-serif text-[clamp(1.55rem,3vw,2.2rem)] leading-[1.08]">
            {project.title}
          </h3>

          <div className={chipRow}>
            {project.stack.map((tech) => (
              <Badge key={tech} className={chip}>
                {tech}
              </Badge>
            ))}
          </div>

          <div className="grid gap-[0.65rem]">
            <a
              href={project.repository}
              target="_blank"
              rel="noreferrer"
              className="w-fit border-b border-transparent text-[0.78rem] uppercase tracking-widest text-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              GitHub Repository
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="w-fit border-b border-transparent text-[0.78rem] uppercase tracking-widest text-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              Live Demo / Case Study
            </a>
          </div>
        </div>

        <div className="grid gap-[1.1rem]">
          <div>
            <p className={detailLabel}>Problem</p>
            <p className="m-0 text-(--text-muted)">{project.problem}</p>
          </div>

          <div>
            <p className={detailLabel}>Approach</p>
            <p className="m-0 text-(--text-muted)">{project.approach}</p>
          </div>

          <Card className="gap-0 rounded-lg border-(--line) bg-(--surface-2) py-0 ring-0">
            <CardContent className="p-[0.95rem]">
              <p className={detailLabel}>What I Learned</p>
              <ul className={simpleList}>
                {project.learnings.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator className="mt-12 bg-(--line-soft)" />
    </article>
  );
}
