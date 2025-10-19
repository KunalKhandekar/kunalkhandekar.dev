import Link from "next/link";
import { FaRegBookmark } from "react-icons/fa";
import Publicbadge from "../../components/Publicbadge";
import { FaCubesStacked } from "react-icons/fa6";
import { LuClock3 } from "react-icons/lu";

export default function PinnedRespositories({ content }) {
  return (
    <div className="py-4 max-[800]:my-4 my-2 dark:bg-[#0D1117] bg-white max-[800px]:border dark:border-zinc-800 border-zinc-300 max-[800px]:border-x-0">
      <h3 className="text-md max-[800]:px-4 max-[800]:pt-2 max-[800px]:text-md">
        Pinned Projects & Blogs
      </h3>
      <div className="gap-4 grid grid-cols-2 max-[800px]:flex overflow-x-auto max-[800px]:w-screen my-2 max-[800px]:p-4">
        {content.map((item, idx) => (
          <div
            key={idx}
            className="border border-zinc-300 dark:border-zinc-600 rounded-lg p-4 max-[800px]:min-w-80 flex flex-col justify-between h-40"
          >
            {/* Header */}
            <div className="flex gap-2 justify-between items-center">
              <Link
                href={item.link}
                target="_blank"
                className="hover:underline text-blue-400 flex gap-1 items-center justify-start"
              >
                <FaRegBookmark className="size-4 text-gray-500" />
                <p className="font-semibold text-sm line-clamp-1">
                  {item.title}
                </p>
              </Link>
              <Publicbadge />
            </div>

            {/* Desc */}
            <p className="text-xs line-clamp-4 my-2.5 dark:text-zinc-400 text-neutral-700">
              {item.description}
            </p>

            {/* Footer (stack / time pinned at bottom) */}
            <div className="flex justify-start items-center gap-2 text-xs mt-auto">
              {item.type === "repo" ? (
                <>
                  <FaCubesStacked className="size-3 text-yellow-500" />
                  <p className="font-mono darK:text-zinc-400 text-zinc-500">
                    {item.stack}
                  </p>
                </>
              ) : (
                <>
                  <LuClock3 className="size-3 text-green-500" />
                  <p className="font-mono text-zinc-400">{item.readTime}</p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
