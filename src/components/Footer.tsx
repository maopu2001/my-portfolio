import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 right-0">
      <div className="h-[1] w-[55%] mx-auto rounded-2xl bg-slate-700 mb-2"></div>
      <div className="text-center text-sm text-mytext">
        &copy; 2024 M. Aktaruzzaman Opu | Created in Bangladesh <br />
        Built with love using{' '}
        <Link href="https://nextjs.org/" target="blank" className="text-mysecondary">
          Next.js
        </Link>
        . Look at some of my projects on{' '}
        <Link href="https://github.com/maopu2001" target="blank" className="text-mysecondary">
          GitHub
        </Link>
        .
      </div>
    </footer>
  );
}
