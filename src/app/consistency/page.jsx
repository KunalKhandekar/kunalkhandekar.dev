import AnimatedHeader from "./_components/AnimatedHeader";
import Tweets from "./_components/Tweets"

export async function generateMetadata() {
  return {
    title: "Consistency",
  };
}

export default function Consistency() {
  return (
    <div>
      <AnimatedHeader />
      <Tweets />
    </div>
  );
}
