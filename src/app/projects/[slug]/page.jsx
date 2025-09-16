import ProjectShowCasePage from "../../../pages/ProjectShowCasePage";

export default async function ProjectShowCase({ params }) {
  const { slug } = await params;
  return <ProjectShowCasePage projectName={slug} />;
}
