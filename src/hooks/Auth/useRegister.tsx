import { RegisterServices } from "@/features/auth/services";
import { RegisterFormData } from "@/lib/validation/schema";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const useRegister = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const router = useRouter();

  const register = async (dataRegister: RegisterFormData) => {
    try {
      setLoading(true);
      setError(null);
      const data = await RegisterServices(dataRegister);
      toast.success("Register Berhasil");
      setTimeout(() => {
        router.push("/");
      }, 800);
      return data;
    } catch (err: unknown) {
      console.log(err);
      if (err && typeof err === "object" && "response" in err) {
        const axiosErr = err as AxiosError<{ message?: string }>;
        setError(axiosErr.response?.data?.message || "Register Gagal");
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Register Gagal");
      }
      toast.error("Register Gagal");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 800);
    }
  };
  const onSubmit = async (data: RegisterFormData) => {
    try {
      await register(data);
    } catch (err) {
      console.log(err);
    }
  };
  return { loading, error, onSubmit };
};

export default useRegister;
