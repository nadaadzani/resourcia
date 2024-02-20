import { AdminServerProtected } from "@/components/AdminServerProtected";
import Dashboard from "@/components/Dashboard";
import PickupTableData from "@/components/PickupTableData";
import TableData from "@/components/TableData";
import { getPickupOrder, getProductsOrder } from "@/utils/queries";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { BiStats } from "react-icons/bi";
import { FaCheck } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

const url = process.env.NEXT_PUBLIC_API_URL as string;

export default async function Home() {
  const token = cookies().get("tokenAdmin");
  if (!token) redirect("/login?error=Please Login First");

  //PRODUCT ORDER
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.value}`,
    },
    body: JSON.stringify({
      query: getProductsOrder,
    }),
  });
  const responseJson = await response.json();
  const productOrder = responseJson.data.getProductOrder as {
    _id: string;
    userId: string;
    productId: string;
    product: { name: string };
    province: string;
    address: string;
    status: string;
    createdAt: string;
  }[];
  // PRODUCT ORDER END

  // PICKUP ORDER
  const responsePickup = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.value}`,
    },
    body: JSON.stringify({
      query: getPickupOrder,
    }),
  });

  const responsePickupJson = await responsePickup.json();

  const orderPickup = responsePickupJson.data.getPickupOrder as {
    _id: string;
    lat: string;
    lng: string;
    status: string;
    createdAt: string;
  }[];
  // PICKUP ORDER END

  let processed = 0;
  let completed = 0;
  let incomplete = 0;

  productOrder.forEach((el) => {
    processed++;
    if (el.status === "Complete") {
      completed++;
    } else {
      incomplete++;
    }
  });
  orderPickup.forEach((el) => {
    processed++;
    if (el.status === "Complete") {
      completed++;
    } else {
      incomplete++;
    }
  });
  return (
    <>
      <AdminServerProtected>
        <Dashboard />
        <main className="">
          <div className="flex w-full lg:justify-between lg:pl-72 lg:pr-16 min-[320px]:pt-28 min-[320px]:px-6 min-[320px]:text-sm lg:pt-8 min-[320px]:justify-center">
            <h1 className="font-semibold text-2xl min-[320px]:text-xl">
              Welcome, Admin
            </h1>
            <div className="lg:flex lg:items-center min-[320px]:hidden ">
              Filter:
              <select
                name="date"
                id=""
                className="ml-2 pl-2 rounded-lg border border-black h-8"
              >
                <option value="feb">February 2024</option>
                <option value="mar">March 2024</option>
                <option value="apr">April 2024</option>
              </select>
            </div>
          </div>

          <div className="w-full min-h-screen bg-gray-200 lg:mt-8 min-[320px]:mt-4">
            {/* Every "outer" container in here must have pl-72 pr-16 for LG media query!!*/}
            <section className="flex flex-col lg:pl-72 lg:pr-16 pt-4 gap-2 min-[320px]:px-6">
              <h1 className="font-semibold text-xl min-[320px]:text-center lg:text-left">
                Summary
              </h1>

              <div className="lg:flex lg:flex-row lg:gap-6 min-[320px]:flex min-[320px]:flex-col min-[320px]:items-center min-[320px]:gap-3 min-[320px]:mt-2">
                <div className="lg:w-64 lg:h-24 lg:bg-white rounded-xl lg:p-4 lg:flex lg:items-center lg:gap-2 min-[320px]:w-full min-[320px]:flex min-[320px]:bg-white min-[320px]:items-center min-[320px]:h-24 min-[320px]:p-4">
                  <div className="bg-black p-1 rounded-lg text-white">
                    <BiStats size={46} />
                  </div>
                  <div className="ml-2">
                    <p className="font-bold text-xl h-6">{processed}</p>
                    <h5 className="text-gray-500">Processed orders</h5>
                  </div>
                </div>
                <div className="lg:w-64 lg:h-24 lg:bg-white rounded-xl lg:p-4 lg:flex lg:items-center lg:gap-2 min-[320px]:w-full min-[320px]:flex min-[320px]:bg-white min-[320px]:items-center min-[320px]:h-24 min-[320px]:p-4">
                  <div className="bg-green-600 p-1 rounded-lg text-white">
                    <FaCheck size={36} />
                  </div>
                  <div className="ml-2">
                    <p className="font-bold text-xl h-6">{completed}</p>
                    <h5 className="text-gray-500">Completed orders</h5>
                  </div>
                </div>
                <div className="lg:w-64 lg:h-24 lg:bg-white rounded-xl lg:p-4 lg:flex lg:items-center lg:gap-2 min-[320px]:w-full min-[320px]:flex min-[320px]:bg-white min-[320px]:items-center min-[320px]:h-24 min-[320px]:p-4">
                  <div className="bg-red-600 p-2 rounded-lg text-white">
                    <ImCross size={28} />
                  </div>
                  <div className="ml-2">
                    <p className="font-bold text-xl h-6">{incomplete}</p>
                    <h5 className="text-gray-500">Incomplete orders</h5>
                  </div>
                </div>
              </div>
            </section>

            {/* --- */}

            <section className="flex lg:flex-row lg:pl-72 lg:pr-16 pt-8 gap-8 min-[320px]:flex-col">
              <div className="flex flex-col w-1/2 min-[320px]:w-[90%] min-[320px]:mx-auto">
                <h1 className="font-semibold text-xl">Product Orders</h1>
                <div className="w-full h-80 bg-white rounded-xl mt-4">
                  <table className="table-fixed mt-2 text-center lg:w-full min-[320px]:w-full">
                    <thead className="border-b-2 border-gray-300 rounded-xl border-spacing-8 ">
                      <tr className="h-12 w-24 lg:w-full">
                        <th className="lg:px-6 min-[320px]:px-2 min-[320px]:text-sm">
                          Order ID
                        </th>
                        <th className="lg:px-6 min-[320px]:px-2 min-[320px]:text-sm">
                          Province
                        </th>
                        <th className="lg:px-6 min-[320px]:px-2 min-[320px]:text-sm">
                          Address
                        </th>
                        <th className="lg:px-6 min-[320px]:px-2 min-[320px]:text-sm">
                          Created
                        </th>
                        <th className="lg:px-0 min-[320px]:px-2 min-[320px]:text-sm">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <TableData order={productOrder} />
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="flex flex-col w-1/2 min-[320px]:w-[90%] min-[320px]:mx-auto">
                <h1 className="font-semibold text-xl">Pickup Orders</h1>
                <div className="w-full h-80 bg-white rounded-xl mt-4">
                  <table className="table-fixed mt-2 text-center lg:w-full min-[320px]:w-full">
                    <thead className="border-b-2 border-gray-300 rounded-xl border-spacing-8">
                      <tr className="h-12 w-24 lg:w-full">
                        <th className="lg:px-6 min-[320px]:px-2 min-[320px]:text-sm">
                          Order ID
                        </th>
                        <th className="lg:px-6 min-[320px]:px-2 min-[320px]:text-sm">
                          Location
                        </th>
                        <th className="lg:px-6 min-[320px]:px-2 min-[320px]:text-sm">
                          Created
                        </th>
                        <th className="lg:px-6 min-[320px]:px-2 min-[320px]:text-sm">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <PickupTableData order={orderPickup} />
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* <section className="pl-72 pr-16">
            <QrImage />
          </section> */}
          </div>
        </main>
      </AdminServerProtected>
    </>
  );
}
