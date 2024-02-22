"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Swal from "sweetalert2";

export const ClientFlashParams = () => {
  const router = useRouter();
  const pathname = usePathname();
  const search = useSearchParams();
  const error = search.get("error");
  const success = search.get("success");
  if (error) {
    Swal.fire({
      icon: "error",
      title: error,
    });
    // router.replace(pathname);
  }
  if (success) {
    Swal.fire({
      icon: "success",
      title: success,
    });
    router.replace(pathname);
  }
  return <></>;
};
