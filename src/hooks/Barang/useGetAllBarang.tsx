import { GetAllBarangServices } from "@/features/barang.services";
import { Barang } from "@/types/Barang";
import { AxiosError } from "axios";
import React from "react";

const useGetAllBarang = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [data, setData] = React.useState<Barang[]>([]);
  const getAllBarang = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await GetAllBarangServices();
      setData(res.data);
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
  return { data, loading, error, refetch: getAllBarang };
};

export default useGetAllBarang;
