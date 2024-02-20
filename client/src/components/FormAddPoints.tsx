"use client";
import { FaArrowRightLong } from "react-icons/fa6";
import { handleAddPoin } from "./action";
import { useState } from "react";

export default function FormAddPoints({ id }: { id: string }) {
  const [poin, setPoin] = useState<number>(0);
  return (
    <>
      <form
        action={() => {
          handleAddPoin(id, poin);
        }}
        className="flex flex-col items-center gap-8 py-6"
      >
        <div className="">
          <label htmlFor="">#ID {id}</label>
        </div>

        <div className="flex flex-row items-center">
          <label htmlFor="">Amount:</label>
          <input
            type="number"
            placeholder="in Kg"
            className=" w-16 px-2 h-6 ml-2 border border-black rounded-lg"
            onChange={(e) => {
              setPoin(Number(e.target.value));
            }}
          />
          Kg
          <FaArrowRightLong className="ml-4" />
          <label htmlFor="" className="ml-4">
            {poin} points
          </label>
        </div>

        <div>
          <button
            type="submit"
            className="w-48 h-10 border border-black rounded-2xl hover:bg-black hover:text-white hover:transition"
          >
            Complete order
          </button>
        </div>
      </form>
    </>
  );
}
