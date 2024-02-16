"use client";
import React, { useState, useEffect } from "react";
import Link from "../../../node_modules/next/link";
import { IoMdExit, IoMdLogIn } from "react-icons/io";
import { GrShop } from "react-icons/gr";
import { FaUser } from "react-icons/fa";
import NavMobile from "@/components/NavMobile";
import { RiLoginBoxFill } from "react-icons/ri";

// import { actionLogout } from "./actionLogout";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

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
          }`}>
          <div className="w-[30%] ">
            <Link
              href={"/"}
              className="text-4xl font-extrabold text-[#211C6A] tracking-tighter">
              Resourcia^
            </Link>
          </div>
          <div className="w-[40%] max-md:hidden  ">
            <ul className="flex font-[300] tracking-wide first-letter:uppercase text-lg   justify-between px-20">
              <Link className="first-letter:uppercase" href={"/"}>
                home
              </Link>
              <Link href={"/products"}>Product</Link>
              <Link href={"/donate"}>Donate</Link>
            </ul>
          </div>
          <div className=" w-[30%] max-md:hidden ">
            <div className="flex gap-9 text-end items-end justify-end px-20 ">
              <Link
                href={"/wishlist"}
                className="text-3xl flex  font-[300] justify-center items-center">
                <GrShop />
              </Link>
              <Link
                href={"/register"}
                className="text-3xl flex  font-[300] justify-center items-center">
                <FaUser />
              </Link>
              <Link
                href={"/login"}
                className="text-3xl flex  font-[300] justify-center items-center">
                <RiLoginBoxFill />
              </Link>
              <form>
                <button
                  className="text-3xl flex  font-[300] justify-center items-center"
                  type="submit">
                  <IoMdExit />
                </button>
              </form>
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
