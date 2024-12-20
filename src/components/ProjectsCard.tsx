import Image from 'next/image';
import React from 'react';
import getIcons from '@/lib/icons';

type ProjectInfoType = {
  techStack: string[];
  coverSrc: string;
  iconSrc: string;
  projectName: string;
  projectDescription: string;
};

export default function ProjectsCard({ projectInfo }: { projectInfo: ProjectInfoType }) {
  return (
    <div className="relative aspect-[1.5] p-4 rounded-2xl overflow-hidden group *:text-black">
      <Image
        className="group-hover:scale-125 transform transition-transform duration-700 select-none -z-10 object-cover"
        src={projectInfo.coverSrc}
        fill
        alt=""
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/40 select-none"></div>

      <div className="flex flex-col gap-2 absolute bottom-10 left-10">
        <div className="flex items-center gap-4 pb-2">
          <Image src={projectInfo.iconSrc} width={50} height={50} alt="" />
          <h1 className="text-2xl font-bold">{projectInfo.projectName}</h1>
        </div>
        <div className="flex gap-2">
          {projectInfo.techStack.map((tech, i) => {
            const info: [React.JSX.Element, string] | null = getIcons(tech);
            if (!info) return null;
            return (
              <div
                className="border p-1 rounded-md bg-black/30 flex gap-2 justify-center items-center"
                key={i}
                id={info[1]}
              >
                {info[0]} {info[1]}
              </div>
            );
          })}
        </div>
        <p className="text-lg">{projectInfo.projectDescription}</p>
      </div>
    </div>
  );
}
