import { BlogCard } from "../components/BlogCard";
import { Banner } from "../components/Banner";
import React from "react";
import { blogs } from "../utils/constant";

export default function BlogPage() {
  return (
    <main>
      <Banner />
      <div className="container mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-6">
        {blogs.map((post) => (
          <BlogCard key={post._id} {...post} />
        ))}
      </div>
    </main>
  );
}
