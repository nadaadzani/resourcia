"use client";

import { useAuth } from "@/store/useAuth";

export default function LoginButton() {
  const login = useAuth((state) => state.login);

  return (
    <>
      <button
        onClick={login}
        type="submit"
        className="text-black w-[30%] max-md:w-full hover:text-white hover:bg-black duration-200 transition-all hover:ease-in-out text-lg font-bold py-3 px-7 rounded-full bg-[#F1F4F7] border border-black"
      >
        Login
      </button>
    </>
  );
}
