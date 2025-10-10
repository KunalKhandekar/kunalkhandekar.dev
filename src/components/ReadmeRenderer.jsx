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
  const [cssLoaded, setCssLoaded] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleCssLoad = () => {
    setCssLoaded(true);
  };

  if (!isMounted) {
    return (
      <div className="flex justify-center items-center">
        <div className="animate-none bg-gray-200 dark:bg-gray-700 h-[800px] w-full max-w-4xl rounded-md" />
      </div>
    );
  }

  return (
    <div className="flex justify-center py-4 w-full overflow-x-auto">
      <ShadowDOM.div className="w-full max-w-4xl">
        <link
          rel="stylesheet"
          href={
            theme === "dark"
              ? "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.5.1/github-markdown-dark.min.css"
              : "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.5.1/github-markdown-light.min.css"
          }
          onLoad={handleCssLoad}
        />
        <style>{`
            .markdown-body pre {
              overflow-x: auto;
              max-width: 100%;
            }
          
            .markdown-body code {
              word-break: break-word;
            }
          
            .markdown-body table {
              display: block;
              width: 100%;
              max-width: 100%;
              overflow-x: auto;
            }

            /* Add text selection styles */
            .markdown-body ::selection {
              background-color: #b3d7ff;
              color: inherit;
            }
            
            .markdown-body ::-moz-selection {
              background-color: #b3d7ff;
              color: inherit;
            }
            
            /* Dark theme selection */
            ${
              theme === "dark"
                ? `
              .markdown-body ::selection {
                background-color: #1f6feb;
                color: #ffffff;
              }
              
              .markdown-body ::-moz-selection {
                background-color: #1f6feb;
                color: #ffffff;
              }
            `
                : ""
            }
        `}</style>
        <div className="markdown-body">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {content}
          </ReactMarkdown>
        </div>
      </ShadowDOM.div>
    </div>
  );
}
