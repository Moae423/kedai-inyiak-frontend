import { TotalUserServices } from "@/features/auth/services";
import { AxiosError } from "axios";
import React from "react";

const useTotalUser = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [data, setData] = React.useState<number>(0);
  const totalUser = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await TotalUserServices();
      setData(res.data);
    } catch (err) {
      console.log(`Error : ${err}`);
      if (err && typeof err === "object" && "response" in err) {
        const axiosErr = err as AxiosError<{ message?: string }>;
        setError(
          axiosErr.response?.data?.message || "Gagal mengambil data User"
        );
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Gagal mengambil data User");
      }
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    totalUser();
  }, []);
  return { loading, data, error, refetch: totalUser };
};

export default useTotalUser;
