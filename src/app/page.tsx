import Link from 'next/link';

const pinLocationIcon = (
  <svg className="w-6" viewBox="0 -960 960 960" fill="#fff">
    <path d="M480-301q99-80 149.5-154T680-594q0-90-56-148t-144-58q-88 0-144 58t-56 148q0 65 50.5 139T480-301Zm0 101Q339-304 269.5-402T200-594q0-125 78-205.5T480-880q124 0 202 80.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM200-80v-80h560v80H200Zm280-520Z" />
  </svg>
);

const githubIcon = (
  <svg className="w-6" viewBox="0 0 24 24" fill="#fff">
    <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
  </svg>
);

const facebookIcon = (
  <svg className="w-6" viewBox="0 0 50 50" fill="#fff">
    <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
  </svg>
);

// const linkedInIcon = (
//   <svg className="w-6" viewBox="0 0 50 50" fill="#fff">
//     <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
//   </svg>
// );

const mailIcon = (
  <svg className="w-6" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
      fill="#fff"
    />
  </svg>
);

export default function Home() {
  return (
    <div className="w-[55%] mx-auto relative mt-20">
      <div className="border border-gray-800 rounded-2xl p-4 flex flex-col gap-4">
        <div className="flex gap-2 absolute right-4 top-4">
          <Link href="mailto:maopu2001@gmail.com" className="block border border-gray-800 rounded-md p-2">
            {mailIcon}
          </Link>
          <Link
            href="https://www.facebook.com/ma.opu.2001/"
            className="block border border-gray-800 rounded-md p-2"
            target="blank"
          >
            {facebookIcon}
          </Link>
          <Link
            href="https://github.com/maopu2001"
            className="block border border-gray-800 rounded-md p-2"
            target="blank"
          >
            {githubIcon}
          </Link>
        </div>
        <h1 className="text-4xl font-bold">M. Aktaruzzaman Opu</h1>
        <Link
          href="https://maps.app.goo.gl/RGgmU8x5hzSeJ6Ev9"
          target="blank"
          className="inline-flex items-center gap-2 text-gray-400"
        >
          {pinLocationIcon} Alam Dockyard, Rangamati, Bangladesh
        </Link>
        <p>
          {
            "I'm 21 year old Full-Stack Web Developer. I have been programming for more than 3 years. I create professional websites."
          }
        </p>
      </div>
    </div>
  );
}
