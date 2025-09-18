import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Edit } from "lucide-react";
import { FaEdit } from "react-icons/fa";
const EditData = () => {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline" className="hover:bg-blue-200">
            <Edit className="cursor-pointer  text-blue-500 hover:text-blue-700  " />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <FaEdit className="text-blue-500" />
              Edit Data Barang
            </DialogTitle>
            <DialogDescription>
              Isi form di bawah ini untuk mengedit barang.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name">Nama Barang</Label>
              <Input id="name" name="name" placeholder="Masukkan Nama Barang" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="harga">Harga</Label>
              <Input
                id="harga"
                name="harga"
                placeholder="Masukkan Harga Barang"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="stok">Stock</Label>
              <Input
                id="stok"
                name="stok"
                placeholder="Masukkan Stock Barang"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="tglMasuk">Tanggal Masuk</Label>
              <Input
                id="username-1"
                type="date"
                name="tglMasuk"
                placeholder="Masukkan Tanggal Masuk Barang"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="destructive">Cancel</Button>
            </DialogClose>
            <Button
              type="submit"
              variant={"default"}
              className="cursor-pointer hover:-translate-y-1 hover:bg-blue-200 text-white hover:text-black"
            >
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default EditData;
