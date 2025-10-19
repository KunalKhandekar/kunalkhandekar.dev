import MasonryGrid from "./MasonryGrid";
import { getTweet } from "react-tweet/api";

export default async function Tweets() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/tweetIds`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) throw new Error("Failed to fetch tweet IDs");

    const data = await res.json();
    const tweetIds = data?.data?.tweetIds || [];

    if (!tweetIds.length) throw new Error("No tweet IDs received");

    const tweets = await Promise.all(tweetIds.map((id) => getTweet(id)));
    const serializableTweets = JSON.parse(JSON.stringify(tweets));

    return <MasonryGrid tweets={serializableTweets} />;
  } catch (err) {
    console.error("Tweets load error:", err);
    return (
      <div className="text-center text-gray-500">Unable to load tweets.</div>
    );
  }
}
