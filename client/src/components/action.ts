"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const url = process.env.NEXT_PUBLIC_API_URL as string;
export const addPickupOrder = async (
  lat: number | undefined,
  lng: number | undefined
) => {
  const token = cookies().get("token");
  if (!token?.value) redirect("/login");
  //   console.log(token);

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token?.value}`,
    },
    body: JSON.stringify({
      query: `mutation CreatePickupOrder($lat: String!, $lng: String!) {
        createPickupOrder(lat: $lat, lng: $lng) {
          _id
          userId
          lat
          lng
          status
          createdAt
        }
      }`,
      variables: {
        lat: lat?.toString(),
        lng: lng?.toString(),
      },
    }),
  });
  redirect("/");
};
