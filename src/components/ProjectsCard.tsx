import Image from 'next/image';
import React from 'react';
import icons from '@/lib/icons';
import Link from 'next/link';
import ProjectInfoType from '@/types/ProjectInfoType';

export default function ProjectsCard({ project }: { project: ProjectInfoType }) {
  return (
    <Link
      href={`/projects/${project.name}`}
      className="relative aspect-[0.95] sm:aspect-[1.5] min-h-[550px] p-4 rounded-2xl overflow-hidden w-full group *:text-black outline outline-myborder"
    >
      <Image
        className="group-hover:scale-125 transform transition-transform duration-700 select-none -z-10 object-top object-cover"
        src={project.coverSrc}
        fill
        alt=""
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/40 select-none"></div>

      <div className="absolute bottom-4 left-4 right-4 sm:bottom-10 sm:left-10 sm:right-10 overflow-hidden">
        <div className="flex flex-col gap-2 transform translate-y-10 sm:group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex items-center gap-4 pb-2">
            <Image src={project.iconSrc} width={50} height={50} alt="" />
            <h1 className="text-2xl font-bold">{project.title}</h1>
          </div>
          <div className="flex gap-2 flex-wrap">
            {project.techStack.map((tech, i) => {
              const info = icons[tech];
              return (
                <div
                  className="border py-1 px-2 rounded-full sm:rounded-md bg-black/30 flex gap-2 justify-center items-center aspect-square sm:aspect-auto"
                  key={i}
                >
                  <div className="w-6">{info.icon}</div>
                  <span className="text-base text-nowrap sm:block hidden">{tech}</span>
                </div>
              );
            })}
          </div>
          <p className="text-base sm:text-lg">{project.description}</p>
          <button className="btn text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            Details
          </button>
        </div>
      </div>
    </Link>
  );
}
