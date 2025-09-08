import { LoginServices } from "@/features/auth/services";
import { LoginFormData } from "@/lib/validation/schema";
import { AxiosError } from "axios";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);
      const data = await LoginServices(email, password);
      if (data.token) {
        setCookie("token", data.token, { maxAge: 60 * 60 * 24 * 30 });
      }
      return data;
    } catch (err: unknown) {
      if (err && typeof err === "object" && "response" in err) {
        const axiosErr = err as AxiosError<{ message?: string }>;
        setError(axiosErr.response?.data?.message || "Login gagal");
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Login gagal");
      }
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 800);
    }
  };
  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data.email, data.password);
      setTimeout(() => {
        toast.success("Login Berhasil");
        router.push("/dashboard");
      }, 800);
    } catch (error) {
      toast.error("Gagal Login");
      console.log(error);
    }
  };

  return {
    onSubmit,
    loading,
    error,
  };
};

export default useLogin;
