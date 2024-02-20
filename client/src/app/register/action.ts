"use server";

import { redirect } from "next/navigation";

export const handleRegister = async (formData: FormData) => {
  const url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
  const body = {
    email: formData.get("email"),
    fullName: formData.get("fullName"),
    password: formData.get("password"),
  };
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `mutation Register($inputRegister: RegisterInput!) {
        register(inputRegister: $inputRegister) {
          _id
          email
          password
          fullName
          role
          totalPoint
        }
      }`,
      variables: {
        inputRegister: body,
      },
    }),
  });
  console.log(await response.json());
  redirect("/login?success=Success Register Account");
};
