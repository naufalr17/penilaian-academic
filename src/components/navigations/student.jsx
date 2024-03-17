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
      <div className="text-[#FFFFFF] font-medium text-sm text-center tracking-tight mt-0">
        Student Page
      </div>
      <div className="flex flex-row gap-4 items-center justify-end w-full lg:w-auto">
        <div className="relative">
          <button className="bg-[#FFFFFF]/5 transition-all hover:bg-[#FFFFFF]/25 px-4 py-2 rounded-lg flex flex-row gap-4 items-center justify-start w-auto lg:w-[360px] h-auto mt-0">
            <Image src={icon.accountManagement} width="16" height="16" />{" "}
            <p className="text-[#FFFFFF] font-medium text-sm tracking-tight truncate">
              Nama Pengguna
            </p>
          </button>
          <div className="fixed w-full lg:w-[240px] top-20 bg-[#FFFFFF] p-4 rounded-lg shadow-none lg:shadow-2xl lg:shadow-[#292D32]/10">
            <p className="text-[#2563EB] font-medium text-xs tracking-tight">
              Nama Pengguna
            </p>
          </div>
        </div>
        <button className="bg-[#FFFFFF] transition-all hover:bg-[#FFFFFF]/80 px-4 py-2 rounded-lg flex flex-row gap-4 items-center justify-center w-auto h-auto mt-0">
          <p className="text-[#2563EB] font-medium text-sm tracking-tight">
            Keluar
          </p>
          <Image src={icon.signOut} width="16" height="16" />
        </button>
      </div>
    </div>
  );
};

export default NavigationStudent;
