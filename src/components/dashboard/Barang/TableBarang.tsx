import { BarangFormData } from "@/lib/validation/barang/schema";
import { Edit, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";
interface TableBarangProps {
  listBarang: BarangFormData[];
  loadingList: boolean;
  errorList: string | null;
}

const TableBarang = ({
  listBarang,
  loadingList,
  errorList,
}: TableBarangProps) => {
  const [page, setPage] = React.useState(1);

  // Pagination
  const totalPage = 5;
  const startIndex = (page - 1) * totalPage;
  const paginetedData = listBarang.slice(startIndex, startIndex + totalPage);
  const totalPages = Math.ceil(listBarang.length / totalPage);
  return (
    <div className=" bg-white rounded-lg shadow-md overflow-hidden w-full max-w-5xl">
      <div className="overflow-x-auto">
        {loadingList && <p>Loading...</p>}
        {errorList && <p className="text-red-500">{errorList}</p>}
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                No
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nama Barang
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Harga
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Stok
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tanggal Masuk
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {listBarang.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="px-6 py-4 whitespace-nowrap text-3xl font-bold text-red-500 text-center"
                >
                  Tidak ada barang
                </td>
              </tr>
            )}
            {paginetedData.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.name.toLocaleUpperCase("id-ID")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  Rp{item.harga.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.stok}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.tglMasuk.split("T")[0]}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex gap-2">
                    <Link
                      href="/"
                      className="text-blue-500 hover:text-blue-700 p-1 rounded hover:bg-blue-50 transition-colors"
                    >
                      <Edit size={18} />
                    </Link>
                    <Link
                      href="/"
                      className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-green-50 transition-colors"
                    >
                      <Trash2 size={18} />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center items-center gap-3 p-4">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Prev
          </button>
          <span>
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableBarang;
