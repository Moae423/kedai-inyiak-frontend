"use client";
import { ApiClient } from "@/lib/api";
import { useEffect, useState } from "react";

export const useUser = () => {
  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await ApiClient.get("/auth/check", {
          withCredentials: true,
        });
        if (res.data.success) {
          setUser(res.data.user);
        }
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  return { user, loading };
};
