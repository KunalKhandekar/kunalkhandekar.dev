"use client";

import { Activity, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SocialLinks from "../components/SocialLinks";
import Avatar from "./lib/Avatar";
import { topics } from "./Navbar";

export default function Sidebar({ children, profileData }) {
  const pathname = usePathname();
  const { setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <>
      <div onClick={() => setIsOpen(true)}>{children}</div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 transition-opacity"
            onClick={() => setIsOpen(false)}
          />

          {/* Sidebar */}
          <div
            className={`
            fixed right-0 top-0 h-full w-80 
            bg-white dark:bg-[#0D1117]
            shadow-xl transform transition-transform duration-300 ease-in-out
            ${isOpen ? "translate-x-0" : "translate-x-full"}
          `}
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-[#21262d] rounded-md transition-colors"
            >
              <X className="w-5 h-5 text-gray-600 dark:text-[#f0f6fc]" />
            </button>

            {/* Content */}
            <div className="h-full overflow-y-auto p-6 space-y-4">
              <div className="flex items-start gap-4 flex-col">
                <Avatar
                  url={profileData.profilePic || "/profile.jpeg"}
                  size="size-24"
                />

                <div className="flex-1 min-w-0">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-[#f0f6fc]">
                    {profileData.name || "Sahil Khandekar"}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-[#8b949e]">
                    {profileData.role}
                  </p>
                </div>
              </div>

              <p className="text-xs text-gray-600 dark:text-[#8b949e] leading-relaxed mt-2">
                {profileData.description}
              </p>

              {/* Current activity */}
              <div className="bg-gray-50 dark:bg-[#161b22] rounded-lg p-3 border dark:border-[#21262d]">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium text-gray-900 dark:text-[#f0f6fc]">
                    Currently working on
                  </span>
                </div>
                <p className="text-xs text-gray-600 dark:text-[#8b949e]">
                  {profileData.currentFocus}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-medium text-gray-600 dark:text-[#8b949e]">
                  Settings
                </h3>

                {/* Theme toggle */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sun className="w-4 h-4 text-gray-600 dark:text-[#8b949e]" />
                    <span className="text-sm text-gray-700 dark:text-[#f0f6fc]">
                      Light
                    </span>
                  </div>
                  <button
                    onClick={() =>
                      setTheme((prev) => (prev === "dark" ? "light" : "dark"))
                    }
                    className={`
                      relative inline-flex h-6 w-11 items-center rounded-full transition-colors
                       dark:bg-[#238636] bg-gray-200
                    `}
                  >
                    <span
                      className={`
                        inline-block h-4 w-4 transform rounded-full bg-white transition-transform
                        dark:translate-x-6 translate-x-1
                      `}
                    />
                  </button>
                  <div className="flex items-center gap-2">
                    <Moon className="w-4 h-4 text-gray-600 dark:text-[#8b949e]" />
                    <span className="text-sm text-gray-700 dark:text-[#f0f6fc]">
                      Dark
                    </span>
                  </div>
                </div>
              </div>

              {/* Explore Section */}
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-gray-600 dark:text-[#8b949e]">
                  Explore
                </h3>
                <nav className="space-y-1">
                  {topics.map(({ name, icon, path }) => {
                    const isActive = pathname === path;
                    return (
                      <div key={name} className="relative w-full">
                        {isActive && (
                          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-[#f85149] rounded-full"></div>
                        )}
                        <Link
                          href={path}
                          className="flex items-center gap-2 text-zinc-700 dark:text-[#e6edf3] w-full"
                          onClick={() => setIsOpen(false)}
                        >
                          <div
                            className={`px-2.5 py-1.5 flex items-center  rounded-md text-sm cursor-pointer dark:hover:bg-[#21262d] hover:bg-zinc-200 text-zinc-950 dark:text-white hover:transition-colors  w-full justify-start`}
                          >
                            <span className="flex justify-center items-center gap-1.5 capitalize">
                              {icon} {name}
                            </span>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </nav>
              </div>

              {/* Skills */}
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-gray-600 dark:text-[#8b949e]">
                  Skills
                </h3>
                <div className="flex flex-wrap gap-1">
                  {profileData.skills?.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs bg-white dark:bg-[#21262d] text-gray-700 dark:text-[#f0f6fc] border border-gray-300 dark:border-[#30363d] px-2 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Connect Section */}
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-gray-600 dark:text-[#8b949e]">
                  Connect with me
                </h3>
                <div className="space-y-1 flex flex-col text-sm">
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
