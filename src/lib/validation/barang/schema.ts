import { z } from "zod";

export const barangFormSchema = z.object({
  id: z.uuid().optional(),
  name: z.string().min(1, { message: "Input Nama Barang Harus Diisi!" }),
  harga: z.string().min(1, { message: "Input Harga Barang Harus Diisi!" }),
  stok: z.string().min(1, { message: "Input Stock Barang Harus Diisi!" }),
  tglMasuk: z.string().min(1, { message: "Tanggal Masuk Harus Diisi!" }),
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

export const PaginatedBarangSchema = z.object({
  page: z.number(),
  limit: z.number(),
  total: z.number(),
  totalPages: z.number(),
  data: z.array(BarangListSchema),
});

export type PaginatedBarang = z.infer<typeof PaginatedBarangSchema>;
export type BarangListData = z.infer<typeof BarangListSchema>;
export type BarangFormData = z.infer<typeof barangFormSchema>;
export type BarangApiData = z.infer<typeof barangApiSchema>; // proper types
