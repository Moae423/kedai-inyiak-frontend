import React from "react";

interface CardTotalProps {
  icon?: React.ReactNode;
  loading?: boolean;
  data?: number;
  title: string;
  error?: string | null;
}
const CardTotal = ({ loading, data, error, title, icon }: CardTotalProps) => {
  return (
    <div className="w-[25rem] h-full bg-gray-50 shadow-md border-2 p-4 rounded-2xl">
      <div className="flex items-center gap-3">
        {/* <GoPackage className="w-12 h-12" /> */}
        {icon}
        <div className="flex flex-col">
          <h1 className="text-[24px] leading-[32px] font-bold ">
            {loading
              ? "Loading..."
              : error
              ? error
              : data?.toLocaleString("id-ID")}
          </h1>
          <p className="text-[18px] leadieng-[24px] text-gray-500">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default CardTotal;
