"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GoRepoForked } from "react-icons/go";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlineArticle, MdOutlineBadge } from "react-icons/md";
import { RiMessage2Line } from "react-icons/ri";
import { VscRepo } from "react-icons/vsc";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/lib/Popover";
import Button from "./lib/Button";
import { FaRegHourglassHalf } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";

export const topics = [
  {
    name: "overview",
    icon: <IoBookOutline className="size-4" />,
    path: "/",
    hiddenAt: "max-[280px]:hidden",
    blockAt: "max-[280px]:block",
  },
  {
    name: "projects",
    icon: <VscRepo className="size-4" />,
    path: "/projects",
    hiddenAt: "max-[330px]:hidden",
    blockAt: "max-[330px]:block",
  },
  {
    name: "achievements",
    icon: <GoRepoForked className="size-4" />,
    path: "/achievements",
    hiddenAt: "max-[570px]:hidden",
    blockAt: "max-[570px]:block",
  },
  {
    name: "experience",
    icon: <MdOutlineBadge className="size-4" />,
    path: "/experience",
    hiddenAt: "max-[700px]:hidden",
    blockAt: "max-[700px]:block",
  },
  {
    name: "blogs",
    icon: <MdOutlineArticle className="size-4" />,
    path: "/blogs",
    hiddenAt: "max-[790px]:hidden",
    blockAt: "max-[790px]:block",
  },
  {
    name: "consistency",
    icon: <FaRegHourglassHalf className="size-4" />,
    path: "/consistency",
    hiddenAt: "max-[850px]:hidden",
    blockAt: "max-[850px]:block",
  },
  {
    name: "contact",
    icon: <RiMessage2Line className="size-4" />,
    path: "/contact",
    hiddenAt: "max-[900px]:hidden",
    blockAt: "max-[900px]:block",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between overflow-x-scroll cursor-grab">
      <ul className="flex items-center gap-4">
        {topics.map(({ name, icon, path, hiddenAt }) => {
          const isActive = pathname === path;
          return (
            <li
              key={name}
              className={`relative pb-1.5 ${hiddenAt} ${
                isActive
                  ? "font-semibold text-zinc-900 dark:text-white border-b-2 border-orange-500"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              <Link href={path}>
                <Button
                  type="ghost"
                  content={
                    <span className="flex justify-center items-center gap-1.5 capitalize">
                      {icon} {name}
                    </span>
                  }
                />
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Popover for collapsed items */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            aria-haspopup="menu"
            aria-expanded={open}
            className="min-[900px]:hidden flex items-center justify-center w-8 h-8 rounded border border-zinc-300 dark:border-zinc-600 dark:bg-[#212830] mb-2"
          >
            <HiDotsHorizontal size={18} />
          </button>
        </PopoverTrigger>
        <PopoverContent className="min-[900px]:hidden min-w-[140px] max-w-[200px]">
          <ul className="flex flex-col gap-1">
            {topics.map(({ name, icon, path, blockAt }) => {
              const isActive = pathname === path;
              return (
                <li
                  key={name}
                  className={`relative hidden w-full ${blockAt} ${
                    isActive ? "font-semibold text-orange-500" : ""
                  }`}
                >
                  <Link
                    href={path}
                    className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300 w-full"
                    onClick={() => setOpen(false)}
                  >
                    <Button
                      type="ghost"
                      content={
                        <span className="flex justify-center items-center gap-1.5 capitalize ">
                          {icon} {name}
                        </span>
                      }
                      classes="w-full justify-start"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </PopoverContent>
      </Popover>
    </nav>
  );
}
