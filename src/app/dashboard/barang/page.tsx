import AddData from "@/components/dashboard/Barang/AddData";
import ViewData from "@/components/dashboard/Barang/ViewData";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 min-h-screen p-12">
      <div className=" p-8 w-full border-1 border-black shadow-lg rounded-2xl">
        <div className="flex justify-between items-center gap-5 my-3">
          <h1 className="text-3xl font-bold">Data Barang</h1>
          <div className="flex items-center gap-3 ">
            <AddData />
          </div>
        </div>
        <div className="w-full">
          <ViewData />
        </div>
      </div>
    </div>
  );
};

export default page;
