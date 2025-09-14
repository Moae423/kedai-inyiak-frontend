"use client";
import React from "react";
import TableBarang from "@/components/dashboard/Barang/TableBarang";
import FormDialogAdd from "@/components/dashboard/Barang/FormDialogAdd";
import useGetAllBarang from "@/hooks/Barang/useGetAllBarang";
import useAddBarang from "@/hooks/Barang/useAddBarang";

const Barang = () => {
  const {
    barangList: ListBarang,
    loading: LoadingList,
    error: ErrorList,
  } = useGetAllBarang();
  const {
    loading: LoadingBarang,
    error: ErrorBarang,
    addBarang: addBarang,
  } = useAddBarang();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-[57px] font-bold text-center my-3">Data Barang</h1>
      <FormDialogAdd
        loadingBarang={LoadingBarang}
        errorBarang={ErrorBarang}
        addBarang={addBarang}
      />
      <TableBarang
        listBarang={ListBarang}
        loadingList={LoadingList}
        errorList={ErrorList}
      />
    </div>
  );
};

export default Barang;
