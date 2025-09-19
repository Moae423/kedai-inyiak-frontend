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
import useUpdateBarang from "@/hooks/Barang/useUpdateBarang";
import { useForm } from "react-hook-form";
import {
  BarangUpdateData,
  BarangUpdateSchema,
} from "@/lib/validation/barang/schema";
import { zodResolver } from "@hookform/resolvers/zod";

interface EditDataProps {
  barang: BarangUpdateData;
  setBarangList: React.Dispatch<React.SetStateAction<BarangUpdateData[]>>;
}
const EditData = ({ barang, setBarangList }: EditDataProps) => {
  const { loading, error, updateBarang } = useUpdateBarang();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BarangUpdateData>({
    resolver: zodResolver(BarangUpdateSchema),
    defaultValues: barang,
  });
  return (
    <Dialog
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          reset(barang);
        }
      }}
    >
      <DialogTrigger asChild>
        <Button variant="outline" className="hover:bg-blue-200">
          <Edit className="cursor-pointer  text-blue-500 hover:text-blue-700  " />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form
          onSubmit={handleSubmit(async (data) => {
            const isoDate = new Date(data.tglMasuk).toISOString();
            const { id, ...updateData } = data;
            const finalData = { ...updateData, tglMasuk: isoDate };
            console.log("Data sent to API (without ID):", finalData);
            console.log("ID for URL path:", barang.id);
            await updateBarang(barang.id, finalData);
            setBarangList((prev) =>
              prev.map((item) =>
                item.id === barang.id ? { ...item, ...finalData } : item
              )
            );
            reset(finalData);
          })}
        >
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
            <Input readOnly disabled {...register("id")} />
            <div className="grid gap-3">
              <Label htmlFor="name">Nama Barang</Label>
              <Input
                id="name"
                placeholder="Masukkan Nama Barang"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-red-500">{errors.name?.message}</p>
              )}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="harga">Harga</Label>
              <Input
                id="harga"
                type="number"
                placeholder="Masukkan Harga Barang"
                {...register("harga", { valueAsNumber: true })}
              />
              {errors.harga && (
                <p className="text-red-500">{errors.harga?.message}</p>
              )}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="stok">Stock</Label>
              <Input
                id="stok"
                type="number"
                {...register("stok", { valueAsNumber: true })}
                placeholder="Masukkan Stock Barang"
              />
              {errors.stok && (
                <p className="text-red-500">{errors.stok?.message}</p>
              )}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="tglMasuk">Tanggal Masuk</Label>
              <Input
                id="username-1"
                type="date"
                {...register("tglMasuk")}
                placeholder="Masukkan Tanggal Masuk Barang"
              />
              {errors.tglMasuk && (
                <p className="text-red-500">{errors.tglMasuk?.message}</p>
              )}
            </div>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="destructive">Cancel</Button>
            </DialogClose>
            <Button
              type="submit"
              variant={"default"}
              className="cursor-pointer hover:-translate-y-1 hover:bg-blue-200 text-white hover:text-black"
            >
              {loading ? "Loading..." : "Save"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditData;
