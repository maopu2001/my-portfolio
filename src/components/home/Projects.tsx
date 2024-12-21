import React from 'react';
import ProjectsCard from '../ProjectsCard';
import projects from '@/lib/projects';
import Link from 'next/link';

const myprojects = [projects[0], projects[1]];

export default function Projects() {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold py-8">My Projects</h1>
      <div className="flex flex-col gap-10">
        {myprojects.map((project, i) => (
          <ProjectsCard key={i} projectInfo={project} />
        ))}
      </div>

      <Link
        className="py-2 text-xl text-center outline outline-myborder mt-5 rounded-xl bg-primary hover:bg-transparent text-mysecondary"
        href="/projects"
      >
        More...
      </Link>
    </div>
  );
}
