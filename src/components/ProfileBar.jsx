import { ProfileBarUI } from "../components/ProfileBarUI";

export default async function ProfileBar() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/about`,
    {
      next: { revalidate: 60 },
    }
  );

  const profileData = (await res.json())?.data;

  return <ProfileBarUI profileData={profileData} />;
}
