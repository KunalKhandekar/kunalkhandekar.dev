import { AchievementCard } from "./AchievementsCard";

export default async function AchievementContent() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/achievement`,
    {
        next: { revalidate: 60 },
      }
  );

  if (!res.ok) {
    return (
      <div className="text-center text-gray-500">
        Unable to load achievements.
      </div>
    );
  }

  const data = await res.json();
  const achievements = data?.data || [];

  return (
    <div>
      {achievements?.map((achievement, index) => (
        <div key={achievement._id}>
          <AchievementCard data={achievement} />
          {index < achievements.length - 1 && (
            <div className="my-6 border-t border-gray-300 dark:border-gray-700" />
          )}
        </div>
      ))}
    </div>
  );
}
