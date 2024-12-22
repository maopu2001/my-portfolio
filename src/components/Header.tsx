'use client';
import icons from '@/lib/icons';
import Link from 'next/link';
import React from 'react';

type menuInfoType = { url: string; title: string; icon: string }[];

const menuInfo: menuInfoType = [
  {
    url: '/about',
    title: 'About',
    icon: 'null',
  },
  {
    url: '/projects',
    title: 'Projects',
    icon: 'null',
  },
  {
    url: '/contact',
    title: 'Contact Me',
    icon: 'null',
  },
];

export default function Header() {
  const toggleSidebar = () => {
    document.getElementById('sidebar')?.toggleAttribute('open');
    document.getElementById('menu-icon')?.toggleAttribute('open');
  };

  return (
    <header className="fixed top-0 w-full z-10">
      <div className="h-24 pt-5 md:w-[80%] w-[90%] mx-auto px-2 relative">
        <Link href="/" className="absolute left-0 font-bold text-xl hover:text-mysecondary">
          M. Aktaruzzaman Opu
        </Link>
        <div className="md:flex gap-6 justify-end hidden">
          {menuInfo.map((info, i) => {
            return (
              <Link href={info.url} className="menu" key={i}>
                {info.title}
              </Link>
            );
          })}
        </div>

        <div
          className="w-8 absolute right-0 hover:opacity-70 cursor-pointer z-20 block md:hidden"
          id="menu-icon"
          onClick={toggleSidebar}
        >
          {icons['menu']}
        </div>
        <nav id="sidebar" className="flex md:hidden w-full sm:w-[400px]">
          {menuInfo.map((info, i) => {
            return (
              <Link href={info.url} className="menu" key={i}>
                {info.title}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
