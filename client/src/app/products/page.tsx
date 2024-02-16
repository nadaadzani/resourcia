import Card from "@/components/Card";
import Pagination from "@/components/Pagination";
import Link from "next/link";

const page = () => {
  return (
    <main className="min-h-screen max-md:px-5 pt-24 px-20">
      <div
        style={{
          backgroundImage: `url("https://i.pinimg.com/474x/2a/a4/52/2aa452455c658fc46cec0a80e6e08986.jpg")`,
          backgroundSize: "cover",
        }}
        className="w-full text-white max-md:py-2 py-5 max-md:text-black rounded-xl ">
        <div className="py-7 px-10 max-md:py-2 max-md:px-5 flex flex-col max-md:gap-3 gap-6">
          <p className="text-2xl max-md:text-xl font-bold">Products</p>
          <p className="text-5xl max-md:text-3xl font-bold tracking-tighter">
            Shop and get rewards
          </p>
        </div>
      </div>
      <div className="pt-12 flex justify-between max-md:flex-col max-md:gap-10 ">
        <div className="w-[75%] max-md:w-full ">
          <div className="flex gap-4 md:hidden pb-10">
            <p className="font-bold text-xl">Filter</p>
            <button className="bg-[#ECB159] px-2 rounded-xl">gadget</button>
            <button className="bg-[#ECB159] px-2 rounded-xl">groceries</button>
            <button className="bg-gray-800 px-2 text-white rounded-xl">
              clothes
            </button>
          </div>
          <input
            className="px-5 py-3.5  w-full border border-gray-800 text-xl rounded-2xl border-1 "
            placeholder="Search here..."
            type="text"
          />
          <div className="grid grid-cols-3 max-md:grid-cols-2 gap-4 pt-4 pb-24">
            <Card />
            <Card />
            <Card /> <Card /> <Card />
            <Card />
            <Card />
          </div>
          <Pagination />
        </div>
        <div className="w-[25%] max-md:hidden  pl-24 flex flex-col gap-5 ">
          <h1 className="text-3xl font-bold">Filter</h1>
          <button className="bg-[#ECB159] w-[70%] px-2 py-3 text-xl rounded-2xl">
            Gadget
          </button>
          <button className="bg-[#ECB159] w-[70%]  px-2 py-3 text-xl rounded-2xl">
            Groceries
          </button>
          <button className="bg-gray-800 w-[70%]  px-2 py-3 text-xl text-white rounded-2xl">
            Clothes
          </button>
        </div>
      </div>
    </main>
  );
};

export default page;
