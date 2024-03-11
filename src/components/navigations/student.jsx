"use client";

import React from "react";
import Image from "next/image";

const icon = {
  accountManagement: require("@/shared/icons/user-edit-black.svg"),
  signOut: require("@/shared/icons/door-exit-white.svg"),
};

const NavigationStudent = () => {
  return (
    <div className="bg-white flex flex-col lg:flex-row gap-4 items-center justify-between w-full h-auto p-4">
      <div className="text-[#292D32] font-bold text-xs text-center tracking-tight mt-0">
        Student
      </div>
      <div className="flex flex-row gap-4 items-center justify-end w-full">
        <button className="bg-[#292D32]/5 transition-all hover:bg-[#292D32]/25 p-4 rounded-lg flex flex-row gap-4 items-center justify-center w-auto h-auto mt-0">
          <p className="text-[#292D32] font-bold text-xs tracking-tight">
            Pengaturan Akun
          </p>
          <Image src={icon.accountManagement} width="14" height="14" />
        </button>
        <button className="bg-[#292D32] transition-all hover:bg-[#292D32]/80 p-4 rounded-lg flex flex-row gap-4 items-center justify-center w-auto h-auto mt-0">
          <p className="text-white font-bold text-xs tracking-tight">
            Keluar
          </p>
          <Image src={icon.signOut} width="14" height="14" />
        </button>
      </div>
    </div>
  );
};

export default NavigationStudent;
