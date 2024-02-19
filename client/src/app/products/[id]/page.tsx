"use client";
import { FaStar } from "react-icons/fa6";
import { FaCoins } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getProductById } from "@/utils/queries";
import { ProductsModel } from "@/utils/type";
import { handleCreateOrder } from "./action";

const page = ({ params }: { params: { id: string } }) => {
  const [data, setData] = useState<ProductsModel>();
  const [province, setProvince] = useState<{ id: string; name: string }[]>([]);
  const [selected, setSelected] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const fetchProductId = async (id: string) => {
    const url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: getProductById,
        variables: {
          getProductByIdId: `${id}`,
        },
      }),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Error in server..");
    }

    setData(data.data.getProductById);
  };

  const fetchProvinces = async () => {
    const response = await fetch(
      "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json",
      { method: "GET" }
    );
    const province = (await response.json()) as { id: string; name: string }[];
    setProvince(province);
  };

  useEffect(() => {
    fetchProductId(params.id);
    fetchProvinces();
  }, []);

  return (
    <main className="min-h-screen pt-24 px-20">
      <div
        style={{
          backgroundImage: `url("https://i.pinimg.com/474x/2a/a4/52/2aa452455c658fc46cec0a80e6e08986.jpg")`,
          backgroundSize: "cover",
        }}
        className="w-full text-white max-md:py-2 py-5 max-md:text-black rounded-xl "
      >
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
            <h3 className="text-xl">{data?.category}</h3>
          </div>
          <h2 className="text-5xl tracking-tight pt-5">{data?.name} </h2>
          <div className="flex  text-3xl gap-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="flex gap-4 pt-5  ">
            <FaCoins className="text-yellow-500 text-5xl pt-1" />
            <p className="text-5xl font-semibold tracking-wider">
              {data?.price}
            </p>
          </div>
          <div className="flex flex-col gap-4 justify-between">
            <div className="flex gap-5 pt-5 flex-col ">
              <h1 className="font-[200] text-3xl">Description</h1>
              <p className="text-lg">{data?.description}</p>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="select1" className="font-[200] text-3xl">
                  Province
                </label>
                <select
                  id="select1"
                  className="text-lg border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
                  name="province"
                  defaultValue=""
                  onChange={(e) => {
                    setSelected(e.target.value);
                  }}
                >
                  <option value="" disabled>
                    Choose Province
                  </option>
                  {province.map((prov) => {
                    return <option value={prov.name}>{prov.name}</option>;
                  })}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="textInput" className="font-[200] text-3xl">
                  Address
                </label>
                <input
                  type="text"
                  id="textInput"
                  name="address"
                  className="text-lg border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
                  placeholder="Enter Address"
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </div>
              <button
                disabled={!selected || !address}
                className="bg-black text-2xl hover:bg-white hover:text-black duration-200 hover:border-black hover:border transition-all ease-in-out text-white w-[50%] rounded-lg px-3 py-3"
                onClick={() => handleCreateOrder(selected, address, params.id)}
              >
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
