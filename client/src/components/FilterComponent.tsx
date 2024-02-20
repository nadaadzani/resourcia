"use client";

import { useRouter } from "next/navigation";

export const FilterComponent = () => {
  const router = useRouter();
  return (
    <div className="w-[25%] max-md:hidden  pl-24 flex flex-col gap-5 ">
      <h1 className="text-3xl font-bold">Filter</h1>
      <button
        className="bg-[#ECB159] w-[70%]  px-2 py-3 text-xl rounded-2xl"
        onClick={() => router.push("/products")}
      >
        All Products
      </button>
      <button
        className="bg-[#ECB159] w-[70%] px-2 py-3 text-xl rounded-2xl"
        onClick={() => router.push("/products?filter=Green Product")}
      >
        Green Products
      </button>
      <button
        className="bg-[#ECB159] w-[70%]  px-2 py-3 text-xl rounded-2xl"
        onClick={() => router.push("/products?filter=Grocery")}
      >
        Groceries
      </button>
      <button
        className="bg-[#ECB159] w-[70%]  px-2 py-3 text-xl rounded-2xl"
        onClick={() => router.push("/products?filter=Technology")}
      >
        Technology
      </button>
      {/* <button
        className="bg-gray-800 w-[70%]  px-2 py-3 text-xl text-white rounded-2xl"
        onClick={() => router.push("/products?filter=Technology")}
      >
        Technology
      </button> */}
    </div>
  );
};
