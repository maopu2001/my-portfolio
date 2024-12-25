import icons from '@/lib/icons';
import projects from '@/lib/projects';
import Image from 'next/image';
import Link from 'next/link';

export default async function Page({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const project = projects.find((obj) => obj.name === name);
  if (!project) return null;

  return (
    <div className="w-full group">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4 pb-2 mx-auto">
          <Image src={project.iconSrc} width={50} height={50} alt="" />
          <h1 className="text-3xl font-bold">{project.title}</h1>
        </div>
        <div className="flex gap-2 flex-wrap mx-auto justify-center">
          {project.techStack.map((tech, i) => {
            const info = icons[tech];
            return (
              <Link
                href={info.link}
                target="_blank"
                className="border py-1 px-2 rounded-lg flex gap-2 justify-center items-center hover:bg-mysecondary transition-colors duration-300"
                key={i}
              >
                <div className="w-6">{info.icon}</div>
                <span className="text-base text-nowrap">{tech}</span>
              </Link>
            );
          })}
        </div>
        <h1 className="text-xl font-bold">Project Description</h1>
        <p className="text-base sm:text-lg mb-5">{project.description}</p>
        {project.liveDemo && (
          <div className="mb-5">
            <span className="text-xl font-bold">Live Demo: </span>
            <Link href={project.liveDemo} className="text-xl hover:text-mysecondary" target="_blank">
              {project.title}
            </Link>
          </div>
        )}

        {project.desktopImgSrc && (
          <div className="md:flex flex-col gap-3 hidden">
            {project.desktopImgSrc.map((src, i) => (
              <Image className="rounded-lg" key={i} src={src} width={800} height={400} alt="" />
            ))}
          </div>
        )}
        {project.mobileImgSrc && (
          <div className="flex flex-col gap-3 md:hidden">
            {project.mobileImgSrc.map((src, i) => (
              <Image className="rounded-lg" key={i} src={src} width={800} height={400} alt="" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
