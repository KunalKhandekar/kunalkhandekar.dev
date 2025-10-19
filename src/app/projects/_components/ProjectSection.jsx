"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { RiStackLine } from "react-icons/ri";
import Publicbadge from "../../../components/Publicbadge";
import { SearchAndFilters } from "./SearchAndFilters";

export default function ProjectSection({ projectList, languages }) {
  const [view, setView] = useState("list");
  const [selectedLang, setSelectedLang] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRepos = useMemo(() => {
    return projectList?.filter(
      (proj) =>
        (selectedLang === "All" || proj.languages.includes(selectedLang)) &&
        (proj.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          proj.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [projectList, selectedLang, searchTerm]);

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

      {filteredRepos?.length === 0 ? (
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
          {(searchTerm || selectedLang !== "All") && (
            <div className="flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-400 border-b border-zinc-300 dark:border-zinc-600 pb-2">
              <p>
                {filteredRepos?.length} results for repositories{" "}
                {searchTerm ? (
                  <>
                    <span>matching </span>
                    <span className="font-medium text-zinc-700 dark:text-zinc-200">
                      {searchTerm}{" "}
                    </span>
                  </>
                ) : null}
                {selectedLang !== "All" ? (
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
                  setSelectedLang("All");
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
      {filteredRepos?.map((item, index) => (
        <div
          className="border-t border-zinc-300 dark:border-zinc-600 py-5 max-[800px]:min-w-80 flex flex-col justify-between"
          key={index}
        >
          {/* Header */}
          <div className="flex gap-3 justify-start items-center">
            <Link
              href={`/projects/${item.navLink}`}
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
      {filteredRepos?.map((item, index) => (
        <div
          className="bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col"
          key={index}
        >
          {/* Project Image */}
          <div className="relative aspect-video bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-200"
              priority={index < 3}
            />
          </div>

          {/* Card Content */}
          <div className="p-4 flex flex-col flex-grow">
            {/* Header */}
            <div className="flex gap-3 justify-start items-center mb-3">
              <Link
                href={`/projects/${item.navLink}`}
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
                <span>Live</span>
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
