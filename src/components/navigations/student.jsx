"use client";

import React from "react";
import Image from "next/image";

const icon = {
  accountManagement: require("@/shared/icons/user-edit-black.svg"),
  signOut: require("@/shared/icons/door-exit-white.svg"),
};

const NavigationStudent = () => {
  return (
    <div className="bg-[#2563EB] flex flex-row lg:flex-col gap-4 items-center lg:items-start justify-between w-full h-auto lg:h-screen p-4">
      <p className="hidden lg:flex text-[#FFFFFF] font-medium text-sm text-start tracking-tight w-full mt-0">
        Student Page
      </p>
      <div className="flex flex-row lg:flex-col gap-4 items-center justify-end w-full">
        <div className="bg-[#FFFFFF]/5 transition-all hover:bg-[#FFFFFF]/25 px-4 py-4 rounded-lg flex flex-col gap-4 items-start justify-center w-full h-auto mt-0">
          <div className="group flex flex-col gap-2 items-start justify-center w-full h-auto">
            <div className="flex flex-row gap-2 items-center justify-between w-full h-auto">
              <p className="text-[#FFFFFF] font-medium text-sm tracking-tight truncate">
                Nama Pengguna
              </p>
              <Image
                className="group opacity-0 group-hover:opacity-100"
                src={icon.accountManagement}
                width="16"
                height="16"
              />{" "}
            </div>
            <p className="text-[#FFFFFF] font-normal text-xs tracking-tight truncate">
              Muhammad Naufal R.
            </p>
          </div>
          <div className="group flex flex-col gap-2 items-start justify-center w-full h-auto">
            <div className="flex flex-row gap-2 items-center justify-between w-full h-auto">
              <p className="text-[#FFFFFF] font-medium text-sm tracking-tight truncate">
                Bio
              </p>
              <Image
                className="group opacity-0 group-hover:opacity-100"
                src={icon.accountManagement}
                width="16"
                height="16"
              />{" "}
            </div>
            <p className="text-[#FFFFFF] font-normal text-xs tracking-tight truncate">
              Available
            </p>
          </div>
        </div>
        <button className="bg-[#FFFFFF] transition-all hover:bg-[#FFFFFF]/80 px-4 py-4 rounded-lg flex flex-row gap-4 items-center justify-center w-auto lg:w-full h-auto mt-0">
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
