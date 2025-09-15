"use client";

import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { RiStackLine } from "react-icons/ri";
import Publicbadge from "../components/Publicbadge";
import { IoGridOutline } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";
import IconButton from "./lib/IconButton";
import { useMemo, useState } from "react";
import LanguageSelect from "./LanguageSelect";
import React from "react";

export default function ProjectSection() {
  const [view, setView] = useState("list");
  const [selectedLang, setSelectedLang] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const projects = [
    {
      title: "talkAtive",
      description:
        "TalkAtive is a dynamic real-time chat application built with the MERN stack, empowering users to connect and engage in seamless conversations. It offers a user-friendly interface, secure authentication, robust chat functionality, and real-time messaging through WebSockets.",
      stack: "MERN",
      liveLink: "chat-talkative.vercel.app/",
      gitHubLink: "https://github.com/KunalKhandekar/talkAtive",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop&crop=center",
      languages: [
        "html",
        "css",
        "tailwind",
        "next",
        "react",
        "node",
        "javascript",
      ],
    },
    {
      title: "EcoTracker",
      description:
        "A comprehensive carbon footprint tracking application that helps users monitor their daily environmental impact. Built with React and Node.js, featuring interactive charts, goal setting, and personalized recommendations for sustainable living.",
      stack: "React, Node.js",
      liveLink: "ecotracker-app.vercel.app/",
      gitHubLink: "https://github.com/KunalKhandekar/EcoTracker",
      image:
        "https://images.unsplash.com/photo-1569163139394-de44cb2c2e86?w=500&h=300&fit=crop&crop=center",
      languages: ["html", "css"],
    },
    {
      title: "TaskFlow Pro",
      description:
        "An advanced project management tool designed for teams to collaborate efficiently. Features include kanban boards, time tracking, file sharing, and real-time notifications. Built with Next.js, TypeScript, and PostgreSQL for optimal performance.",
      stack: "Next.js, TypeScript",
      liveLink: "taskflow-pro.vercel.app/",
      gitHubLink: "https://github.com/KunalKhandekar/TaskFlowPro",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop&crop=center",
      languages: ["tailwind", "next", "react", "node"],
    },
    {
      title: "CryptoWatch",
      description:
        "A real-time cryptocurrency portfolio tracker with advanced analytics and price alerts. Integrates with multiple exchanges, provides market insights, and offers automated trading suggestions. Built with Vue.js and Express.js.",
      stack: "Vue.js, Express",
      liveLink: "cryptowatch-live.vercel.app/",
      gitHubLink: "https://github.com/KunalKhandekar/CryptoWatch",
      image:
        "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=500&h=300&fit=crop&crop=center",
      languages: ["react", "node"],
    },
    {
      title: "FitnessPal",
      description:
        "A comprehensive fitness tracking application that monitors workouts, nutrition, and health metrics. Features AI-powered workout recommendations, meal planning, and progress visualization. Developed using React Native and Firebase.",
      stack: "React Native",
      liveLink: "fitnesspal-app.vercel.app/",
      gitHubLink: "https://github.com/KunalKhandekar/FitnessPal",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop&crop=center",
      languages: ["html", "node"],
    },
    {
      title: "CodeShare",
      description:
        "A collaborative code editor platform where developers can share, review, and collaborate on code snippets in real-time. Supports multiple programming languages with syntax highlighting and version control integration.",
      stack: "Angular, Socket.io",
      liveLink: "codeshare-editor.vercel.app/",
      gitHubLink: "https://github.com/KunalKhandekar/CodeShare",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&crop=center",
      languages: ["html"],
    },
  ];

  const languages = [
    { value: "all", label: "All" },
    { value: "javascript", label: "JavaScript" },
    { value: "html", label: "HTML" },
    { value: "typescript", label: "TypeScript" },
    { value: "css", label: "CSS" },
    { value: "tailwind", label: "Tailwind CSS" },
    { value: "react", label: "React.js" },
    { value: "node", label: "Node.js" },
  ];

  const filteredRepos = useMemo(() => {
    return projects.filter(
      (proj) =>
        (selectedLang === "all" || proj.languages.includes(selectedLang)) &&
        (proj.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          proj.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [projects, selectedLang, searchTerm]);

  return (
    <section className="flex-3 max-w-4xl max-[800px]:p-4 max-[800px]:dark:bg-[#0D1117] max-[800px]:bg-white max-[800px]:border-zinc-300 max-[800px]:border-y max-[800px]:dark:border-zinc-800">
      {/* Searchs and filters */}
      <SearchAndFilters
        languages={languages}
        selectedLang={selectedLang}
        setSearchTerm={setSearchTerm}
        setSelectedLang={setSelectedLang}
        setView={setView}
        searchTerm={searchTerm}
        view={view}
      />

      {filteredRepos.length === 0 ? (
        <div className="w-full">
          {/* Top info bar */}
          <div className="flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-400 border-b border-zinc-300 dark:border-zinc-600 pb-2">
            <p>
              0 results for repositories matching{" "}
              <span className="font-medium text-zinc-700 dark:text-zinc-200">
                {searchTerm || "your search"}
              </span>{" "}
            </p>

            {/* Clear filter button */}
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedLang("all");
              }}
              className="flex items-center gap-1 text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
            >
              <span>Clear filter</span>
              <span className="text-lg leading-none">&times;</span>
            </button>
          </div>

          {/* Center message */}
          <div className="flex items-center justify-center py-12">
            <p className="text-lg font-semibold text-zinc-700 dark:text-zinc-200 text-center">
              SahilKhandekar doesn't have any repositories that match.
            </p>
          </div>
        </div>
      ) : (
        <React.Fragment>
          {(searchTerm || selectedLang !== "all") && (
            <div className="flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-400 border-b border-zinc-300 dark:border-zinc-600 pb-2">
              <p>
                {filteredRepos.length} results for repositories{" "}
                {searchTerm ? (
                  <>
                    <span>matching </span>
                    <span className="font-medium text-zinc-700 dark:text-zinc-200">
                      {searchTerm}{" "}
                    </span>
                  </>
                ) : null}
                {selectedLang !== "all" ? (
                  <>
                    <span>written in </span>
                    <span className="font-medium text-zinc-700 dark:text-zinc-200">
                      {selectedLang}
                    </span>
                  </>
                ) : null}
              </p>

              {/* Clear filter button */}
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedLang("all");
                }}
                className="flex items-center gap-1 text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
              >
                <span>Clear filter</span>
                <span className="text-lg leading-none">&times;</span>
              </button>
            </div>
          )}

          {/* Conditional rendering based on view */}
          {view === "list" ? (
            // List Layout
            <ListLayout filteredRepos={filteredRepos} />
          ) : (
            // Grid Layout
            <GridLayout filteredRepos={filteredRepos} />
          )}
        </React.Fragment>
      )}
    </section>
  );
}

const ListLayout = ({ filteredRepos }) => {
  return (
    <div>
      {filteredRepos.map((item, index) => (
        <div
          className="border-t border-zinc-300 dark:border-zinc-600 py-5 max-[800px]:min-w-80 flex flex-col justify-between"
          key={index}
        >
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
                <p className="max-[500px]:hidden">{item.liveLink}</p>
                <p className="max-[500px]:block hidden">Demo</p>
              </Link>
            </div>

            {/* GitHub Link */}
            <div className="flex justify-center items-center gap-2">
              <FaGithub className="size-4" />
              <Link
                href={item.gitHubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs bg-zinc-200 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300 px-1 py-0.5 rounded border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-700/70 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-200"
              >
                Code
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const GridLayout = ({ filteredRepos }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {filteredRepos.map((item, index) => (
        <div
          className="bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col"
          key={index}
        >
          {/* Project Image */}
          <div className="aspect-video bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
            />
          </div>

          {/* Card Content */}
          <div className="p-4 flex flex-col flex-grow">
            {/* Header */}
            <div className="flex gap-3 justify-start items-center mb-3">
              <Link
                href={"/"}
                className="font-semibold text-lg line-clamp-1 hover:underline text-blue-400"
              >
                {item.title}
              </Link>
              <Publicbadge />
            </div>

            {/* Description */}
            <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3 mb-4 flex-grow">
              {item.description}
            </p>

            {/* Stack */}
            <div className="flex justify-start items-center gap-2 mb-4">
              <RiStackLine className="size-4 text-blue-600 dark:text-blue-400" />
              <p className="font-mono text-xs text-zinc-600 dark:text-zinc-400">
                {item.stack}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center gap-3 mt-auto">
              {/* Live Link */}
              <Link
                href={item.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-md transition-colors duration-200 flex-1 justify-center"
              >
                <FaExternalLinkAlt className="size-3" />
                <span>Live Demo</span>
              </Link>

              {/* GitHub Link */}
              <Link
                href={item.gitHubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-3 py-1.5 rounded-md border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors duration-200 flex-1 justify-center"
              >
                <FaGithub className="size-3" />
                <span>Code</span>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const SearchAndFilters = ({
  searchTerm,
  setSearchTerm,
  setView,
  selectedLang,
  setSelectedLang,
  languages,
  view,
}) => {
  return (
    <div className="flex flex-wrap gap-3 pb-3 items-center justify-between">
      {/* Search Input */}
      <input
        placeholder="Find a project..."
        className="border border-zinc-300 dark:border-zinc-600 outline-none 
               p-3 py-1 rounded-lg focus:outline-none focus:ring-1 
               focus:ring-blue-500 focus:border-blue-500 
               w-full sm:w-[60%] md:flex-1"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Right Section (icons + select) */}
      <div className="flex gap-2 items-center w-full sm:w-auto justify-end">
        {/* View Toggle */}
        <div className="flex items-center justify-center gap-1">
          <IconButton tooltip={"Grid view"} onClick={() => setView("grid")}>
            <IoGridOutline
              className={`size-5 ${view === "grid" ? "text-blue-500" : ""}`}
            />
          </IconButton>
          <IconButton tooltip={"List view"} onClick={() => setView("list")}>
            <FaListUl
              className={`size-5 ${view === "list" ? "text-blue-500" : ""}`}
            />
          </IconButton>
        </div>

        {/* Language Select */}
        <LanguageSelect
          value={selectedLang}
          onValueChange={setSelectedLang}
          languages={languages}
        />
      </div>
    </div>
  );
};
