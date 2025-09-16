import { FaCode } from "react-icons/fa6";
import { IoCheckmark } from "react-icons/io5";

export const ProjectAboutSection = () => {
  const languages = [
    { name: "JavaScript", percent: 96.2, color: "bg-yellow-300" },
    { name: "CSS", percent: 3.8, color: "bg-purple-700" },
  ];
  return (
    <section className="flex-2 space-y-4 px-4 dark:bg-[#0D1117] bg-white max-[800px]:border dark:border-zinc-800 border-zinc-300 max-[800px]:border-x-0 max-[800px]:py-4">
      <h2 className="font-semibold">About</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
        doloremque tempora velit impedit commodi quas officia ut culpa est
        assumenda facilis, dolorem sapiente amet reprehenderit accusantium
        harum? Assumenda maxime molestiae vitae cumque, ad labore!
      </p>
      <div className="flex flex-wrap gap-2">
        {[
          { id: 1, name: "Next.js" },
          { id: 2, name: "Tailwind CSS" },
          { id: 3, name: "JavaScript" },
          { id: 4, name: "Follow Up Boss API" },
          { id: 5, name: "Web Development" },
          { id: 6, name: "New York" },
          { id: 7, name: "Real Estate" },
          { id: 8, name: "Reusable Template" },
          { id: 9, name: "Luxury Apartment Showcase" },
          { id: 10, name: "Contentful CMS" },
        ].map(({ id, name }) => {
          return (
            <span
              key={id}
              className="px-3 py-1 rounded-full bg-blue-100 dark:bg-[#121D2F] text-blue-500 text-xs font-semibold 
           hover:bg-blue-500 hover:text-white cursor-pointer"
            >
              {name}
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
        <div className="flex gap-2 items-start pt-2">
          <FaCode className="mt-1 size-4 text-green-500" />
          <div className="flex flex-col">
            <p className="text-sm">Framework & Libraries</p>
            <p className="text-sm text-[#858C95]">Next.js & React</p>
          </div>
        </div>
        <div className="flex gap-2 items-start pt-2">
          <FaCode className="mt-1 size-4 text-green-500" />
          <div className="flex flex-col">
            <p className="text-sm">Styling & UI</p>
            <p className="text-sm text-[#858C95]">Tailwind & Shadcn</p>
          </div>
        </div>
        <div className="flex gap-2 items-start pt-2">
          <FaCode className="mt-1 size-4 text-green-500" />
          <div className="flex flex-col">
            <p className="text-sm">Backend & APIs</p>
            <p className="text-sm text-[#858C95]">Node.js & REST</p>
          </div>
        </div>
      </div>
      <div className="border-b border-zinc-300 dark:border-zinc-600"></div>

      <div className="w-full space-y-3">
        <h2 className="font-semibold">Languages</h2>

        {/* Progress Bar */}
        <div className="flex h-2 w-full overflow-hidden rounded-full">
          {languages.map((lang, i) => (
            <div
              key={i}
              className={`${lang.color}`}
              style={{ width: `${lang.percent}%` }}
            ></div>
          ))}
        </div>

        {/* Legends */}
        <div className="flex flex-wrap gap-4 text-sm">
          {languages.map((lang, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className={`h-3 w-3 rounded-full ${lang.color}`}></span>
              <span>{lang.name}</span>
              <span className="text-sm text-[#858C95]">{lang.percent}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
