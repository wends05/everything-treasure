"use client";
import Link from "next/link";
import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
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
    name: "Treasure Map",
    href: "treasure-map",
  },
  {
    name: "Others",
    href: "#others",
  },
];

export const Header = () => {
  const [isopen, setisopen] = useState(false);

  function openMenu() {
    setisopen(!isopen);
    console.log(isopen);
  }
  return (
    <header
      className={
        "bg-sky-400 w-full h-16  flex justify-around items-center fixed"
      }
    >
      <ul className={"gap-4 hidden lg:flex"}>
        <RiVipDiamondLine size={30} />
        {headerlinks.map(({ name, href }, index) => (
          <Link
            key={index}
            href={href}
            className={
              "bg-sky-500 min-w-30 items-center rounded-md border-2 px-2 flex"
            }
          >
            {name}
          </Link>
        ))}
      </ul>

      <button onClick={openMenu} className="absolute left-3 lg:hidden">
        <IoMenuOutline size={30} />
      </button>
      <ul className={`w-40 flex flex-col px-3 absolute left-10 top-2 p-2 bg-sky-300
      transition-all lg:hidden
      ${isopen ? "flex " : "-translate-y-80"}
      `}>
        
        {  headerlinks.map(({ name, href }, index) => (
            <Link
              key={index}
              href={href}
              className={
                "bg-sky-500 min-w-30 items-center rounded-md border-2 px-2 flex"
              }
            >
              {name}
            </Link>
          ))}
      </ul>

    </header>
  );
};
