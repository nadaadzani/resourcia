"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const handleLoginAdmin = async (formData: FormData) => {
  const url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
  const body = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `mutation AdminLogin($inputLogin: LoginInput!) {
        adminLogin(inputLogin: $inputLogin) {
          _id
          token
        }
      }`,
      variables: {
        inputLogin: body,
      },
    }),
  });
  const responseJson = await response.json();

  if ("errors" in responseJson)
    redirect(`/admin/login?error=${responseJson.errors[0].message}`);

  cookies().set("tokenAdmin", responseJson.data.adminLogin.token);

  redirect("/admin?success=Success Login");
};
