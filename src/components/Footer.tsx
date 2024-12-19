import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 right-0 text-center text-md text-gray-400">
      &copy; 2024 M. Aktaruzzaman Opu | Created in Bangladesh <br />
      Built with love using{' '}
      <Link href="https://nextjs.org/" target="blank" className="text-cyan-600">
        Next.js
      </Link>
      . Look at some of my projects on{' '}
      <Link href="https://github.com/maopu2001" target="blank" className="text-cyan-600">
        GitHub
      </Link>
      .
    </footer>
  );
}
