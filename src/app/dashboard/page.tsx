import React from "react";
import { GoPackage } from "react-icons/go";
const page = () => {
  return (
    <div className="flex items-center justify-center p-12">
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
  );
};

export default page;
