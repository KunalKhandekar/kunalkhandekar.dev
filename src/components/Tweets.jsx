// app/components/Tweets.server.tsx
import MasonryGrid from "./MasonryGrid";
import { getTweet } from "react-tweet/api";

export default async function Tweets() {
  const tweetIds = [
    "1969207571513790545",
    "1968749376181789116",
    "1968384891558805563",
    "1968307469647757641",
    "1967645650499285309",
    "1967499850435756251",
  ];

  const tweets = await Promise.all(tweetIds.map((id) => getTweet(id)));

  // ensure data is serializable (defensive)
  const serializableTweets = JSON.parse(JSON.stringify(tweets));

  return <MasonryGrid tweets={serializableTweets} />;
}
