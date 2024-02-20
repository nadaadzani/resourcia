"use client";

import Dashboard from "@/components/Dashboard";
import FormAddPoints from "@/components/FormAddPoints";
import { Html5QrcodeScanner } from "html5-qrcode";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const [scanResult, setScanResult] = useState<string>("");

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        qrbox: {
          width: 500,
          height: 250,
        },
        fps: 5,
      },
      undefined
    );

    const success = (result: string) => {
      scanner.clear();
      setScanResult(result);
      // return redirect("/");
      // setTimeout(() => {}, 2000);
    };

    const error = (err: unknown) => {
      console.warn(err);
    };

    scanner.render(success, error);
    return () => {
      scanner.clear();
    };
  }, []);

  return (
    <>
      <Dashboard />
      <section className="flex w-full justify-between lg:pl-72 lg:pr-16 min-[320px]:pt-28 min-[320px]:px-6 min-[320px]:text-sm lg:pt-8 min-[320px]:justify-center">
        <div className="bg-gray-100 w-[28rem] mx-auto my-52 rounded-2xl">
          {scanResult ? (
            <>
              {/* Once it is scanned, the form/input that shows the donater point amount he/she gets will be displayed here */}
              {/* <div>
                Success read QR scan: <span>{scanResult}</span>
              </div> */}
              <FormAddPoints />
            </>
          ) : (
            <>
              <div id="reader"></div>
            </>
          )}
        </div>
        {/* <p>p</p> */}
      </section>
    </>
  );
};

export default Page;
