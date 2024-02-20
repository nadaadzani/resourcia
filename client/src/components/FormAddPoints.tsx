import { FaArrowRightLong } from "react-icons/fa6";

export default function FormAddPoints() {
  return (
    <>
      <form action="" className="flex flex-col items-center gap-8 py-6">
        <div className="">
          <label htmlFor="">Order ID #32KoQ14</label>
        </div>

        <div className="flex flex-row items-center">
          <label htmlFor="">Amount:</label>
          <input
            type="text"
            value={"2.5kg"}
            className=" w-16 px-2 h-6 ml-2 border border-black rounded-lg"
          />

          <FaArrowRightLong className="ml-4" />

          <label htmlFor="" className="ml-4">
            25 points
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
