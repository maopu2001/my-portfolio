import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-10">
      <div className="h-24 flex gap-6 justify-end pt-5 w-[80%] mx-auto px-2 relative">
        <Link href="/" className="absolute left-0 font-bold text-xl hover:text-mysecondary">
          M. Aktaruzzaman Opu
        </Link>
        <Link href="/about" className="menu">
          About
        </Link>
        {/* <Link href="/my-work" className="menu">
          My Work
        </Link> */}
        <Link href="/projects" className="menu">
          Projects
        </Link>
        {/* <Link href="posts" className="menu">
          Posts
        </Link> */}
        <Link href="/contact" className="menu">
          Contact Me
        </Link>
      </div>
    </header>
  );
}
