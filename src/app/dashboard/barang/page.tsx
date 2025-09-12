import React from "react";
import TableBarang from "@/components/dashboard/Barang/TableBarang";

const Barang = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-[57px] font-bold text-center my-3">Data Barang</h1>
      <TableBarang />
    </div>
  );
};

export default Barang;
