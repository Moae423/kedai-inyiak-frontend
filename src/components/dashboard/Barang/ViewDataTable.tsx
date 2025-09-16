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
import PaginationData from "./PaginationData";
import { Edit2Icon, Trash2Icon } from "lucide-react";
import useDeleteBarang from "@/hooks/Barang/useDeleteBarang";
import { Button } from "@/components/ui/button";
const ViewDataTable = () => {
  const { barangList, setBarangList, refetch, loading, error } =
    useGetAllBarang();
  const { deleteBarang } = useDeleteBarang((id) => {
    setBarangList((prev) => prev.filter((item) => item.id !== id));
  });
  if (loading) {
    <p>Loading...</p>;
  }
  if (error) return <p className="text-red-500">{error}</p>;
  return (
    <div className="w-full max-w-7xl overflow-hidden  rounded-lg border shadow p-3">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">No.</TableHead>
            <TableHead className="text-center">Nama Barang</TableHead>
            <TableHead className="text-center">Harga Barang</TableHead>
            <TableHead className="text-center">Stock</TableHead>
            <TableHead className="text-center">Tanggal Masuk</TableHead>
            <TableHead className="text-center" colSpan={2}>
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {barangList.slice(0, 10).map((item, index) => (
            <TableRow key={item.id} className="text-center">
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.harga.toLocaleString("id-ID")}</TableCell>
              <TableCell>{item.stok}</TableCell>
              <TableCell>{item.tglMasuk.split("T")[0]}</TableCell>
              <TableCell>
                <Edit2Icon className="cursor-pointer" />
              </TableCell>
              <TableCell>
                <Button onClick={() => deleteBarang(item.id)}>
                  <Trash2Icon className="cursor-pointer" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button onClick={() => refetch()}>Refresh</Button>
      {/* Pagination */}
      <PaginationData />
      {/* Pagination */}
    </div>
  );
};

export default ViewDataTable;
