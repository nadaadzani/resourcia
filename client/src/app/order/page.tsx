import { getProductsOrder } from "@/utils/queries";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const url = process.env.NEXT_PUBLIC_API_URL as string;

const Page = async () => {
  const token = cookies().get("token");
  if (!token) redirect("/login?error=Please Login First");

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
    province: string;
    address: string;
    status: string;
    createdAt: string;
  }[];
  console.log(productOrder);

  return (
    <>
      <main className="min-h-full pb-40 max-md:flex-col-reverse max-md:px-3 flex px-20 pt-32 justify-between">
        <div className=" w-2/3">
          <h2 className="text-xl font-bold mb-4">Product Order</h2>
          <div className="overflow-x-auto w-full">
            <table className="table-auto border-collapse border w-full">
              <thead>
                <tr>
                  <th className="border px-4 py-2">OrderID</th>
                  <th className="border px-4 py-2">Product</th>
                  <th className="border px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Data 1</td>
                  <td className="border px-4 py-2">Data 2</td>
                  <td className="border px-4 py-2">Data 3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className=" w-1/3 ml-8">
          <h2 className="text-xl font-bold mb-4">Pickup Order</h2>
          <div className="overflow-x-auto w-full">
            <table className="table-auto border-collapse border w-full">
              <thead>
                <tr>
                  <th className="border px-4 py-2">OrderID</th>
                  <th className="border px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Data A</td>
                  <td className="border px-4 py-2">Data B</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
};
export default Page;
