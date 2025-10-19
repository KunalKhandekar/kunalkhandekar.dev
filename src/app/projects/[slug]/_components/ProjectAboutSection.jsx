import { FaCode } from "react-icons/fa6";
import { IoCheckmark } from "react-icons/io5";

export const ProjectAboutSection = ({ projectDetail }) => {
  return (
    <section className="flex-2 space-y-4 px-4 dark:bg-[#0D1117] bg-white max-[800px]:border dark:border-zinc-800 border-zinc-300 max-[800px]:border-x-0 max-[800px]:py-4">
      <h2 className="font-semibold">About</h2>
      <p>{projectDetail.description}</p>
      <div className="flex flex-wrap gap-2">
        {projectDetail?.tags?.map(({ _id, topic }) => {
          return (
            <span
              key={_id}
              className="px-3 py-1 rounded-full bg-blue-100 dark:bg-[#121D2F] text-blue-500 text-xs font-semibold 
           hover:bg-blue-500 hover:text-white"
            >
              {topic}
            </span>
          );
        })}
      </div>

      <div className="flex flex-col gap-2 text-sm text-[#858C95] ">
        <p className="flex items-center gap-2">
          <IoCheckmark className="size-4 text-green-500" />
          Designed
        </p>
        <p className="flex items-center gap-2">
          <IoCheckmark className="size-4 text-green-500" />
          Developed
        </p>
      </div>

      <div className="border-b border-zinc-300 dark:border-zinc-600"></div>

      <div className="">
        <h2 className="font-semibold">Development Summary</h2>
        {projectDetail.developmentSummary?.map(({ _id, title, value }) => {
          return (
            <div key={_id} className="flex gap-2 items-start pt-2">
              <FaCode className="mt-1 size-4 text-green-500" />
              <div className="flex flex-col">
                <p className="text-sm">{title}</p>
                <p className="text-sm text-[#858C95]">{value}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-b border-zinc-300 dark:border-zinc-600"></div>

      <div className="w-full space-y-3">
        <h2 className="font-semibold">Languages</h2>

        {/* Progress Bar */}
        <div className="flex h-2 w-full overflow-hidden rounded-full">
          {projectDetail.languagesUsed?.map((lang, i) => (
            <div
              key={i}
              style={{
                width: `${lang.percent}%`,
                backgroundColor: `${lang.color}`,
              }}
            ></div>
          ))}
        </div>

        {/* Legends */}
        <div className="flex flex-wrap gap-4 text-sm">
          {projectDetail.languagesUsed?.map((lang, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className={`h-3 w-3 rounded-full`} style={{
                backgroundColor: `${lang.color}`,
              }}></span>
              <span>{lang.name}</span>
              <span className="text-sm text-[#858C95]">{lang.percent}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
