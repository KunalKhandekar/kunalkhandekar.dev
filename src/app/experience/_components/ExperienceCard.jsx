import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { MdCalendarMonth } from "react-icons/md";

export const ExperienceCard = ({ data }) => {
  return (
    <div className="w-full py-4 ">
      {/*Company & Title */}
      <div className="flex gap-2 justify-between items-start">
        <div className="flex gap-2 justify-center items-center dark:text-white text-black">
          <Image
            src={data.companyLogo}
            width={100}
            height={100}
            alt="Quickgick"
            className="size-15 rounded-xl"
          />
          <div>
            <h2 className="text-xl font-semibold max-[800px]:text-lg">
              {data.title}
            </h2>
            <div className="text-sm dark:text-zinc-300 text-zinc-700 flex justify-center items-center gap-1 max-[800px]:text-xs">
              <div className="flex justify-center items-center gap-1">
                <IoLocationSharp /> {data.location}
              </div>{" "}
              |{" "}
              <div className="flex justify-center items-center gap-1">
                <MdCalendarMonth /> {data.timeLine}
              </div>
            </div>
          </div>
        </div>
        {data.isCurrent && (
          <span className="rounded-2xl border-0 dark:border-zinc-600 border-zinc-300 p-2 py-1 bg-violet-800 text-sm font-normal text-white max-[800px]:text-xs">
            Current
          </span>
        )}
      </div>

      {/* Key work done */}
      <div className="mt-4">
        <h3 className="text-md font-semibold dark:text-zinc-300 text-zinc-700 mb-2">
          Key Achievements
        </h3>
        <ul className="list-disc ml-6 space-y-0.5 text-sm">
          {data.keyAchievements?.map((achievements) => (
            <li key={achievements} className="dark:text-zinc-300 text-zinc-700">
              {achievements}
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      <div className="mt-4">
        <h3 className="text-md font-semibold dark:text-zinc-300 text-zinc-700 mb-2">
          Technologies
        </h3>
        <div className="flex flex-wrap gap-2">
          {data.technologiesUsed?.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-md border dark:border-zinc-700 border-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
