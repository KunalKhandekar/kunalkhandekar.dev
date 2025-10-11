import AchievementPage from "../../pages/AchievementPage";

export async function generateMetadata() {
  return {
    title: "Achievements",
  }
}

export default function Achievements() {
  return (
    <AchievementPage />
  )
}
