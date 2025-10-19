import ReadmeRenderer from "../../components/ReadmeRenderer";

export default function OverviewReadme({ content }) {
  return (
    <div className="border-zinc-300 max-[800px]:rounded-none rounded-lg border dark:border-zinc-600 max-[800px]:border-zinc-300 max-[800px]:border-t max-[800px]:border-b max-[800px]:dark:border-zinc-800  p-6 dark:bg-[#0D1117] bg-white max-[800px]:border-l-0 max-[800px]:border-r-0">
      <p className="text-xs font-mono text-shadow-initial pb-3">
        SahilKhandekar<span className="px-0.5 text-gray-400">/</span>Overview
        <span className="text-gray-400">.md</span>
      </p>
      <div className="prose dark:prose-invert max-w-none h-full">
        <ReadmeRenderer content={content} />
      </div>
    </div>
  );
}
