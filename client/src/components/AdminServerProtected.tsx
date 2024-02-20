import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const AdminServerProtected = ({ children }: React.PropsWithChildren) => {
  const adminToken = cookies().get("tokenAdmin");
  if (!adminToken) redirect("/admin/login");

  return <>{children}</>;
};
