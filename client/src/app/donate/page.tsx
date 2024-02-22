import { ServerProtected } from "@/components/ServerProtected";
import DonatePage from "./page-component";
import { cookies } from "next/headers";

const Page = () => {
  const userId = cookies().get("id");
  return (
    <>
      <ServerProtected>
        <DonatePage id={userId?.value} />
      </ServerProtected>
    </>
  );
};

export default Page;
