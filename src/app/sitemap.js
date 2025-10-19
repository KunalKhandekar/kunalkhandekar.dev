export default async function sitemap() {
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

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/projectsList`,
    {
      next: { revalidate: 60 },
    }
  );

  const data = await res.json();
  const projectListings = res.ok && data.success ? data.data : [];
  
  const projectPages = projectListings.map((project) => ({
    url: `${baseUrl}/projects/${project.navLink}`,
  }));

  return [...staticPages, ...projectPages];
}
