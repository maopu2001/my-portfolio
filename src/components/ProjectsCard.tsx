import Image from 'next/image';
import React from 'react';

export default function ProjectsCard() {
  return (
    <div className="p-4 shadow-md rounded-md flex flex-col gap-2">
      <Image src="/tic-tac-toe.png" width={50} height={50} alt="Tic-tac-toe Logo" />
      <h1 className="text-2xl font-bold">Tic Tac Toe</h1>
      <p className="text-lg">A simple game of tic-tac-toe</p>
    </div>
  );
}
