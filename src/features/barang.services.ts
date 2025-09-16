import { ApiClient } from "@/lib/api";
import { BarangFormData } from "@/lib/validation/barang/schema";

export const GetAllBarangServices = async () => {
  const res = await ApiClient.get("/kedai-inyiak");
  return res.data;
};

export const deleteBarangServices = async (id: string) => {
  const res = await ApiClient.delete(`/kedai-inyiak/${id}`);
  return res;
};

export const CreateBarangServices = async (dataBarang: BarangFormData) => {
  const res = await ApiClient.post("/kedai-inyiak", dataBarang);
  return res.data;
};

export const TotalBarangServices = async () => {
  const res = await ApiClient.get("/kedai-inyiak/barang/total");
  return res.data;
};
