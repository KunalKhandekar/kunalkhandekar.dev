import { Banner } from "./_components/Banner";
import BlogContent from "./_components/BlogContent";

export async function generateMetadata() {
  return {
    title: "Blogs",
  };
}

export default function Blogs() {
  return (
    <main>
      <Banner />
      <BlogContent />
    </main>
  );
}
