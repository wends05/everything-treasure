"use client";
import Link from "next/link";
import { RiVipDiamondLine } from "react-icons/ri";

const headerlinks: {
  name: string;
  href: string;
}[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Profiles",
    href: "#profiles",
  },
  {
    name: "Variety Shows",
    href: "#variety-shows",
  },
  {
    name: "Music Videos",
    href: "#music-videos",
  },
  {
    name: "Dance Practices",
    href: "#dance-practices",
  },
  {
    name: "Live Performances",
    href: "#live-performances",
  },
  {
    name: "Treasure Map",
    href: "#treasure-map",
  },
];

export const Header = () => {
  return (
    <header
      className={
        "bg-sky-400 w-full h-10 absolute flex justify-around items-center"
      }
    >
      <RiVipDiamondLine color="white" size={30} />
      <ul className={"gap-4 flex"}>
        {headerlinks.map(({ name, href }, index) => (
          <Link key={index} href={href} className={"bg-sky-500 rounded-md border-2 px-2"}>
            {name}
          </Link>
        ))}
      </ul>
    </header>
  );
};
