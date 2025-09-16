import { deleteBarangServices } from "@/features/barang.services";
import { AxiosError } from "axios";
import React from "react";
import { toast } from "sonner";

const useDeleteBarang = (onDeleteSuccess?: (id: string) => void) => {
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
  return { loading, error, deleteBarang };
};

export default useDeleteBarang;
