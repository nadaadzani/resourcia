"use client"

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
            
// NavLink
const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  //framer motion variants
  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };
  return (
    <nav className="relative">
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer text-black">
        <GiHamburgerMenu className="w-8 h-8" />
      </div>
      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden "}
        className="w-4 h-4 rounded-full bg-[#34CCFF] fixed top-0 right-0"></motion.div>
      <motion.ul
        variants={ulVariants}
        initial="hidden"
        animate={isOpen ? "visible" : ""}
        className={`${
          isOpen ? "right-0" : "-right-full"
        } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}>
        <div
          onClick={() => setIsOpen(false)}
          className="cursor-pointer absolute top-8 text-2xl right-8">
          <IoMdClose className="w-8 text-white  h-8" />
        </div>

        <li className=" flex text-center flex-col gap-10 mb-8">
        <Link
            href={`/`}
            onClick={() => setIsOpen(false)}
            className="text-4xl cursor-pointer text-white font-semibold">
                Home
          </Link>
          <Link
            href={`/products`}
            onClick={() => setIsOpen(false)}
            className="text-4xl cursor-pointer text-white font-semibold">
                Product
          </Link>
          <Link
            href={`/donate`}
            onClick={() => setIsOpen(false)}
            className="text-4xl cursor-pointer text-white font-semibold">
                Donate
          </Link>
          <Link
            href={`/About`}
            onClick={() => setIsOpen(false)}
            className="text-4xl cursor-pointer text-white font-semibold">
                About
          </Link>
        </li>
      </motion.ul>
    </nav>
  );
};

export default NavMobile;
