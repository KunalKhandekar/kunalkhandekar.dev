"use client";

import Masonry from "react-masonry-css";
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import Avatar from "../../../components/lib/Avatar";

export default function MasonryGrid({ tweets }) {
  const breakpointColumnsObj = {
    default: 3,
    1200: 2,
    640: 1,
  };

  return (
    <main className="min-h-screen dark:bg-[#0D1117]">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-foreground">
          Latest Tweets
        </h1>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid w-full"
          columnClassName="my-masonry-grid_column flex flex-col gap-6"
        >
          {tweets.map((tweet) => (
            <TweetCard key={tweet.id_str} tweet={tweet} />
          ))}
        </Masonry>
      </div>
    </main>
  );
}

function TweetCard({ tweet }) {
  const tweetText = (tweet.text || "").replace(/https:\/\/t\.co\/\S+/g, "");
  const firstTagIndex = tweetText.indexOf("#");
  const cleanedText =
    firstTagIndex === -1 ? tweetText : tweetText.slice(0, firstTagIndex);

  return (
    <article className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0f1419] hover:bg-gray-50 dark:hover:bg-[#1a1f24] transition-all duration-200 shadow-sm dark:shadow-md hover:shadow-md dark:hover:shadow-lg rounded-2xl p-4 flex flex-col justify-between animate-fadeUp">
      {/* Header */}
      <div className="flex justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <Avatar url={tweet.user?.profile_image_url_https} />
          <div>
            <p className="text-[15px] font-semibold text-gray-900 dark:text-white leading-tight">
              {tweet.user?.name}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              @{tweet.user?.screen_name}
            </p>
          </div>
        </div>
        <FaXTwitter className="size-5 text-gray-500 dark:text-gray-400" />
      </div>

      {/* Text */}
      <div className="py-3">
        <p className="whitespace-pre-line leading-relaxed text-[15px] text-gray-800 dark:text-gray-100">
          {cleanedText}{" "}
          {firstTagIndex !== -1 && (
            <span className="text-sky-600 dark:text-sky-400 font-medium">
              {tweetText.slice(firstTagIndex)}
            </span>
          )}
        </p>
      </div>

      {/* Media */}
      {tweet.mediaDetails?.length > 0 && (
        <div
          className={`grid ${
            tweet.mediaDetails.length === 1 ? "grid-cols-1" : "grid-cols-2"
          } overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800`}
        >
          {tweet.mediaDetails.map((img, i) => (
            <div
              key={i}
              className={`relative ${
                tweet.mediaDetails.length === 2 && i === 0
                  ? "border-r border-gray-200 dark:border-gray-800"
                  : ""
              }`}
            >
              <Image
                src={img.media_url_https}
                alt={`tweet-media-${i}`}
                width={400}
                height={300}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-200"
              />
            </div>
          ))}
        </div>
      )}

      {/* Footer */}
      <Link
        href={`https://x.com/${tweet.user?.screen_name}/status/${tweet.id_str}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex h-9 w-full items-center justify-center rounded-lg border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 bg-transparent text-sky-600 dark:text-sky-400 hover:text-white hover:bg-sky-600 dark:hover:bg-sky-500 text-sm font-medium transition-all duration-200"
      >
        Read more on X
      </Link>
    </article>
  );
}
