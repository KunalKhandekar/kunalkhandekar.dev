"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { IoIosSearch } from "react-icons/io";
import Avatar from "./lib/Avatar";
import Link from "next/link";

export default function SearchBar() {
  const inputRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    const fetchSearchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/search`
        );
        const result = await res.json();
        if (result.success) {
          setSearchData(result.data);
        }
      } catch (err) {
        console.error("Failed to fetch search data", err);
      }
    };
    fetchSearchData();
  }, []);

  const filteredSearch = useMemo(() => {
    if (!searchTerm.trim()) return searchData;

    return searchData
      .map(({ key, value }) => ({
        key,
        value: value.filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        ),
      }))
      .filter(({ value }) => value.length > 0);
  }, [searchTerm, searchData]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "?" || (e.key === "/" && e.shiftKey)) {
        e.preventDefault();
        setIsActive(true);
      } else if (e.key === "Escape") {
        setIsActive(false);
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    if (isActive) {
      inputRef.current?.focus();
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isActive]);

  return (
    <>
      {/* Search Trigger */}
      <div
        className="pr-20 max-[700px]:pr-0 p-1.5 flex items-center justify-center rounded-md text-sm cursor-pointer border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800/10 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors select-none"
        onClick={() => setIsActive(true)}
      >
        <IoIosSearch className="size-5 mr-2" />
        <span className="flex justify-center items-center max-[700px]:hidden">
          Type{" "}
          <kbd className="mx-2 border-2 rounded-lg border-zinc-300 dark:border-zinc-600 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 py-0.5 px-3 font-mono text-xs">
            Shift + /
          </kbd>{" "}
          to search
        </span>
      </div>

      {/* Search Modal */}
      {isActive && (
        <div
          className="min-w-screen min-h-screen fixed inset-0 bg-black/60 dark:bg-black/80 z-[9999] top-0 left-0 p-2 backdrop-blur-sm"
          onClick={() => setIsActive(false)}
        >
          <div
            className="w-full max-w-3xl mx-auto h-[50%] min-h-[400px] border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-[#0b0e14] shadow-2xl p-3 rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input */}
            <div className="relative">
              <IoIosSearch className="size-5 absolute top-2.5 left-2.5 text-zinc-400 dark:text-zinc-500" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                ref={inputRef}
                className="w-full rounded-md py-2.5 px-2 pl-10 bg-zinc-50 dark:bg-zinc-900/50 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 border border-zinc-200 dark:border-zinc-700 outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-transparent transition-shadow text-sm"
                placeholder="Search on this website..."
              />
            </div>

            {/* Search Results */}
            <div className="w-full h-[90%] my-1.5 overflow-y-auto p-2 text-sm scrollbar-thin scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-700 scrollbar-track-transparent">
              {filteredSearch.length === 0 && searchTerm ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <p className="text-zinc-500 dark:text-zinc-400 text-base mb-2">
                    No results found
                  </p>
                  <p className="text-zinc-400 dark:text-zinc-500 text-sm">
                    Try searching with different keywords
                  </p>
                </div>
              ) : (
                filteredSearch.map(({ key, value }) => (
                  <div key={key}>
                    <h2 className="text-zinc-500 dark:text-zinc-400 py-2 font-semibold text-xs uppercase tracking-wider">
                      {key}
                    </h2>
                    {value.map((item) => (
                      <Link
                        href={item.navLink}
                        target={key === "Blogs" ? "_blank" : ""}
                        onClick={() => setIsActive(false)}
                        className="flex justify-between items-center hover:bg-zinc-100 dark:hover:bg-[#14171d] py-2 px-2 rounded-md cursor-pointer transition-colors group"
                        key={item.id}
                      >
                        <div className="flex items-center gap-2 w-full min-w-0">
                          <Avatar
                            size="size-5"
                            url={item.avatar || "/profile.jpeg"}
                          />
                          <p className="truncate text-zinc-900 dark:text-zinc-100">
                            <span className="text-zinc-500 dark:text-zinc-400">
                              SahilKhandekar/
                            </span>
                            <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {item.name}
                            </span>
                          </p>
                        </div>
                        <span className="text-zinc-500 dark:text-zinc-400 max-[800px]:hidden shrink-0 ml-2 text-xs font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {key === "Projects"
                            ? "Jump"
                            : key === "Blogs"
                            ? "Read"
                            : "Visit"}
                        </span>
                      </Link>
                    ))}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
