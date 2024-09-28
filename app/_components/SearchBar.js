"use client";
import { useState } from "react";
import BooksGrid from "./BooksGrid";

function SearchBar() {
  const [query, setQuery] = useState("Lord of the Ring");

  return (
    <>
      <div className="items-center justify-center flex">
        <form>
          <input
            type="search"
            className="rounded-xl h-12 w-96 lg:w-[40rem] p-2"
            placeholder="Find a Book..."
          />
        </form>
      </div>
      <div>
        <BooksGrid query={query} />
      </div>
    </>
  );
}

export default SearchBar;
