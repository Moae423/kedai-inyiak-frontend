import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data = [
  {
    invoice: "INV001",
    status: "Paid",
    method: "Credit Card",
    amount: "$250.00",
  },
  {
    invoice: "INV001",
    status: "Paid",
    method: "Credit Card",
    amount: "$250.00",
  },
  {
    invoice: "INV001",
    status: "Paid",
    method: "Credit Card",
    amount: "$250.00",
  },
  {
    invoice: "INV001",
    status: "Paid",
    method: "Credit Card",
    amount: "$250.00",
  },
];

const DataTable = () => {
  return (
    <Table className="max-w-3xl mx-auto ">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow className="">
          <TableHead className="w-[100px]  font-bold text-lg ">
            Invoice
          </TableHead>
          <TableHead className="font-bold text-lg">Status</TableHead>
          <TableHead className="font-bold text-lg">Method</TableHead>
          <TableHead className="text-right font-bold text-lg">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((invoice, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.status}</TableCell>
            <TableCell>{invoice.method}</TableCell>
            <TableCell className="text-right">{invoice.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DataTable;
