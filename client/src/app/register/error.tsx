"use client";

import { useSearchParams } from "next/navigation";

export default function Error() {
  const search = useSearchParams();
  const fieldError = search.get("fieldError");
  return (
    <>
      <h1 className="text-red-500">{fieldError}</h1>
    </>
  );
}
