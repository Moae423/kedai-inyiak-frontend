import AddData from "@/components/dashboard/Barang/AddData";
import ViewDataTable from "@/components/dashboard/Barang/ViewDataTable";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 min-h-screen">
      <div className="flex items-center gap-5">
        <h1 className="text-3xl font-bold">Data Barang</h1>
        <AddData />
      </div>
      <ViewDataTable />
    </div>
  );
};

export default page;
