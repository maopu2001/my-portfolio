import React from 'react';
import icons from '@/lib/icons';

export default function WorkWith() {
  const FirstIconsArray = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vite', 'Tailwind CSS'];
  const SecondIconsArray = [
    'Node.js',
    'Express.js',
    'MongoDB',
    'PostgreSQL',
    'Git',
    'Java',
    'Android Studio',
    'Python',
    'shad-cn',
  ];

  return (
    <div className="overflow-hidden">
      <h1 className="font-bold text-3xl mb-4">What I Work With</h1>
      <div className="flex flex-col gap-4 relative">
        <div className="flex gap-4 animate-flow w-max hover:[animation-play-state:paused]">
          {FirstIconsArray.map((iconTag, i) => (
            <div className="flex gap-2 justify-center items-center" key={i} id={iconTag}>
              <div className="w-8">{icons[iconTag].icon}</div>
              <span>{iconTag}</span>
            </div>
          ))}
          {FirstIconsArray.map((iconTag, i) => (
            <div className="flex gap-2 justify-center items-center" key={i} id={iconTag}>
              <div className="w-8">{icons[iconTag].icon}</div>
              <span>{iconTag}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-4 animate-flow w-max [--duration:20s] hover:[animation-play-state:paused]">
          {SecondIconsArray.map((iconTag, i) => (
            <div className="flex gap-2 justify-center items-center" key={i} id={iconTag}>
              <div className="w-8">{icons[iconTag].icon}</div>
              <span>{iconTag}</span>
            </div>
          ))}
          {SecondIconsArray.map((iconTag, i) => (
            <div className="flex gap-2 justify-center items-center" key={i} id={iconTag}>
              <div className="w-8">{icons[iconTag].icon}</div>
              <span>{iconTag}</span>
            </div>
          ))}
        </div>

        <div className="absolute h-full left-0 bg-gradient-to-r from-black to-transparent w-[10%]"></div>
        <div className="absolute h-full right-0 bg-gradient-to-l from-black to-transparent w-[10%]"></div>
      </div>
    </div>
  );
}
