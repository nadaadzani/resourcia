// import Image from "next/image";
import { ProductsModel } from "@/utils/type";
import { FaCoins } from "react-icons/fa";
import Link from "next/link";

// import React from 'react'
const Card = ({ data }: { data: ProductsModel }) => {
  return (
    <>
      <Link href={`/products/${data?._id}`}>
        <div className="px-4 py-5 hover:scale-95 transition-all hover:ease-in duration-150 flex flex-col gap-2 rounded-2xl shadow-2xl">
          <img
            className="object-cover rounded-xl h-[300px]"
            src={data.image}
            alt=""
          />

          <div className="flex flex-col max-md:flex-col">
            <div className="flex items-center w-full justify-between">
              <h1 className="text-2xl text-center tracking-tighter max-md:text-xl font-semibold">
                {data?.name}
              </h1>
              <h5 className="text-gray-600 text-sm">{data?.category}</h5>
            </div>
            <div className="text-2xl max-md:text-md font-bold tracking-wide mt-4">
              <div className="flex items-center">
                <FaCoins className="text-yellow-500 pt-1 mx-2" />
                {data?.price}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
