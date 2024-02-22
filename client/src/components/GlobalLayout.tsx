"use client";

import { NextFont } from "next/dist/compiled/@next/font";
import AIChatButton from "./AIChatButton";
import { ClientFlashParams } from "./ClientFlashParams";
import Footer from "./footer";
import Nav from "./nav";
import { usePathname } from "next/navigation";

export default function GlobalLayout({
  children,
  DmSans,
}: {
  children: React.ReactNode;
  DmSans: NextFont;
}) {
  const pathname = usePathname();

  if (pathname.includes("/admin")) {
    return (
      <>
        <html lang="en">
          <body className={DmSans.className}>
            <ClientFlashParams />
            {children}
          </body>
        </html>
      </>
    );
  }

  return (
    <>
      <html lang="en">
        <body className={DmSans.className}>
          <ClientFlashParams />
          <Nav />
          {children}
          <Footer />
          <AIChatButton />
        </body>
      </html>
    </>
  );
}
