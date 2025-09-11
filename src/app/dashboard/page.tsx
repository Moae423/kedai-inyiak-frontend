"use client";
import TableBarang from "@/components/dashboard/TableBarang";
import useTotalBarang from "@/hooks/Barang/useTotalBarang";
import React from "react";
import { GoPackage } from "react-icons/go";

const Page = () => {
  const { loading, data, error } = useTotalBarang();
  return (
    <div className=" flex flex-col gap-5 p-12 ">
      <div className="flex items-center justify-center gap-5">
        <div className="w-[25rem] h-full bg-gray-50 shadow-md border-2 p-4 rounded-2xl">
          <div className="flex items-center gap-3">
            <GoPackage className="w-12 h-12" />
            <div className="flex flex-col">
              <h1 className="text-[24px] leading-[32px] font-bold ">
                {loading ? "Loading..." : error ? "Error" : data}
              </h1>
              <p className="text-[18px] leadieng-[24px] text-gray-500">
                Total Jumlah Barang
              </p>
            </div>
          </div>
        </div>
        <div className="w-[25rem] h-full bg-gray-50 shadow-md border-2 p-4 rounded-2xl">
          <div className="flex items-center gap-3">
            <GoPackage className="w-12 h-12" />
            <div className="flex flex-col">
              <h1 className="text-[24px] leading-[32px] font-bold ">12,434</h1>
              <p className="text-[18px] leadieng-[24px] text-gray-500">
                Total Jumlah Barang
              </p>
            </div>
          </div>
        </div>
        <div className="w-[25rem] h-full bg-gray-50 shadow-md border-2 p-4 rounded-2xl">
          <div className="flex items-center gap-3">
            <GoPackage className="w-12 h-12" />
            <div className="flex flex-col">
              <h1 className="text-[24px] leading-[32px] font-bold ">12,434</h1>
              <p className="text-[18px] leadieng-[24px] text-gray-500">
                Total Jumlah Barang
              </p>
            </div>
          </div>
        </div>
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
