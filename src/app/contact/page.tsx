import icons from '@/lib/icons';
import Link from 'next/link';
import React from 'react';

export default function page() {
  return (
    <div className="flex flex-col gap-2 border border-myborder p-4 rounded-lg">
      <h1 className="text-3xl font-bold">Contact me</h1>
      <span>You can contact me via Email, Facebook and Whatsapp. I usually respond within a day.</span>
      <div className="flex items-center justify-around px-5 flex-wrap gap-4">
        <Link
          className="flex flex-col items-center justify-center hover:scale-95 transition"
          href="mailto:maopu2001@gmail.com"
        >
          <div className="w-24">{icons.Email}</div>
          <span className="text-2xl font-bold">Email</span>
          maopu2001@gmail.com
        </Link>
        <Link
          className="flex flex-col items-center justify-center hover:scale-95 transition"
          href="https://www.facebook.com/ma.opu.2001/"
        >
          <div className="w-16 m-4">{icons.Facebook}</div>
          <span className="text-2xl font-bold">Facebook</span>
          ma.opu.2001
        </Link>
        <Link
          className="flex flex-col items-center justify-center hover:scale-95 transition"
          href="https://wa.me/+8801521712539"
        >
          <div className="w-16 m-4">{icons.Whatsapp}</div>
          <span className="text-2xl font-bold">Whatsapp</span>
          +8801521712539
        </Link>
      </div>
    </div>
  );
}
