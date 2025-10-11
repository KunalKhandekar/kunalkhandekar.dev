import BlogPage from '../../pages/BlogPage'

export async function generateMetadata() {
  return {
    title: "Blogs",
  }
}

export default function Blogs() {
  return (
    <BlogPage />
  )
}
