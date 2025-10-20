import { Menu } from "lucide-react";
import Image from "next/image";
import IconButton from "./lib/IconButton";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <>
      <div className="flex flex-col gap-2 w-min-full bg-[#F6F8FA] text-zinc-700 dark:text-white dark:bg-[#010409]">
        <div className="flex items-center justify-between gap-2 p-3 pb-0">
          <div className="flex items-center justify-center gap-2">
            {/* Logo */}
            <Image
              alt="Logo"
              src="/logo.png"
              width={100}
              height={100}
              className="object-fill w-10 dark:invert-0 invert"
            />
            {/* Name */}
            <span className="font-semibold max-[800px]:hidden text-base pl-1.5">
              Sahil Khandekar
            </span>
          </div>
          <div className="flex items-center justify-center gap-4 max-[700px]:gap-1.5">
            {/* Search Bar */}
            <SearchBar />
            <div className="max-md:hidden w-px h-[25px] border dark:border-zinc-800 border-zinc-300 "></div>
            <div className="flex items-center justify-center gap-3 max-[700px]:gap-1.5">
              {/* Toggle Dark/Light */}
              <ThemeToggle />
              {/* Side Bar */}
              <div className="flex gap-2">
                <Sidebar>
                  <IconButton>
                    <Menu className="size-5 transition-colors duration-100" />
                  </IconButton>
                </Sidebar>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sticky Navbar */}
      <div className="sticky top-0 z-40 bg-[#F6F8FA] dark:bg-[#010409] border-b border-zinc-300 dark:border-zinc-600 px-3 pt-2">
        <Navbar />
      </div>
    </>
  );
}