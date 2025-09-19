"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import PaginationData from "./pagination/PaginationData";
import useGetAllBarang from "@/hooks/Barang/useGetAllBarang";
import { Trash2 } from "lucide-react";
import { deleteBarangServices } from "@/features/barang.services";
import { Button } from "@/components/ui/button";
import EditData from "./EditData";

const ViewData = () => {
  const { barangList, setBarangList, loading, error, refetch } =
    useGetAllBarang();
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(barangList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = barangList.slice(startIndex, endIndex);

  // Delete
  const handleDeleteBarang = async (e: React.FormEvent, id: string) => {
    try {
      e.preventDefault();
      setBarangList((prev) => prev.filter((item) => item.id !== id));
      await deleteBarangServices(id);
      // refetch();
    } catch (error) {
      console.log(error);
      refetch();
    }
  };
  // Delete
  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  return (
    <div className="overflow-hidden rounded-lg border shadow p-8">
      <Table className="py-3">
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
          {currentData.slice(0, 10).map((item, index) => (
            <TableRow key={item.id} className="text-center">
              <TableCell className="font-medium my-3">{index + 1}</TableCell>
              <TableCell className="text-center">
                {item.name.toLocaleUpperCase()}
              </TableCell>
              <TableCell>Rp{item.harga.toLocaleString("id-ID")}</TableCell>
              <TableCell>{item.stok}</TableCell>
              <TableCell>{item.tglMasuk.split("T")[0]}</TableCell>

              <TableCell>
                <EditData barang={item} setBarangList={setBarangList} />
              </TableCell>
              <TableCell>
                <Button
                  variant={"outline"}
                  onClick={(e) => handleDeleteBarang(e, item.id)}
                  className="hover:bg-red-100 rounded-[5px]  transition-colors duration-150 cursor-pointer"
                >
                  <Trash2
                    size={20}
                    className="cursor-pointer w  text-red-500 hover:text-red-700  "
                  />
                </Button>
              </TableCell>
            </TableRow>
          ))}
          {Array.from({ length: itemsPerPage - currentData.length }).map(
            (_, i) => (
              <TableRow key={`empty-${i}`} className="h-10">
                <TableCell colSpan={7}></TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
      <div className="text-center my-3 ">
        <Button onClick={refetch}>Refresh</Button>
      </div>
      <div className="">
        <PaginationData
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};

export default ViewData;
