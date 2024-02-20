import AdminPage from "@/components/AdminPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resourcia^",
  description: "Generated by create next app",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
