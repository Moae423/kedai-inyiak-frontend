import { ApiClient } from "@/lib/api";
import { BarangUpdateData } from "@/lib/validation/barang/schema";
import { AxiosError } from "axios";
import React from "react";
import { toast } from "sonner";

const useUpdateBarang = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const updateBarang = async (id: string, data: BarangUpdateData) => {
    try {
      setLoading(true);
      setError(null);
      const res = await ApiClient.put(`/kedai-inyiak/${id}`, data);
      toast.success("Barang berhasil diupdate");
      return res;
    } catch (error) {
      console.log(`Error : ${error}`);
      if (error && typeof error === "object" && "response" in error) {
        const axiosErr = error as AxiosError<{ message?: string }>;
        setError(
          axiosErr.response?.data?.message || "Gagal update  data barang"
        );
      } else if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Gagal update   data barang");
      }
    } finally {
      setLoading(false);
    }
  };
  return { loading, error, updateBarang };
};

export default useUpdateBarang;
