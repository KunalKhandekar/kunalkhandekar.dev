import ProjectPage from "../../pages/ProjectPage";

export async function generateMetadata() {
  return {
    title: "Projects",
  };
}

export default function Projects() {
  return <ProjectPage />;
}
