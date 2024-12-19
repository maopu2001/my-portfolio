import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className="flex gap-6 justify-end my-5 relative w-[80%] mx-auto px-2">
      <Link href="/" className="absolute left-0 font-bold">
        M. Aktaruzzaman Opu
      </Link>
      <Link href="/about" className="menu">
        About
      </Link>
      <Link href="/my-work" className="menu">
        My Work
      </Link>
      <Link href="projects" className="menu">
        Projects
      </Link>
      <Link href="posts" className="menu">
        Posts
      </Link>
      <Link href="contact" className="menu">
        Contact Me
      </Link>
    </header>
  );
}
