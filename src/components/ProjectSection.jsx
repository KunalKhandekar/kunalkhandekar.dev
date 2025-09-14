import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { RiStackLine } from "react-icons/ri";
import Publicbadge from "../components/Publicbadge";

export default function ProjectSection() {
  const projects = [
    {
      title: "talkAtive",
      description:
        "TalkAtive is a dynamic real-time chat application built with the MERN stack, empowering users to connect and engage in seamless conversations. It offers a user-friendly interface, secure authentication, robust chat functionality, and real-time messaging through WebSockets.",
      stack: "MERN",
      liveLink: "chat-talkative.vercel.app/",
      gitHubLink: "https://github.com/KunalKhandekar/talkAtive",
    },
    {
      title: "EcoTracker",
      description:
        "A comprehensive carbon footprint tracking application that helps users monitor their daily environmental impact. Built with React and Node.js, featuring interactive charts, goal setting, and personalized recommendations for sustainable living.",
      stack: "React, Node.js",
      liveLink: "ecotracker-app.vercel.app/",
      gitHubLink: "https://github.com/KunalKhandekar/EcoTracker",
    },
    {
      title: "TaskFlow Pro",
      description:
        "An advanced project management tool designed for teams to collaborate efficiently. Features include kanban boards, time tracking, file sharing, and real-time notifications. Built with Next.js, TypeScript, and PostgreSQL for optimal performance.",
      stack: "Next.js, TypeScript",
      liveLink: "taskflow-pro.vercel.app/",
      gitHubLink: "https://github.com/KunalKhandekar/TaskFlowPro",
    },
    {
      title: "CryptoWatch",
      description:
        "A real-time cryptocurrency portfolio tracker with advanced analytics and price alerts. Integrates with multiple exchanges, provides market insights, and offers automated trading suggestions. Built with Vue.js and Express.js.",
      stack: "Vue.js, Express",
      liveLink: "cryptowatch-live.vercel.app/",
      gitHubLink: "https://github.com/KunalKhandekar/CryptoWatch",
    },
    {
      title: "FitnessPal",
      description:
        "A comprehensive fitness tracking application that monitors workouts, nutrition, and health metrics. Features AI-powered workout recommendations, meal planning, and progress visualization. Developed using React Native and Firebase.",
      stack: "React Native",
      liveLink: "fitnesspal-app.vercel.app/",
      gitHubLink: "https://github.com/KunalKhandekar/FitnessPal",
    },
    {
      title: "CodeShare",
      description:
        "A collaborative code editor platform where developers can share, review, and collaborate on code snippets in real-time. Supports multiple programming languages with syntax highlighting and version control integration.",
      stack: "Angular, Socket.io",
      liveLink: "codeshare-editor.vercel.app/",
      gitHubLink: "https://github.com/KunalKhandekar/CodeShare",
    }
  ];

  return (
    <section className="flex-3 max-w-4xl">
      {projects.map((item, index) => (
        <div key={index} className="border-t border-zinc-300 dark:border-zinc-600 py-5 max-[800px]:min-w-80 flex flex-col justify-between">
          {/* Header */}
          <div className="flex gap-3 justify-start items-center">
            <Link
              href={"/"}
              className="font-semibold text-xl line-clamp-1 hover:underline text-blue-400"
            >
              {item.title}
            </Link>
            <Publicbadge />
          </div>
          
          {/* Description */}
          <p className="text-sm my-2.5 dark:text-zinc-400 text-neutral-700">
            {item.description}
          </p>
          
          {/* Footer (stack / live link / github pinned at bottom) */}
          <div className="flex justify-start items-center gap-6 text-xs mt-auto">
            {/* Stack */}
            <div className="flex justify-center items-center gap-2">
              <RiStackLine className="size-4 text-blue-600 dark:text-blue-400" />
              <p className="font-mono text-zinc-600 dark:text-zinc-400">
                {item.stack}
              </p>
            </div>
            
            {/* Live Link */}
            <div className="flex justify-center items-center gap-2 font-mono text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200">
              <FaExternalLinkAlt className="size-3" />
              <Link
                href={item.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.liveLink}
              </Link>
            </div>
            
            {/* GitHub Link */}
            <div className="flex justify-center items-center gap-2">
              <FaGithub className="size-4" />
              <Link
                href={item.gitHubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs bg-zinc-200 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300 px-1 py-0.5 rounded border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-700/70 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-200"
              >
                {item.gitHubLink.replace(/^https?:\/\/(www\.)?github\.com\//, "")}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}