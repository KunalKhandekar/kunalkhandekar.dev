import { CiMenuFries } from "react-icons/ci";
import Avatar from "./lib/Avatar";
import Button from "./lib/Button";
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
            <Avatar url={"/images/logo.png"} size="size-6 dark:invert-0 invert" />

            {/* Name */}
            <Button
              content="SahilKhandekar"
              type="ghost"
              classes="font-semibold max-[400px]:hidden"
            />
          </div>
          <div className="flex items-center justify-center gap-4 max-[700px]:gap-1.5">
            {/* Search Bar */}
            <SearchBar />

            <div className="max-md:hidden w-px h-[25px] border dark:border-zinc-800 border-zinc-300"></div>

            <div className="flex items-center justify-center gap-3 max-[700px]:gap-1.5">
              {/* Toggle Dark/Light */}
              <ThemeToggle />

              {/* Change Language */}
              {/* <div>
                <IconButton tooltip="Switch Language">
                  <span className="transition-colors duration-100">EN</span>
                </IconButton>
              </div> */}

              {/* Side Bar */}
              <div className="flex gap-2">
                <Sidebar>
                  <Button
                    content={
                      <div className="flex gap-1 justify-center items-center group">
                        <Avatar url={"/profile.jpg"} />
                        <CiMenuFries className="size-6 dark:text-gray-500 dark:group-hover:text-white text-zinc-400 group-hover:text-zinc-700  transition-colors duration-100" />
                      </div>
                    }
                    type="ghost"
                  ></Button>
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