"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const handleLogout = async () => {
  if (cookies().get("token")) {
    cookies().delete("token");
    cookies().delete("id");
    redirect("/login?success=Success Logout");
  }
  redirect("/login?error=You haven't login yet");
};
