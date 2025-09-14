import FormAdd from "@/components/dashboard/Barang/FormAdd";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center  min-h-screen">
      <h1 className="text-[57px] font-bold text-center my-3">
        Tambah Data Barang
      </h1>
      <FormAdd />
    </div>
  );
};

export default page;
