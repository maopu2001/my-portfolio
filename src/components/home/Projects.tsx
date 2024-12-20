import React from 'react';
import ProjectsCard from '../ProjectsCard';

export default function Projects() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">My Projects</h1>
      <ProjectsCard />
    </div>
  );
}
