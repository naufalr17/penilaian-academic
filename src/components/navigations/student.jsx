"use client";

import React from "react";
import Image from "next/image";

const icon = {
  accountManagement: require("@/shared/icons/user-edit-black.svg"),
  signOut: require("@/shared/icons/door-exit-white.svg"),
};

const NavigationStudent = () => {
  return (
    <div className="bg-[#2563EB] flex flex-col lg:flex-row gap-4 items-center justify-between w-full h-auto p-4">
      <div className="text-[#FFFFFF] font-bold text-sm text-center tracking-tight mt-0">
        Student Page
      </div>
      <div className="flex flex-row gap-4 items-center justify-end w-full lg:w-auto">
        <button className="bg-[#FFFFFF]/5 transition-all hover:bg-[#FFFFFF]/25 px-4 py-2 rounded-lg flex flex-row gap-4 items-center justify-center w-auto h-auto mt-0">
          <p className="text-[#FFFFFF] font-bold text-xs tracking-tight">
            Pengaturan Akun
          </p>
          <Image src={icon.accountManagement} width="14" height="14" />
        </button>
        <button className="bg-[#FFFFFF] transition-all hover:bg-[#FFFFFF]/80 px-4 py-2 rounded-lg flex flex-row gap-4 items-center justify-center w-auto h-auto mt-0">
          <p className="text-[#2563EB] font-bold text-xs tracking-tight">
            Keluar
          </p>
          <Image src={icon.signOut} width="14" height="14" />
        </button>
      </div>
    </div>
  );
};

export default NavigationStudent;
