"use client";
import { useRouter } from "next/navigation";

export const FilterMobileComponent = () => {
  const router = useRouter();
  return (
    <div className="flex gap-4 md:hidden pb-10">
      <p className="font-bold text-xl">Filter</p>
      {/* <button
        className="bg-[#ECB159] px-2 rounded-xl"
        onClick={() => router.push("/products")}
      >
        All Product
      </button> */}
      <button
        className="bg-[#ECB159] px-2 rounded-xl"
        onClick={() => router.push("/products?filter=Green Product")}
      >
        Green Product
      </button>
      <button
        className="bg-[#ECB159] px-2 rounded-xl"
        onClick={() => router.push("/products?filter=Grocery")}
      >
        Grocery
      </button>
      <button
        className="bg-[#ECB159] px-2 rounded-xl"
        onClick={() => router.push("/products?filter=Technology")}
      >
        Technology
      </button>
      {/* <button className="bg-gray-800 px-2 text-white rounded-xl">
      Technology
    </button> */}
    </div>
  );
};
