"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import ShadowDOM from "react-shadow";

export default function ReadmeRenderer({ content }) {
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="flex justify-center items-center">
        <div className="animate-none bg-gray-200 dark:bg-gray-700 h-[800px] w-full max-w-4xl rounded-md" />
      </div>
    );
  }

  return (
    <div className="flex justify-center py-8">
      <ShadowDOM.div>
        <link
          rel="stylesheet"
          href={
            theme === "dark"
              ? "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.5.1/github-markdown-dark.min.css"
              : "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.5.1/github-markdown-light.min.css"
          }
        />
        <div className="markdown-body">
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {content}
          </ReactMarkdown>
        </div>
      </ShadowDOM.div>
    </div>
  );
}
