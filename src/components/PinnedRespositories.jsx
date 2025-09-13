import Link from "next/link";
import { FaRegBookmark } from "react-icons/fa";
import Publicbadge from "./Publicbadge";
import { FaCubesStacked } from "react-icons/fa6";
import { LuClock3 } from "react-icons/lu";

export default function PinnedRespositories() {
  const pinnedContent = [
    {
      type: "repo",
      title: "Storage App",
      description:
        "A full-stack cloud storage application that allows users to upload, manage, and share files securely with authentication, role-based access control, and file preview support. Built for scalability and optimized for both personal and team usage.",
      stack: "MERN",
      readTime: null,
    },
    {
      type: "repo",
      title: "Portfolio Website",
      description:
        "A personal portfolio website designed to highlight projects, skills, and achievements. Includes responsive design, smooth animations, SEO optimization, and dark/light mode support to provide an engaging and professional online presence. ce platform with product catalog, advanced search and filtering, shopping cart, order management, and secure payment gateway integration. Built with modular components to support future features like coupons and wishlists.",
      stack: "Next.js / TailwindCSS",
      readTime: null,
    },
    {
      type: "repo",
      title: "Chat Application",
      description:
        "A real-time chat web application with features like private messaging, group chats, typing indicators, seen/unseen message tracking, and file sharing. Integrated with Socket.IO for instant updates and MongoDB for message persistence.",
      stack: "MERN + Socket.io",
      readTime: null,
    },
    {
      type: "repo",
      title: "E-commerce Platform",
      description:
        "A scalable e-commerce platform with product catalog, advanced search and filtering, shopping cart, order management, and secure payment gateway integration. Built with modular components to support future features like coupons and wishlists.",
      stack: "React / Node.js / MongoDB",
      readTime: null,
    },
    {
      type: "blog",
      title: "Understanding Event Loop in JavaScript",
      description:
        "A detailed guide to how JavaScript handles asynchronous operations using the event loop. Covers the call stack, Web APIs, callback queue, and microtask queue, with practical examples that explain how promises and async/await work under the hood.",
      stack: null,
      readTime: "4 min read",
    },
    {
      type: "blog",
      title: "Mastering TailwindCSS Grid",
      description:
        "Step-by-step tutorial on using TailwindCSS grid utilities to build complex, responsive layouts. Explains grid columns, row spans, gap utilities, and alignment with real-world examples like dashboards and landing pages.",
      stack: null,
      readTime: "3 min read",
    },
  ];

  return (
    <div className="py-4 max-[800]:my-4 my-2 dark:bg-[#0D1117] bg-white max-[800px]:border dark:border-zinc-800 border-zinc-300 max-[800px]:border-x-0">
      <h3 className="text-md max-[800]:px-4 max-[800]:pt-2 max-[800px]:text-md">
        Pinned repositories & blogs
      </h3>
      <div className="gap-4 grid grid-cols-2 max-[800px]:flex overflow-scroll max-[800px]:w-screen my-2 max-[800px]:p-4">
        {pinnedContent.map((item, idx) => (
          <div
            key={idx}
            className="border border-zinc-300 dark:border-zinc-600 rounded-lg p-4 max-[800px]:min-w-80 flex flex-col justify-between h-40"
          >
            {/* Header */}
            <div className="flex gap-2 justify-between items-center">
              <Link
                href={"/"}
                className="hover:underline text-blue-400 flex gap-1 items-center justify-start"
              >
                <FaRegBookmark className="size-4 text-gray-500" />
                <p className="font-semibold text-sm line-clamp-1">
                  {item.title}
                </p>
              </Link>
              <Publicbadge />
            </div>

            {/* Desc */}
            <p className="text-xs line-clamp-4 my-2.5 dark:text-zinc-400 text-neutral-700">
              {item.description}
            </p>

            {/* Footer (stack / time pinned at bottom) */}
            <div className="flex justify-start items-center gap-2 text-xs mt-auto">
              {item.type === "repo" ? (
                <>
                  <FaCubesStacked className="size-3 text-yellow-500" />
                  <p className="font-mono darK:text-zinc-400 text-zinc-500">
                    {item.stack}
                  </p>
                </>
              ) : (
                <>
                  <LuClock3 className="size-3 text-green-500" />
                  <p className="font-mono text-zinc-400">{item.readTime}</p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
