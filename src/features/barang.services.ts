import { ApiClient } from "@/lib/api";

export const GetAllBarangServices = async () => {
  const res = await ApiClient.get("/kedai-inyiak");
  return res.data;
};

export const TotalBarangServices = async () => {
  const res = await ApiClient.get("/kedai-inyiak/barang/total");
  return res.data;
};
