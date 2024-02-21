"use client";

import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { IoMdExit, IoMdLogIn } from "react-icons/io";
import { GrShop } from "react-icons/gr";
import { FaUser } from "react-icons/fa";
import NavMobile from "@/components/NavMobile";
import { handleLogout } from "./actionLogout";
import { useAuth } from "@/store/useAuth";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  const isLoggedIn = useAuth((state) => state.isLoggedIn);
  const logout = useAuth((state) => state.logout);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <main>
        <nav
          className={`flex px-20 z-20 max-md:px-5 fixed transition duration-300 w-full justify-between items-center py-5 ${
            scrolled
              ? "bg-white text-gray-900  border border-gray-800 border-1"
              : "bg-transparent text-black"
          }`}
        >
          <div className="w-[30%] ">
            <Link
              href={"/"}
              className="text-4xl font-extrabold text-[#211C6A] tracking-tighter"
            >
              Resourcia^
            </Link>
          </div>
          <div className="w-[40%] max-md:hidden">
            <ul className="flex font-[300] tracking-wide first-letter:uppercase text-lg justify-between px-20">
              <Link
                className="first-letter:uppercase hover:underline transition-all duration-200 hover:ease-in-out"
                href={"/"}
              >
                home
              </Link>
              <Link
                href={"/donate"}
                className="hover:underline transition-all duration-200 hover:ease-in-out"
              >
                Donate
              </Link>
              <Link
                href={"/products"}
                className="hover:underline transition-all duration-200 hover:ease-in-out"
              >
                Redeem
              </Link>
            </ul>
          </div>
          <div className=" w-[30%] max-md:hidden ">
            <div className="flex gap-9 text-end items-end justify-end px-20 ">
              <Link
                href={"/order"}
                className="text-3xl flex  font-[300] justify-center items-center"
              >
                <GrShop />
              </Link>
              {isLoggedIn ? (
                <>
                  <form
                    action={() => {
                      handleLogout(), logout();
                    }}
                  >
                    <button
                      className="text-3xl flex  font-[300] justify-center items-center"
                      type="submit"
                    >
                      <IoMdExit />
                    </button>
                  </form>
                </>
              ) : (
                <>
                  <Link
                    href={"/login"}
                    className="text-3xl flex  font-[300] justify-center items-center"
                  >
                    <FaUser />
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="md:hidden text-black text-4xl">
            <NavMobile />
          </div>
        </nav>
      </main>
    </>
  );
};

export default Nav;
