import Me from '@/components/home/Me';
import Projects from '@/components/home/Projects';
import WorkWith from '@/components/home/WorkWith';
export default function Home() {
  return (
    <div className="relative flex flex-col gap-8">
      <Me />
      <WorkWith />
      {/* <Experience /> */}
      <Projects />
    </div>
  );
}
