import { ExperienceCard } from "./ExperienceCard";

export default async function ExperienceContent() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/experience`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    return (
      <div className="text-center text-gray-500">
        Unable to load experiences.
      </div>
    );
  }

  const data = await res.json();
  const experiences = data?.data || [];

  return (
    <div>
      {experiences?.map((exp, index) => (
        <div key={exp._id}>
          <ExperienceCard data={exp} />
          {index < experiences.length - 1 && (
            <div className="my-6 border-t border-gray-300 dark:border-gray-700" />
          )}
        </div>
      ))}
    </div>
  );
}
