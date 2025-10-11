import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

export default function ProjectNotFound() {
  return (
    <div className="max-w-7xl m-auto p-6 max-[800px]:p-4">
      <div className="dark:bg-[#0D1117] bg-white border dark:border-zinc-800 border-zinc-300 rounded-md p-8 max-[800px]:p-6">
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex justify-start items-center gap-2 text-[#858C95] font-semibold hover:text-blue-500 transition-colors hover:underline cursor-pointer mb-6"
        >
          <IoArrowBack className="size-5 font-semibold" />
          Back to Projects
        </Link>

        {/* Content */}
        <div className="py-12 max-[800px]:py-8">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">
            Project Not Found
          </h1>
          
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            The project you're looking for doesn't exist or may have been removed.
          </p>

          <Link
            href="/projects"
            className="inline-block px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}