"use server";

import { createProductOrder } from "@/utils/queries";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const handleCreateOrder = async (
  province: string,
  address: string,
  productId: string
) => {
  const url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
  const token = cookies().get("token");
  if (!token) redirect("/login?error=Please Login First");
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token?.value}`,
    },
    body: JSON.stringify({
      query: createProductOrder,
      variables: {
        productId,
        province,
        address,
      },
    }),
  });
  const responseJson = await response.json();
  if ("errors" in responseJson)
    redirect(`/?error=${responseJson.errors[0].message}`);

  redirect("/?success=Success Create Order");
};
