import { TotalBarangServices } from "@/features/barang.services";
import { AxiosError } from "axios";
import React from "react";

const useTotalBarang = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [data, setData] = React.useState<number>(0);
  const totalBarang = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await TotalBarangServices();
      setData(res.data);
    } catch (err) {
      console.log(`Error : ${err}`);
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
    totalBarang();
  }, []);
  return { loading, data, error, refetch: totalBarang };
};

export default useTotalBarang;
