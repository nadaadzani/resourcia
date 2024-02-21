import Link from "next/link";
import { handleLogin } from "./action";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LoginButton from "@/components/LoginButton";

const page = () => {
  const token = cookies().get("token");
  if (token) redirect("/");
  return (
    <>
      <main className="flex md:pt-20 max-md:flex-col  min-h-screen">
        <div className="w-[45%] max-md:w-full  bg-[#F1F4F7]">
          <div className="flex flex-col  gap-5 max-md:px-6 px-20 pt-[150px] max-md:pt-32 ">
            <p className="text-5xl tracking-tight font-bold">Login</p>
            <p className="font-[300] text-xl">Welcome again to our app!</p>
            <form
              action={handleLogin}
              className="flex pt-5 flex-col max-md:gap-8 gap-6"
            >
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  placeholder="email"
                  required
                  name="email"
                  className="peer h-full w-full border-b border-gray-800 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-800 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                />
                <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Email
                </label>
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  placeholder="password"
                  name="password"
                  type="password"
                  className="peer h-full w-full border-b border-gray-800 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                />
                <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Password
                </label>
              </div>
              <div className=" flex max-md:justify-center max-md:items-center pt-10">
                <LoginButton />
              </div>
            </form>
            <div className="pb-20 text-lg max-md:text-center pt-10">
              Dont have account yet?{" "}
              <Link className="underline text-blue-600" href={"/register"}>
                Register
              </Link>{" "}
              Here
            </div>
          </div>
        </div>
        <div className="w-[55%] max-md:w-full bg-gray-200 ">
          <img
            className="object-cover max-md:h-[200px] h-[750px] w-full relative"
            src="https://i.pinimg.com/564x/8b/d5/22/8bd522c97e8fa5e4ad22a0715fe3ada6.jpg"
          />
          <div className="px-10 max-md:hidden bg-[#FCE354] absolute h-[250px] z-4 top-[500px] w-[470px] right-20 hover:scale-95 transition-all duration-200 hover:ease-in-out   rounded-xl  flex flex-col gap-4 py-10">
            <h3 className="font-semibold tracking-tight text-2xl">Resourcia</h3>
            <p className="text-5xl font-semibold tracking-tight">
              Shop for a Better World!
            </p>
          </div>
          <div className="px-10 max-md:hidden bg-[#34CCFF] absolute h-[250px] top-[300px] w-[500px] translate-x-7 hover:scale-95 transition-all duration-200 hover:ease-in-out   rounded-xl  flex flex-col gap-4 py-10">
            <h3 className="font-semibold tracking-tight text-2xl">Resourcia</h3>
            <p className="text-5xl font-semibold tracking-tight">
              Shop for a Better World!
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
