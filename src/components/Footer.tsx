import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="sticky bottom-0 left-0 right-0 mt-4">
      <div className="h-[1] md:w-[55%] w-[90%] mx-auto rounded-2xl bg-slate-700 mb-2"></div>
      <div className="text-center md:text-base text-sm text-mytext">
        &copy; 2024 M. Aktaruzzaman Opu | Created in Bangladesh <br />
        Powered by{' '}
        <Link href="https://nextjs.org/" target="blank" className="text-mysecondary">
          Next.js
        </Link>
        . Check out my{' '}
        <Link href="https://github.com/maopu2001" target="blank" className="text-mysecondary">
          GitHub
        </Link>{' '}
        projects
        <span className="text-mytext inline md:hidden">.</span>
        <span className="text-mytext hidden md:inline"> for more creations!</span>
      </div>
    </footer>
  );
}
