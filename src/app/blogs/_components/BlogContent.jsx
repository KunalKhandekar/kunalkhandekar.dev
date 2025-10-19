import { BlogCard } from "./BlogCard";

export default async function BlogContent() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/blog`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    return (
      <div className="text-center text-gray-500">Unable to load blogs.</div>
    );
  }

  const data = await res.json();
  const blogs = data?.data || [];

  return (
    <div className="container mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-6">
      {blogs.map((post) => (
        <BlogCard key={post._id} {...post} />
      ))}
    </div>
  );
}
