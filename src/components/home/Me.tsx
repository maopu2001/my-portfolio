import icons from '@/lib/icons';
import Link from 'next/link';

export default function Me() {
  return (
    <div className="border border-myborder rounded-2xl p-4 flex flex-col gap-4">
      <div className="flex gap-2 absolute right-4 top-4">
        <Link
          href="mailto:maopu2001@gmail.com"
          className="block border border-gray-800 rounded-md p-1 w-10 hover:opacity-70"
        >
          {icons.Email}
        </Link>
        <Link
          href="https://www.facebook.com/ma.opu.2001/"
          className="block border border-gray-800 rounded-md p-2 w-10 hover:opacity-70"
          target="blank"
        >
          {icons.Facebook}
        </Link>
        <Link
          href="https://github.com/maopu2001"
          className="block border border-gray-800 rounded-md p-2 w-10 hover:opacity-70"
          target="blank"
        >
          {icons.Github}
        </Link>
      </div>
      <h1 className="text-4xl font-bold">M. Aktaruzzaman Opu</h1>
      <Link
        href="https://maps.app.goo.gl/RGgmU8x5hzSeJ6Ev9"
        target="blank"
        className="inline-flex items-center gap-2 text-gray-400"
      >
        <div className="w-6">{icons.Location}</div> Alam Dockyard, Rangamati, Bangladesh
      </Link>
      <p>
        {
          "I'm 21 year old Full-Stack Web Developer. I have been programming for more than 3 years. I create professional websites."
        }
      </p>
    </div>
  );
}
