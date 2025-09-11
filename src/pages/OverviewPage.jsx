import ProfileBar from "../components/ProfileBar";
export default function OverviewPage() {
  return (
    <div className="max-w-7xl m-auto p-6 flex gap-2 max-[800px]:flex-col">
        <ProfileBar />
        <div className="border-zinc-300 border dark:border-zinc-600 flex-3 rounded-lg p-2">
          OverviewReadme
        </div>
      </div>
  );
}