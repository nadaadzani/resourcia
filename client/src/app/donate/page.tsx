"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from "@/components/QRgenerate";

const page = () => {
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
      <main className="min-h-screen  max-md:flex-col-reverse max-md:px-3 flex justify-between px-20 pt-32">
        <div className="w-[50%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15863.051724340203!2d106.64092014999999!3d-6.2948547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1707841926443!5m2!1sid!2sid"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="w-[45%] max-md:w-full">
          <div className="px-10 bg-[#1DE592]   transition-all duration-200 hover:ease-in-out  relative rounded-xl  flex flex-col gap-4 py-10">
            <h3 className="font-semibold tracking-tight text-2xl">Resourcia</h3>
            <p className="text-6xl font-semibold tracking-tight">
              Donate your food waste in 3 steps!
            </p>
            <Slider
              className="pt-4 tracking-tighter text-4xl font-semibold"
              {...settings}>
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
      <div className="flex justify-center flex-col gap-10 items-center ">
        <h1 className="text-7xl font-bold tracking-tighter">Scan to donate</h1>
        <App />
      </div>
    </>
  );
};

export default page;
