"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useGetAllBarang from "@/hooks/Barang/useGetAllBarang";
const TableBarang = () => {
  const { data, loading, error } = useGetAllBarang();
  if (loading) {
    <p>Loading...</p>;
  }
  if (error) return <p className="text-red-500">{error}</p>;
  return (
    <div className="overflow-hidden  rounded-lg border shadow p-3">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">No.</TableHead>
            <TableHead className="text-center">Nama Barang</TableHead>
            <TableHead className="text-center">Harga Barang</TableHead>
            <TableHead className="text-center">Stock</TableHead>
            <TableHead className="text-center">Tanggal Masuk</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.slice(0, 5).map((item, index) => (
            <TableRow key={item.id} className="text-center">
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.harga}</TableCell>
              <TableCell>{item.stok}</TableCell>
              <TableCell>{item.tglMasuk.split("T")[0]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableBarang;
