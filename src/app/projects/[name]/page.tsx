import icons from '@/lib/icons';
import projects from '@/lib/projects';
import Image from 'next/image';

export default async function Page({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const project = projects.find((obj) => obj.name === name);
  if (!project) return null;

  let text;
  if (project.about) {
    const res = await fetch(`${project.about}/master/README.md`);
    text = await res.text();
  }

  return (
    <div className="p-4 rounded-2xl w-full group outline outline-myborder">
      <div className="flex flex-col gap-2 ">
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
                id={tech}
              >
                <div className="w-6">{info}</div>
                <span className="text-base text-nowrap sm:block hidden">{tech}</span>
              </div>
            );
          })}
        </div>
        <p className="text-base sm:text-lg">{project.description}</p>
      </div>
      <p>{text}</p>
    </div>
  );
}
