"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const ServerProtected = async ({
  children,
}: React.PropsWithChildren) => {
  const cookieStore = cookies();
  if (!cookieStore.get("token")) redirect("/login?error=Please Login First");
  return <>{children}</>;
};
