import SearchBar from "./SearchBar";

async function getSearchData() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/search`,
      {
        next: { revalidate: 60 } 
      }
    );
    
    if (!res.ok) {
      throw new Error("Failed to fetch search data");
    }
    
    const result = await res.json();
    return result.success ? result.data : [];
  } catch (err) {
    console.error("Failed to fetch search data", err);
    return [];
  }
}

export default async function SearchBarDataWrapper() {
  const searchData = await getSearchData();
  
  return <SearchBar initialData={searchData} />;
}
