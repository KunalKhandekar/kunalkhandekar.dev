import Sidebar from "./Sidebar";

export default async function SidebarWrapper({ children }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/about`, {
      next: { revalidate: 60 },
    });

  const result = await res.json();
  const profileData = result?.success ? result.data : {};

  return <Sidebar profileData={profileData}>{children}</Sidebar>;
}