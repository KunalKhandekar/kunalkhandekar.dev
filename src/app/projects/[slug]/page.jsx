import ProjectShowCasePage from "../../../pages/ProjectShowCasePage";
import { projectListings } from "../../../utils/constant";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const projectShowcaseContent = projectListings.find(
    (project) => project.navLink === slug
  );

  if (!projectShowcaseContent) {
    return {
      title: "Project Not Found",
      description: "The project you're looking for doesn't exist.",
      openGraph: {
        title: "Project Not Found",
        description: "The project you're looking for doesn't exist.",
        type: "website",
      },
      twitter: {
        card: "summary",
        title: "Project Not Found",
        description: "The project you're looking for doesn't exist.",
      },
    };
  }

  const title =
    projectShowcaseContent.title || projectShowcaseContent.name || slug;
  const description = projectShowcaseContent.description || "";
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const url = `${baseUrl}/projects/${slug}`;
  const imageUrl = projectShowcaseContent.image
    ? `${baseUrl}${projectShowcaseContent.image}`
    : null;

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      type: "website",
      url: url,
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : [],
      siteName: "Sahil Portfolio",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: imageUrl ? [imageUrl] : [],
      creator: "@_kunalkhandekar",
    },
  };
}

export async function generateStaticParams() {
  return projectListings.map(({ navLink }) => ({
    slug: navLink,
  }));
}

export default async function ProjectShowCase({ params }) {
  const { slug } = await params;
  return <ProjectShowCasePage projectName={slug} />;
}
