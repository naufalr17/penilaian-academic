import React from "react";
import Image from "next/image";

const LayoutInput = ({ icon, className, type, placeholder }) => {
  return (
    <div
      className={`${className} bg-[#292D32]/5 p-4 rounded-lg flex flex-row gap-4 items-center w-full h-auto ring-1 ring-[#292D32]/10 transition-all hover:ring-[#292D32]/20`}
    >
      <Image src={icon} width="16" height="16" />
      <input
        className="w-full bg-transparent text-[#292D32] font-medium text-sm tracking-tight outline-none mt-0"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default LayoutInput;
