import { ApiClient } from "@/lib/api";
import { RegisterFormData } from "@/lib/validation/schema";
export const LoginServices = async (email: string, password: string) => {
  const res = await ApiClient.post("/auth/login", { email, password });
  return res.data;
};

export const RegisterServices = async (
  dataRegister: RegisterFormData
): Promise<RegisterFormData> => {
  const res = await ApiClient.post<RegisterFormData>(
    "/auth/register",
    dataRegister
  );
  return res.data;
};

export const LogoutServices = async () => {
  const res = await ApiClient.post("/auth/logout");
  return res.data;
};
