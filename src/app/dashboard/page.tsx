"use client";
import CardTotal from "@/components/dashboard/cardTotal";
import TableBarang from "@/components/dashboard/TableBarang";
import useTotalUser from "@/hooks/Auth/user/useTotalUser";
import useTotalBarang from "@/hooks/Barang/useTotalBarang";
import React from "react";
import { LuPackage } from "react-icons/lu";
import { FaCircleUser } from "react-icons/fa6";
import { GiProfit } from "react-icons/gi";

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
      <div className="flex flex-col md:flex-row  items-center justify-center gap-5">
        <CardTotal
          icon={<LuPackage size={30} className="w-12 h-12 text-[#FFA500]" />}
          title="Total Jumlah Barang"
          loading={LoadingBarang}
          data={DataBarang}
          error={ErrorBarang}
        />
        <CardTotal
          icon={<FaCircleUser size={30} className="w-12 h-12 text-gray-400" />}
          loading={LoadingUser}
          data={DataUser}
          error={ErrorUser}
          title="Total Jumlah User"
        />
        <CardTotal
          title="Total Jumlah Value"
          data={45}
          icon={<GiProfit className="w-12 h-12 text-green-500" />}
        />
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
