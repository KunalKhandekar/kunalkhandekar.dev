"use client";

import { FaExternalLinkAlt } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import Button from "../../../../components/lib/Button";
import { useState } from "react";
import { IoBookOutline } from "react-icons/io5";
import { RiScreenshotLine } from "react-icons/ri";
import ReadmeRenderer from "../../../../components/ReadmeRenderer";
import ScreenshotLibrary from "./ScreenshotLibrary";
import Link from "next/link";

export default function ProjectContent({projectDetail}) {
  const [activeTab, setActiveTab] = useState("readme");
  const markdown = projectDetail.readmeContent;
  const images = projectDetail.images;

  return (
    <section className="flex-6 space-y-5 dark:bg-[#0D1117] bg-white max-[800px]:border dark:border-zinc-800 border-zinc-300 max-[800px]:border-x-0 max-[800px]:space-y-0">
      <div className="flex justify-end gap-3 w-full items-center max-[800px]:p-4 max-[800px]:justify-between">
        <Link href={projectDetail.liveLink} target="_blank" className="p-2 py-1 cursor-pointer hover:bg-blue-700 rounded-lg bg-blue-600 font-semibold text-white flex items-center gap-2">
          <FaExternalLinkAlt className="size-4" />
          View Demo
        </Link>
        <Link href={projectDetail.gitHubLink} target="_blank" className="p-2 py-1 cursor-pointer hover:bg-green-700 rounded-lg bg-green-600 font-semibold text-white flex items-center gap-2">
          <FaCode className="size-5" />
          Source code
        </Link>
      </div>

      <div className="border border-zinc-300 dark:border-zinc-600 rounded-lg max-[800px]:border-x-0 max-[800px]:rounded-none">
        {/* Tabs */}
        <div className="p-3 pb-0 flex gap-2 border-b border-zinc-300 dark:border-zinc-600 sticky top-[45px] dark:bg-[#151B23] bg-zinc-100 rounded-t-lg z-[20] max-[800px]:rounded-none">
          <div
            className={`relative pb-1.5 ${
              activeTab === "readme"
                ? "font-semibold text-zinc-900 dark:text-white border-b-2 border-orange-500"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
            }`}
            onClick={() => setActiveTab("readme")}
          >
            <Button
              type="ghost"
              content={
                <span className="flex justify-center items-center gap-1.5 capitalize">
                  <IoBookOutline className="size-4" />
                  Readme
                </span>
              }
              classes="dark:hover:!bg-[#21262d] hover:!bg-zinc-200"
            />
          </div>
          <div
            className={`relative pb-1.5  ${
              activeTab === "screenshot"
                ? "font-semibold text-zinc-900 dark:text-white border-b-2 border-orange-500"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
            }`}
            onClick={() => setActiveTab("screenshot")}
          >
            <Button
              type="ghost"
              content={
                <span className="flex justify-center items-center gap-1.5 capitalize">
                  <RiScreenshotLine className="size-4" /> Screenshots
                </span>
              }
              classes="dark:hover:!bg-[#21262d] hover:!bg-zinc-200"
            />
          </div>
        </div>

        {activeTab === "readme" ? (
          <div className="prose dark:prose-invert max-w-none h-full px-4">
            <ReadmeRenderer content={markdown} />
          </div>
        ) : (
          <div className="p-6"><ScreenshotLibrary images={images} /></div>
        )}
      </div>
    </section>
  );
}
