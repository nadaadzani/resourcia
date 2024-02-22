"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useDebounce } from "use-debounce";

const Search = ({ search }: { search?: string }) => {
  const router = useRouter();
  const [text, setText] = useState(search);
  const [query] = useDebounce(text, 400);
  const initialRender = useRef(true);
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    if (!query) {
      router.push("/products");
    } else {
      router.push(`products/?search=${query}`);
    }
  }, [router, query]);

  return (
    <>
      <input
        className="px-5 py-3.5  w-full border border-gray-800 text-xl rounded-2xl border-1 "
        placeholder="Search here..."
        value={search}
        onChange={(e) => setText(e.target.value)}
        type="text"
      />
    </>
  );
};

export default Search;
