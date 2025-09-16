import { z } from "zod";

export const barangFormSchema = z.object({
  id: z.uuid().optional(),
  name: z.string().min(1, { message: "Name is required" }),
  harga: z.string().min(1, { message: "Harga is required" }),
  stok: z.string().min(1, { message: "Stok is required" }),
  tglMasuk: z.string().min(1, { message: "Tanggal Masuk is required" }),
});
export const barangApiSchema = z.object({
  id: z.uuid().optional(),
  name: z.string().min(1).max(20),
  harga: z.number().min(1),
  stok: z.number().min(1),
  tglMasuk: z.date(),
});

export const BarangListSchema = z.object({
  id: z.string(),
  name: z.string(),
  harga: z.number(),
  stok: z.number(),
  tglMasuk: z.string(),
});
export type BarangListData = z.infer<typeof BarangListSchema>;
export type BarangFormData = z.infer<typeof barangFormSchema>;
export type BarangApiData = z.infer<typeof barangApiSchema>; // proper types
