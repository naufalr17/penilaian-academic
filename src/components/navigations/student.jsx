"use client";

import React from "react";
import Image from "next/image";

const icon = {
  accountManagement: require("@/shared/icons/user-edit-black.svg"),
  signOut: require("@/shared/icons/door-exit-white.svg"),
};

const NavigationStudent = () => {
  return (
    <div className="bg-[#2563EB] flex flex-row gap-4 items-center justify-between w-full h-auto p-4">
      <p className="text-[#FFFFFF] font-medium text-sm text-start lg:text-center tracking-tight mt-0">
        Student Page
      </p>
      <div className="flex flex-row gap-4 items-center justify-end w-full lg:w-auto">
        <button className="bg-[#FFFFFF]/5 transition-all hover:bg-[#FFFFFF]/25 px-4 py-2 rounded-lg flex flex-row gap-4 items-center justify-start w-auto lg:w-[360px] h-auto mt-0">
          <Image src={icon.accountManagement} width="16" height="16" />{" "}
          <p className="hidden lg:flex text-[#FFFFFF] font-medium text-sm tracking-tight truncate">
            Nama Pengguna
          </p>
        </button>
        <button className="bg-[#FFFFFF] transition-all hover:bg-[#FFFFFF]/80 px-4 py-2 rounded-lg flex flex-row gap-4 items-center justify-center w-auto h-auto mt-0">
          <p className="hidden lg:flex text-[#2563EB] font-medium text-sm tracking-tight">
            Keluar
          </p>
          <Image src={icon.signOut} width="16" height="16" />
        </button>
      </div>
    </div>
  );
};

export default NavigationStudent;
