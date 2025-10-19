import { FaListUl } from "react-icons/fa";
import { IoGridOutline } from "react-icons/io5";
import LanguageSelect from "./LanguageSelect";
import IconButton from "../../../components/lib/IconButton";

export const SearchAndFilters = ({
  searchTerm,
  setSearchTerm,
  setView,
  selectedLang,
  setSelectedLang,
  languages,
  view,
}) => {
  return (
    <div className="flex flex-wrap gap-3 pb-3 items-center justify-between">
      {/* Search Input */}
      <input
        placeholder="Find a project..."
        className="border border-zinc-300 dark:border-zinc-600 outline-none 
               p-3 py-1 rounded-lg focus:outline-none focus:ring-1 
               focus:ring-blue-500 focus:border-blue-500 
               w-full sm:w-[60%] md:flex-1"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Right Section (icons + select) */}
      <div className="flex gap-2 items-center w-full sm:w-auto justify-end">
        {/* View Toggle */}
        <div className="flex items-center justify-center gap-1">
          <IconButton onClick={() => setView("grid")}>
            <IoGridOutline
              className={`size-5 ${view === "grid" ? "text-blue-500" : ""}`}
            />
          </IconButton>
          <IconButton onClick={() => setView("list")}>
            <FaListUl
              className={`size-5 ${view === "list" ? "text-blue-500" : ""}`}
            />
          </IconButton>
        </div>

        {/* Language Select */}
        <LanguageSelect
          value={selectedLang}
          onValueChange={setSelectedLang}
          languages={languages}
        />
      </div>
    </div>
  );
};
