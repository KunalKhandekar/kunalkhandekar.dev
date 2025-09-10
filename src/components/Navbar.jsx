"use client";

import React from "react";
import Button from "./lib/Button";
import { IoBookOutline } from "react-icons/io5";
import { GoRepoForked } from "react-icons/go";
import { VscRepo } from "react-icons/vsc";
import { LuFileBadge } from "react-icons/lu";
import { MdOutlineBadge } from "react-icons/md";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();

  const topics = [
    {
      name: "overview",
      icon: <IoBookOutline className="size-4" />,
      path: "/",
    },
    {
      name: "projects",
      icon: <VscRepo className="size-4" />,
      path: "/projects",
    },
    {
      name: "education",
      icon: <LuFileBadge className="size-4" />,
      path: "/education",
    },
    {
      name: "achievements",
      icon: <GoRepoForked className="size-4" />,
      path: "/achievements",
    },
    {
      name: "experience",
      icon: <MdOutlineBadge className="size-4" />,
      path: "/experience",
    },
  ];

  return (
    <nav className="">
      <ul className="flex items-center justify-items-start gap-2.5 border-b border-zinc-300 dark:border-zinc-600">
        {topics.map(({ name, icon, path }) => {
          const isActive = pathname === path;
          return (
            <div
              key={name}
              className={`pb-1.5 ${
                isActive
                  ? "font-semibold text-zinc-900 dark:text-white border-b-2 border-orange-500 rounded-none"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              <Link href={path}>
                <Button
                  content={
                    <span className="flex justify-center items-center gap-1.5 capitalize">
                      {icon} {name}
                    </span>
                  }
                  type="ghost"
                />
              </Link>
            </div>
          );
        })}
      </ul>
    </nav>
  );
}
