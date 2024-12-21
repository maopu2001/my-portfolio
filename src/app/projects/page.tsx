import ProjectsCard from '@/components/ProjectsCard';
import projects from '@/lib/projects';
import React from 'react';

export default function page() {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold pb-8">My Projects</h1>
      <div className="flex flex-col gap-10">
        {projects.map((project, i) => (
          <ProjectsCard key={i} projectInfo={project} />
        ))}
      </div>
    </div>
  );
}
