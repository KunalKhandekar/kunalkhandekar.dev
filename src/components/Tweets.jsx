import { tweetIds } from "../utils/constant";
import MasonryGrid from "./MasonryGrid";
import { getTweet } from "react-tweet/api";

export default async function Tweets() {
  const tweets = await Promise.all(tweetIds.map((id) => getTweet(id)));
  const serializableTweets = JSON.parse(JSON.stringify(tweets));
  return <MasonryGrid tweets={serializableTweets} />;
}
