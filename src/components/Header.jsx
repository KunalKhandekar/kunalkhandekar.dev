import { BsSlashSquare } from "react-icons/bs";
import { CiMenuFries } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import Avatar from "./lib/Avatar";
import Button from "./lib/Button";
import IconButton from "./lib/IconButton";
import ThemeToggle from "./ThemeToggle";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="flex flex-col gap-2 w-min-full p-3 pb-0 bg-[#F6F8FA] text-zinc-700 dark:text-white dark:bg-[#010409] border-b border-zinc-300 dark:border-zinc-600">
      <div className="flex items-center justify-between gap-2 ">
        <div className="flex items-center justify-center gap-2 ">
          {/* Logo */}
          <Avatar url={"https://github.com/evilrabbit.png"} />

          {/* Name */}
          <Button
            content="KunalKhandekar"
            type="ghost"
            classes="font-semibold"
          />
        </div>
        <div className="flex items-center justify-center gap-4">
          {/* Search Bar */}
          <div
            className={`pr-20 p-1.5 flex items-center justify-center rounded-md text-sm cursor-pointer border-zinc-300 border dark:border-zinc-600  text-zinc-700 dark:text-white select-none`}
          >
            <IoIosSearch className="size-5 mr-2" />
            <span className="flex justify-center items-center">
              Type <BsSlashSquare className="mx-2" /> to search
            </span>
          </div>

          <div className="max-md:hidden w-px h-[25px] border dark:border-zinc-800 border-zinc-300"></div>

          <div className="flex items-center justify-center gap-3">
            {/* Toggle Dark/Light */}
            <ThemeToggle />
            {/* Change Language */}
            <div>
              <IconButton tooltip="Switch Language">
                <span className="transition-colors duration-100">EN</span>
                {/* <span>MA</span> */}
                {/* <span>HI</span> */}
              </IconButton>
            </div>

            {/* Side Bar */}
            <div className="flex gap-2">
              <Button
                content={
                  <div className="flex gap-1 justify-center items-center group">
                    <Avatar url={"/profile.jpg"} />
                    <CiMenuFries className="size-6 dark:text-gray-500 dark:group-hover:text-white text-zinc-400 group-hover:text-zinc-700  transition-colors duration-100" />
                  </div>
                }
                type="ghost"
              ></Button>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}
