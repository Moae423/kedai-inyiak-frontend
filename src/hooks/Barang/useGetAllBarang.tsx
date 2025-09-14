import { GetAllBarangServices } from "@/features/barang.services";
import { BarangFormData } from "@/lib/validation/barang/schema";
import { AxiosError } from "axios";
import React from "react";

const useGetAllBarang = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [barangList, setBarangList] = React.useState<BarangFormData[]>([]);
  const getAllBarang = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await GetAllBarangServices();
      setBarangList(res.data);
    } catch (err) {
      if (err && typeof err === "object" && "response" in err) {
        const axiosErr = err as AxiosError<{ message?: string }>;
        setError(
          axiosErr.response?.data?.message || "Gagal mengambil data barang"
        );
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Gagal mengambil data barang");
      }
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getAllBarang();
  }, []);
  return { barangList, loading, error, refetch: getAllBarang };
};

export default useGetAllBarang;
