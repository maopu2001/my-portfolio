import React from 'react';
import ProjectsCard from '../ProjectsCard';

const tic = {
  techStack: ['Next.js', 'Tailwind CSS', 'JavaScript'],
  coverSrc: '/tic-tac-toe/cover.png',
  iconSrc: '/tic-tac-toe/tic-tac-toe.png',
  projectName: 'Tic Tac Toe',
  projectDescription: 'A simple game of tic-tac-toe',
};

export default function Projects() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">My Projects</h1>
      <ProjectsCard projectInfo={tic} />
    </div>
  );
}
