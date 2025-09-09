import { ApiClient } from "@/lib/api";

export const GetAllBarangServices = async () => {
  const res = await ApiClient.get("/kedai-inyiak");
  return res.data;
};
