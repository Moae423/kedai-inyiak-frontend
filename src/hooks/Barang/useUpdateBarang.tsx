import { updateBarangServices } from "@/features/barang.services";
import {
  BarangUpdateData,
  BarangUpdateWithoutId,
} from "@/lib/validation/barang/schema";
import { AxiosError } from "axios";
import React from "react";
import { toast } from "sonner";

const useUpdateBarang = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const updateBarang = async (
    id: string,
    dataBarang: BarangUpdateWithoutId
  ) => {
    try {
      setLoading(true);
      setError(null);
      toast.success("Barang berhasil diupdate");
      const res = await updateBarangServices(id, dataBarang);
      return res.data;
    } catch (error) {
      console.log(error);
      if (error && typeof error === "object" && "response" in error) {
        const axiosErr = error as AxiosError<{ message?: string }>;
        setError(
          axiosErr.response?.data?.message || "Gagal Mengedit data barang"
        );
      } else if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Gagal Mengedit data barang");
      }
    } finally {
      setLoading(false);
    }
  };
  return {
    updateBarang,
    loading,
    error,
  };
};

export default useUpdateBarang;
