import React from 'react';
import getIcons from '@/lib/icons';

export default function WorkWith() {
  const FirstIconsArray = ['Html', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vite', 'Tailwind CSS'];
  const SecondIconsArray = ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Git', 'Java', 'Android Studio', 'Python'];

  return (
    <div className="overflow-hidden">
      <h1 className="font-bold text-3xl mb-4">What I Work With</h1>
      <div className="flex flex-col gap-4 relative">
        <div className="flex gap-4 animate-flow w-max hover:[animation-play-state:paused]">
          {FirstIconsArray.map((iconTag, i) => {
            const info: [React.JSX.Element, string] | null = getIcons(iconTag);
            if (!info) return null;
            return (
              <div className="flex gap-2 justify-center items-center" key={i} id={info[1]}>
                {info[0]} {info[1]}
              </div>
            );
          })}
          {FirstIconsArray.map((iconTag, i) => {
            const info: [React.JSX.Element, string] | null = getIcons(iconTag);
            if (!info) return null;
            return (
              <div className="flex gap-2 justify-center items-center" key={i} id={info[1]}>
                {info[0]} {info[1]}
              </div>
            );
          })}
        </div>

        <div className="flex gap-4 animate-flow w-max [--duration:15s] hover:[animation-play-state:paused]">
          {SecondIconsArray.map((iconTag, i) => {
            const info: [React.JSX.Element, string] | null = getIcons(iconTag);
            if (!info) return null;
            return (
              <div className="flex gap-2 justify-center items-center" key={i} id={info[1]}>
                {info[0]} {info[1]}
              </div>
            );
          })}
          {SecondIconsArray.map((iconTag, i) => {
            const info: [React.JSX.Element, string] | null = getIcons(iconTag);
            if (!info) return null;
            return (
              <div className="flex gap-2 justify-center items-center" key={i} id={info[1]}>
                {info[0]} {info[1]}
              </div>
            );
          })}
        </div>

        <div className="absolute h-full left-0 bg-gradient-to-r from-black to-transparent w-[10%]"></div>
        <div className="absolute h-full right-0 bg-gradient-to-l from-black to-transparent w-[10%]"></div>
      </div>
    </div>
  );
}
