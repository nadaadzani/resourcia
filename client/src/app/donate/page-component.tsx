"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from "@/components/QRgenerate";
import Map from "@/components/Map";

const DonatePage = ({ id }: { id: string | undefined }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <>
      <main className="min-h-screen  max-md:flex-col-reverse max-md:gap-10 max-md:px-3 flex justify-between px-20 pt-20 md:pt-32">
        <div className="w-[50%] max-md:w-full">
          <Map />
        </div>
        <div className="w-[45%]  max-md:w-full">
          <div className="px-10 bg-[#1DE592]   transition-all duration-200 hover:ease-in-out  relative rounded-xl  flex flex-col gap-4 py-10">
            <h3 className="font-semibold tracking-tight text-2xl">Resourcia</h3>
            <p className="text-6xl max-md:text-5xl font-semibold tracking-tight">
              Donate your food waste in 3 steps!
            </p>
            <Slider
              className="pt-4 tracking-tighter max-md:text-2xl text-4xl font-semibold"
              {...settings}
            >
              <p>Locate nearest collection points on map.</p>
              <p>Drop off food.</p>
              <p>Help fight hunger.</p>
            </Slider>
            <div>
              <button className="text-black pt-8 text-2xl hover:underline ">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </main>
      <hr className="mx-16 mt-12 border-t-2 max-[440px]:hidden" />
      <div className="flex max-md:pt-14 mt-12 justify-center flex-col gap-10 items-center ">
        <h1 className="text-7xl max-md:text-center max-md:text-5xl font-bold tracking-tighter">
          Scan to donate
        </h1>
        <App userId={id} />
      </div>
    </>
  );
};

export default DonatePage;
