// import Image from "next/image";
import { ProductsModel } from "@/utils/type";
import Link from "next/link";

// import React from 'react'
const Card = ({ data }: { data: ProductsModel }) => {
  return (
    <>
      <Link href={`/products/${data?._id}`}>
        <div className="px-4 py-5 bg-transparent hover:scale-95 transition-all hover:ease-in duration-150 flex flex-col gap-2">
          <img
            className="object-contain rounded-xl h-[300px]"
            src={data.image}
            alt=""
          />

          <span className="flex max-md:flex-col justify-between">
            <h1 className="text-2xl tracking-tighter max-md:text-xl font-semibold">
              {data?.name}
            </h1>
            <p className="text-2xl max-md:text-md font-bold tracking-wide">
              {data?.price}
            </p>
          </span>
        </div>
      </Link>
    </>
  );
};

export default Card;
