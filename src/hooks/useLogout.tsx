import { LogoutServices } from "@/features/auth/services";
import { ApiClient } from "@/lib/api";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import React from "react";

const useLogout = () => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const logout = async () => {
    try {
      setLoading(true);
      deleteCookie("token");
      await LogoutServices();
      setTimeout(() => {
        router.push("/");
      }, 1000);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };
  return { logout, loading };
};

export default useLogout;
