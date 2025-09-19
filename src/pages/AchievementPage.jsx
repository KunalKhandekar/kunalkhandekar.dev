"use client";

import { AchievementCard } from "../components/AchievementsCard";
import ProfileBar from "../components/ProfileBar";

export default function AchievementPage() {
  const achievements = [
    {
      _id: "1",
      companyLogo: "/postman_badge.png",
      title: "Postman API Fundamental Badge",
      timeLine: "Nov 2024",
      descriptionTitle: "Description",
      descriptionPoints: [
        "This badge was awarded for demonstrating proficiency with APIs and Postman by completing foundational tasks in Postman and passing all tests with a submitted Postman Collection",
      ],
      images: ["/achievements/postman.png"],
    },
    {
      _id: "2",
      companyLogo: "/technovate_logo.jpeg",
      title: "Technovate 24-Hour Hackathon",
      company: "Technovate",
      timeLine: "Nov 2024",
      descriptionTitle: "Project",
      descriptionPoints: [
        "Collaborated in a multidisciplinary team to design and deliver a working MVP within 24 hours.",
        "Developed frontend UI components using React.",
        "Integrated backend APIs using Node.js and Express.js.",
      ],
      images: ["/achievements/technovate_certificate.png"],
    },
    {
      _id: "3",
      companyLogo: "/lala_rajpatrai_college.jpeg",
      title: "Technotronix - Code quiz",
      timeLine: "Sep 2024",
      location: "Mumbai, Maharashtra, India · On-site",
      descriptionTitle: "Description",
      descriptionPoints: [
        "Awarded 1st place in an intercollegiate coding quiz covering HTML, C++, and SQL.",
        "Demonstrated strong conceptual knowledge and fast problem-solving under timed conditions.",
      ],
      images: [
        "/achievements/technotronix_certificate.jpeg",
        "/achievements/1756384996106.jpeg",
      ],
    },
  ];
  return (
    <div className="max-w-7xl m-auto p-6 flex gap-5 max-[800px]:flex-col max-[800px]:p-0 max-[800px]:bg-[#F6F8FA] max-[800px]:dark:bg-[#010409]">
      <ProfileBar />
      <div className="flex-3 max-w-4xl">
        <div className="border-zinc-300 max-[800px]:rounded-none rounded-lg border dark:border-zinc-600 max-[800px]:border-zinc-300 max-[800px]:border-t max-[800px]:border-b max-[800px]:dark:border-zinc-800 p-6 dark:bg-[#0D1117] bg-white max-[800px]:border-l-0 max-[800px]:border-r-0">
          <p className="text-xs font-mono text-shadow-initial pb-3">
            SahilKhandekar<span className="px-0.5 text-gray-400">/</span>
            Acheivement
            <span className="text-gray-400">.md</span>
          </p>
          {achievements?.map((achievement, index) => (
            <div key={achievement._id}>
              <AchievementCard data={achievement} />
              {index < achievements.length - 1 && (
                <div className="my-6 border-t border-gray-300 dark:border-gray-700" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
