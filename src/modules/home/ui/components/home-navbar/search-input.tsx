import { SearchIcon } from "lucide-react";

export const SearchInput = () => {
      // add search functionality
  return (

    <form className="flex w-full max-w-[600px] ">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="search"
          className="w-full pl-4 py-2 pr-12 rounded-l-full border border-gray-200 focus:outline-none
        focus:border-blue-500"
        />
      {/* {add remove search button} */}

      </div>
      <button
        type="submit"
        className="bg-gray-100 border border-gray-200 border-l-0 rounded-r-full
        px-4 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <SearchIcon className="size-5" />
      </button>
    </form>
  );
};
