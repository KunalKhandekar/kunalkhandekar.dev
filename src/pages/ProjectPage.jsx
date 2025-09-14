import ProfileBar from "../components/ProfileBar";
import ProjectSection from "../components/ProjectSection";

export default function ProjectPage() {
  

  return (
    <div className="max-w-7xl m-auto p-6 flex gap-5 max-[800px]:flex-col max-[800px]:p-0 max-[800px]:bg-[#F6F8FA] max-[800px]:dark:bg-[#010409]">
      <ProfileBar />
      <ProjectSection />
    </div>
  );
}
