import { AdminServerProtected } from "@/components/AdminServerProtected";
import AdminPage from "./page-component";

export default async function Home() {
  return (
    <AdminServerProtected>
      <AdminPage />
    </AdminServerProtected>
  );
}
