import { FaStar } from "react-icons/fa6";
import { FaCoins } from "react-icons/fa";
const page = () => {
  return (
    <main className="min-h-screen pt-24 px-20">
      <div
        style={{
          backgroundImage: `url("https://i.pinimg.com/474x/2a/a4/52/2aa452455c658fc46cec0a80e6e08986.jpg")`,
          backgroundSize: "cover",
        }}
        className="w-full text-white max-md:py-2 py-5 max-md:text-black rounded-xl ">
        <div className="py-7 px-10 max-md:py-2 max-md:px-5 flex flex-col max-md:gap-3 gap-6">
          <p className="text-2xl max-md:text-xl font-bold">Products</p>
          <p className="text-5xl max-md:text-3xl font-bold tracking-tighter">
            Get 20% discount for first buy!
          </p>
        </div>
      </div>
      <div className=" flex px-20 max-md:px-3 max-md:flex-col pt-5 justify-between">
        <div className="w-[60%] max-md:w-full flex flex-col gap-5">
          <img
            className="h-full object-cover max-md:w-full w-[80%]"
            src="https://i.pinimg.com/474x/9f/e3/b5/9fe3b56b082db6cf30e6b5cd4a47d2c3.jpg"
            alt=""
          />
        </div>
        <div className="w-[40%] flex flex-col gap-5">
          <div className="px-4 py-2 flex justify-center w-[48%] items-center rounded-3xl border border-gray-800">
            <h3 className="text-xl">Category Gadget</h3>
          </div>
          <h2 className="text-5xl tracking-tight pt-5">IPhone 15 Pro Max </h2>
          <div className="flex  text-3xl gap-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="flex gap-4 pt-5  ">
            <FaCoins className="text-yellow-500 text-5xl pt-1" />
            <p className="text-5xl font-semibold tracking-wider line-through ">
              1000
            </p>
            <p className="text-5xl font-semibold tracking-wider  ">800</p>
          </div>
          <div className="flex flex-col gap-28 justify-between">
            <div className="flex gap-5 pt-5 flex-col ">
              <h1 className="font-[200] text-3xl">Description</h1>
              <p className="text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Minima, praesentium voluptate? Asperiores natus delectus
                possimus esse expedita perspiciatis aperiam, eos ex, ducimus
                repellat animi amet et veniam iste, voluptates non?
              </p>
            </div>
            <button className="bg-black text-2xl hover:bg-white hover:text-black duration-200 hover:border-black hover:border  transition-all ease-in-out text-white w-[50%] rounded-3xl px-3 py-3">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
