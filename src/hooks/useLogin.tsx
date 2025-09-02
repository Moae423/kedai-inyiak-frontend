import { LoginServices } from "@/features/auth/services";
import { setCookie } from "cookies-next";
import { useState } from "react";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);
      const data = await LoginServices(email, password);
      if (data.token) {
        setCookie("token", data.token, { maxAge: 60 * 60 * 24 * 30 });
      }
      return data;
    } catch (error: any | unknown) {
      console.log(error);
      setError(error.response?.data?.message || "Login gagal");
      throw error;
    } finally {
      setLoading(false);
    }
  };
  return {
    login,
    loading,
    error,
  };
};

export default useLogin;
