import { CreateBarangServices } from "@/features/barang.services";
import { BarangFormData } from "@/lib/validation/barang/schema";
import { AxiosError } from "axios";
import React from "react";
import { toast } from "sonner";

const useAddBarang = (onSuccess?: (newBarang: BarangFormData) => void) => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const addBarang = async (data: BarangFormData) => {
    try {
      console.log(`testing`);
      setLoading(true);
      setError(null);
      const response = await CreateBarangServices(data);
      const newBarang = response.data;
      if (onSuccess) {
        onSuccess(newBarang);
      }
      toast.success("Barang berhasil ditambahkan");
      return { success: true, data: response }; // Return success indicator
    } catch (err) {
      setError(`Failed to add barang. Please try again. ${err}`);

      if (err && typeof err === "object" && "response" in err) {
        const axiosErr = err as AxiosError<{ message?: string }>;
        setError(
          axiosErr.response?.data?.message || "Gagal menambahkan barang"
        );
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Error 500: Server Error");
      }
      toast.error("Gagal menambahkan barang");
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, addBarang };
};

export default useAddBarang;
