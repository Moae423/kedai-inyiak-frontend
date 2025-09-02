import { ApiClient } from "@/lib/api";

export const LoginServices = async (email: string, password: string) => {
  const res = await ApiClient.post("/auth/login", { email, password });
  return res.data;
};
