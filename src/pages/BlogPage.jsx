import { BlogCard } from "../components/BlogCard";
import { Banner } from "../components/Banner";
import React from "react";

export default function BlogPage() {
  const samplePosts = [
    {
      _id: "1",
      title:
        "How to Actually Finish Your Side Projects: A Developer’s Guide to Going from Idea to Done",
      excerpt:
        "Learn how I turn side project ideas into finished products with my simple 7-step framework, making it easier for developers like me to actually complete their projects.",
      date: "Sep 14, 2025",
      readTime: "6 min read",
      category: "Project Management",
      mediumLink:
        "https://medium.com/@kunalkhandekar.dev/how-to-actually-finish-your-side-projects-a-developers-guide-to-going-from-idea-to-done-abfdf2d4925f",
    },
  ];

  return (
    <main>
      <Banner />
      <div className="container mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-6">
        {samplePosts.map((post) => (
          <BlogCard key={post._id} {...post} />
        ))}
      </div>
    </main>
  );
}
