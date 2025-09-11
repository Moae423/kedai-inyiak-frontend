"use client";
import CardTotal from "@/components/dashboard/cardTotal";
import TableBarang from "@/components/dashboard/TableBarang";
import useTotalUser from "@/hooks/Auth/user/useTotalUser";
import useTotalBarang from "@/hooks/Barang/useTotalBarang";
import React from "react";

const Page = () => {
  const {
    loading: LoadingBarang,
    data: DataBarang,
    error: ErrorBarang,
  } = useTotalBarang();

  const {
    loading: LoadingUser,
    data: DataUser,
    error: ErrorUser,
  } = useTotalUser();
  return (
    <div className=" flex flex-col gap-5 p-12 ">
      <div className="flex items-center justify-center gap-5">
        <CardTotal
          title="Total Jumlah Barang"
          loading={LoadingBarang}
          data={DataBarang}
          error={ErrorBarang}
        />
        <CardTotal
          loading={LoadingUser}
          data={DataUser}
          error={ErrorUser}
          title="Total Jumlah User"
        />
        <CardTotal title="Total Jumlah Value" data={45} />
      </div>
      <div className="flex items-center justify-center">
        <div className="w-full max-w-7xl p-6 shadow-lg rounded-2xl border bg-white">
          <div className="flex items-center justify-center mb-6">
            <h1 className="text-4xl md:text-5xl font-bold">Overview</h1>
          </div>
          <TableBarang />
        </div>
      </div>
    </div>
  );
};

export default Page;
