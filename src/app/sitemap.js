import { projectListings } from "../utils/constant";

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
    },
    {
      url: `${baseUrl}/projects`,
    },
    {
      url: `${baseUrl}/achievements`,
    },
    {
      url: `${baseUrl}/experience`,
    },
    {
      url: `${baseUrl}/blogs`,
    },
    {
      url: `${baseUrl}/consistency`,
    },
    {
      url: `${baseUrl}/contact`,
    },
  ];

  // Dynamic project pages
  const projectPages = projectListings.map((project) => ({
    url: `${baseUrl}/projects/${project.navLink}`,
  }));

  return [...staticPages, ...projectPages];
}
