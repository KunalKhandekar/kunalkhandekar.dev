import ProfileBar from "../../components/ProfileBar";
import ProjectSection from "./_components/ProjectSection";

export async function generateMetadata() {
  return {
    title: "Projects",
  };
}

export default async function Projects() {
  const [projectsRes, languagesRes] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/projectsList`, {
      next: { revalidate: 60 },
    }),
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/languages`, {
      next: { revalidate: 60 },
    }),
  ]);

  const [projectsData, languagesData] = await Promise.all([
    projectsRes.json(),
    languagesRes.json(),
  ]);

  const projectListings =
    projectsRes.ok && projectsData.success ? projectsData.data : [];
  const languages =
    languagesRes.ok && languagesData.success ? languagesData.data : [];

  return (
    <div className="max-w-7xl m-auto p-6 flex gap-5 max-[800px]:flex-col max-[800px]:p-0 max-[800px]:bg-[#F6F8FA] max-[800px]:dark:bg-[#010409]">
      <ProfileBar />
      <ProjectSection projectList={projectListings} languages={languages} />
    </div>
  );
}
