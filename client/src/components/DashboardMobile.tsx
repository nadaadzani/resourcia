"use client";

import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { handleAdminLogout } from "./actionLogout";

export default function DashboardMobile() {
  const [options, setOptions] = useState(false);

  // console.log(`${options}`);

  return (
    <>
      <GiHamburgerMenu
        size={36}
        onClick={() => setOptions(true)}
        className={options ? "hidden" : "cursor-pointer"}
      />

      {options && (
        <>
          <IoMdClose
            size={36}
            onClick={() => setOptions(false)}
            className="cursor-pointer"
          />
          <nav
            className={
              options
                ? "absolute top-24 left-0 w-full bg-rose-900 z-1 transition-opacity duration-500 text-white h-auto opacity-100"
                : "absolute top-24 left-0 w-full bg-rose-900 z-1 transition-opacity duration-500 text-white h-auto opacity-0"
            }
          >
            <ul className="">
              <li className="flex flex-col gap-2">
                <Link
                  href={"/"}
                  onClick={() => setOptions(false)}
                  className="text-xl px-3 pb-2 pt-2"
                >
                  Home
                </Link>
                <Link href={"/"} className="text-xl px-3 pb-2">
                  Order
                </Link>
                <Link href={"/"} className="text-xl px-3 pb-2">
                  Statistics
                </Link>
                <Link href={"/scan"} className="text-xl px-3 pb-2">
                  QR Code
                </Link>
                <form
                  action={() => handleAdminLogout()}
                  className="text-xl px-3 pb-2"
                >
                  <button type="submit">Log out</button>
                </form>
              </li>
            </ul>
          </nav>
        </>
      )}
    </>
  );
}
