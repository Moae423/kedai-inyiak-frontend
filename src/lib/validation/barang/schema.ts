import { z } from "zod";

export const barangFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(20, { message: "Name must be less than 20 characters" }),
  harga: z.string().min(1, { message: "Harga is required" }),
  stok: z.string().min(1, { message: "Stok is required" }),
  tglMasuk: z.string().min(1, { message: "Tanggal Masuk is required" }),
});
export const barangApiSchema = z.object({
  name: z.string().min(1).max(20),
  harga: z.number().min(1),
  stok: z.number().min(1),
  tglMasuk: z.date(),
});
export type BarangFormData = z.infer<typeof barangFormSchema>;
export type BarangApiData = z.infer<typeof barangApiSchema>; // proper types
