// import Image from "next/image";
import { ProductsModel } from "@/utils/type";
import { FaCoins } from "react-icons/fa";
import Link from "next/link";

// import React from 'react'
const Card = ({ data }: { data: ProductsModel }) => {
  return (
    <>
      <Link href={`/products/${data?._id}`}>
        <div className="px-4 py-5 bg-slate-100 hover:scale-95 transition-all hover:ease-in duration-150 flex flex-col gap-2 rounded-2xl">
          <img
            className="object-contain rounded-xl h-[300px]"
            src={data.image}
            alt=""
          />

          <div className="flex flex-col max-md:flex-col items-center">
            <h1 className="text-2xl text-center tracking-tighter max-md:text-xl font-semibold">
              {data?.name}
            </h1>
            <p className="text-2xl max-md:text-md font-bold tracking-wide">
              <div className="flex items-center justify-center">
                <FaCoins className="text-yellow-500 pt-1 mx-2" />
                {data?.price}
              </div>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
