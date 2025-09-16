import { GetAllBarangServices } from "@/features/barang.services";
import { BarangListData } from "@/lib/validation/barang/schema";
import { AxiosError } from "axios";
import React from "react";

const useGetAllBarang = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [barangList, setBarangList] = React.useState<BarangListData[]>([]);

  // pagination
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemPerPage = 10;
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const totalPages = Math.ceil(barangList.length / itemPerPage);
  const currentData = barangList.slice(startIndex, endIndex);

  const getAllBarang = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await GetAllBarangServices();
      setBarangList(res.data);
      setCurrentPage(1); // reset page biar langsung lihat data terbaru
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
    getAllBarang(); // langsung fetch tanpa delay
  }, []);

  return {
    barangList,
    setBarangList,
    loading,
    error,
    currentData,
    currentPage,
    totalPages,
    onPageChange: setCurrentPage,
    refetch: getAllBarang,
  };
};

export default useGetAllBarang;
