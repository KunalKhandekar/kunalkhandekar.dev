import { Tweet } from "react-tweet";

export default function Tweets() {
  const tweetIds = [
    "1969207571513790545",
    "1968749376181789116",
    "1968384891558805563",
    "1968307469647757641",
    "1967645650499285309",
    "1967499850435756251"
  ];

  return (
    <main className="min-h-screen dark:bg-[#0D1117]">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-foreground">
          Latest Tweets
        </h1>

        {/* Grid container with no row gap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-0 ">
          {tweetIds.map((id) => (
            <div key={id} className="tweet-wrapper flex flex-col my-[-10px] !text-xl">
              <Tweet id={id} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
