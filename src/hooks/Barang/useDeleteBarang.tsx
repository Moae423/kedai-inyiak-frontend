import { deleteBarangServices } from "@/features/barang.services";
import { AxiosError } from "axios";
import React from "react";
import { toast } from "sonner";
import useGetAllBarang from "./useGetAllBarang";

const useDeleteBarang = (onDeleteSuccess?: (id: string) => void) => {
  const { refetch, setBarangList } = useGetAllBarang();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const deleteBarang = async (id: string) => {
    try {
      setLoading(true);
      setError(null);
      await deleteBarangServices(id);
      toast.success("Barang berhasil dihapus");
      if (onDeleteSuccess) onDeleteSuccess(id);
    } catch (err) {
      if (err && typeof err === "object" && "response" in err) {
        const axiosErr = err as AxiosError<{ message?: string }>;
        setError(axiosErr.response?.data?.message || "Gagal menghapus barang");
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Gagal menghapus barang");
      }
      toast.error("Gagal menghapus barang");
    } finally {
      const timeLoading = setTimeout(() => {
        setLoading(false);
      }, 1000);
      return () => clearTimeout(timeLoading);
    }
  };
  const handleDeleteBarang = async (e: React.FormEvent, id: string) => {
    try {
      e.preventDefault();
      setBarangList((prev) => prev.filter((item) => item.id !== id));
      await deleteBarangServices(id);
      // refetch();
    } catch (error) {
      console.log(error);
      refetch();
    }
  };
  return { loading, error, deleteBarang, handleDeleteBarang };
};

export default useDeleteBarang;
