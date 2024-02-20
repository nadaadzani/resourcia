import Card from "@/components/Card";
import { fetchProducts } from "./action";
import Search from "./Search";
import { FilterComponent } from "@/components/FilterComponent";
import { FilterMobileComponent } from "@/components/FilterMobileComponent";
import { cookies } from "next/headers";
import { getUserById } from "@/utils/queries";

const page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;
  const filter =
    typeof searchParams.filter === "string" ? searchParams.filter : undefined;
  const products = await fetchProducts({ search, filter });
  const token = cookies().get("token");

  let user;
  if (token) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.value}`,
      },
      body: JSON.stringify({ query: getUserById }),
    });
    const responseJson = await response.json();
    user = responseJson.data.getUserByLoginInfo as { totalPoint: number };
  }
  return (
    <main className="min-h-screen max-md:px-5 pt-24 px-20">
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
            Shop and get rewards
          </p>
        </div>
      </div>
      <div className="pt-12 flex justify-between max-md:flex-col max-md:gap-10 ">
        <div className="w-[75%] max-md:w-full ">
          <FilterMobileComponent />
          <Search />
          {token && user && (
            <p className=" text-center my-4 text-2xl">
              Your Point :{" "}
              <span className=" text-green-600">{user.totalPoint}</span>
            </p>
          )}
          {products.length === 0 && (
            <div className="flex justify-center h-full items-center ">
              <h1 className="text-3xl   text-gray-600 text-center font-semibold">
                there is no such products
              </h1>
            </div>
          )}
          <div className="grid grid-cols-3 h-full max-md:grid-cols-2 gap-4 pt-4 pb-24">
            {products.map((prod, idx) => {
              return <Card key={idx} data={prod} />;
            })}
          </div>
        </div>
        <FilterComponent />
      </div>
    </main>
  );
};

export default page;
