"use client";

import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { BsSlashSquare } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import Avatar from "./lib/Avatar";
import Button from "./lib/Button";
import IconButton from "./lib/IconButton";

export default function Header() {
  const [isDark, setIsDark] = useState(true);
  return (
    <div className="flex items-center justify-between gap-2 w-min-full p-3">
      <div className="flex items-center justify-center gap-2 ">
        {/* Logo */}
        <Avatar url={"https://github.com/evilrabbit.png"} />

        {/* Name */}
        <Button content="KunalKhandekar" type="ghost" />
      </div>
      <div className="flex items-center justify-center gap-4">
        {/* Search Bar */}
        <div
          className={`pr-20 p-1.5 flex items-center justify-center rounded-md text-sm cursor-pointer border border-zinc-600 text-zinc-300`}
        >
          <IoIosSearch className="size-5 mr-2" />
          <span className="flex justify-center items-center">
            Type <BsSlashSquare className="mx-2" /> to search
          </span>
        </div>

        <div className="max-md:hidden w-px h-[25px] border border-zinc-800"></div>

        <div className="flex items-center justify-center gap-3">
          {/* Toggle Dark/Light */}
          <div onClick={() => setIsDark((prev) => !prev)}>
            <IconButton>
              {isDark ? (
                <Sun className="size-5 hover:text-white text-gray-300 transition-colors duration-100" />
              ) : (
                <Moon className="size-5 hover:text-white text-gray-300 transition-colors duration-100" />
              )}
            </IconButton>
          </div>

          {/* Change Language */}
          <div>
            <IconButton>
              <span className="hover:text-white text-gray-300 transition-colors duration-100">
                EN
              </span>
              {/* <span>MA</span> */}
              {/* <span>HI</span> */}
            </IconButton>
          </div>

          {/* Side Bar */}
          <div className="flex gap-2">
            <Button
              content={
                <div className="flex gap-1 justify-center items-center group">
                  <Avatar url={"https://github.com/leerob.png"} />
                  <CiMenuFries className="size-6 text-gray-500 group-hover:text-white transition-colors duration-300" />
                </div>
              }
              type="ghost"
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
