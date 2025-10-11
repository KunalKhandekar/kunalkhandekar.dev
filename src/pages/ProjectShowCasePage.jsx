import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import Avatar from "../components/lib/Avatar";
import { ProjectAboutSection } from "../components/ProjectAboutSection";
import ProjectContent from "../components/ProjectContent";
import Publicbadge from "../components/Publicbadge";
import ShareButtons from "../components/ShareButtons";
import { projectDetails } from "../utils/constant";
import ProjectNotFound from "../components/ProjectNotFound"

export default async function ProjectShowCasePage({ projectName }) {
  const projectShowcaseContent = projectDetails.find((project) => project.navLink === projectName);
  if (!projectShowcaseContent) return <ProjectNotFound />

  return (
    <div className="max-w-7xl m-auto p-6 gap-5 max-[800px]:flex-col max-[800px]:p-0 max-[800px]:bg-[#F6F8FA] max-[800px]:dark:bg-[#010409]">
      <div className="dark:bg-[#0D1117] bg-white max-[800px]:border dark:border-zinc-800 border-zinc-300 max-[800px]:border-x-0 max-[800px]:p-4">
        {/* Back Button */}
        <Link
          href={"/projects"}
          className="inline-flex justify-start items-center gap-2 text-[#858C95] font-semibold hover:text-blue-500 transition-colors hover:underline cursor-pointer my-3"
        >
          <IoArrowBack className="size-5 font-semibold" />
          Back
        </Link>

        {/* Project Header & Share */}
        <div className="flex flex-row justify-between w-full items-center py-4 border-b border-zinc-300 dark:border-zinc-600 max-[800px]:border-none gap-y-2 max-[800px]:flex-col max-[800px]:items-start">
          {/* Left Section */}
          <div className="flex items-center justify-start gap-2 w-full">
            <Avatar url={"/profile.jpg"} />
            <h2 className="font-bold text-xl max-[800px]:text-lg">
              {projectName?.replaceAll("-", " ")}{" "}
            </h2>
            <Publicbadge />
          </div>

          {/* Right Section */}
          <ShareButtons />
        </div>
      </div>

      {/* Readme & About */}
      <div className="flex gap-2 py-6 max-[800px]:flex-col-reverse max-[800px]:py-4 max-[800px]:gap-4">
        <ProjectContent projectDetail={projectShowcaseContent} />
        <ProjectAboutSection projectDetail={projectShowcaseContent} />
      </div>
    </div>
  );
}
