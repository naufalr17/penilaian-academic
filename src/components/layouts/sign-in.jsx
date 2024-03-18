"use client";
import React from "react";
import Image from "next/image";

const { default: LayoutInput } = require("@/components/layouts/input");

const auth = {
  name: "TestApp",
  description: "Silahkan lakukan otentikasi untuk mengakses dashboard",
};

const icon = {
  user: require("@/shared/icons/user-black.svg"),
  key: require("@/shared/icons/key-black.svg"),
  signIn: require("@/shared/icons/door-enter-white.svg"),
};

const LayoutSignIn = () => {
  return (
    <main className="bg-white flex flex-col w-full lg:w-[420px] h-full lg:h-[640px] p-8 lg:p-16 items-center justify-between rounded-none lg:rounded-r-lg">
      <div className="flex flex-col w-full h-auto items-center gap-2 p-0 mt-0">
        <h1 className="text-[#2563EB] font-bold text-lg text-center tracking-tight mt-0">
          Selamat datang di {auth.name}
        </h1>{" "}
        <h2 className="text-[#2563EB]/60 font-medium text-sm text-center tracking-tight mt-0">
          {auth.description}
        </h2>
      </div>
      <form className="flex flex-col w-full h-auto gap-4 p-0 mt-8">
        <LayoutInput
          icon={icon.user}
          type="text"
          placeholder="Masukkan email"
        />
        <LayoutInput
          icon={icon.key}
          type="password"
          placeholder="Masukkan password"
        />
        <button className="bg-[#2563EB] transition-all hover:bg-[#2563EB]/80 text-white p-4 rounded-lg flex flex-row gap-4 items-center justify-center w-full h-auto mt-4">
          <p className="text-white font-medium text-sm tracking-tight">Masuk</p>
          <Image src={icon.signIn} width="16" height="16" />
        </button>
      </form>
      <div className="flex flex-col w-full h-auto items-center gap-2 p-0 mt-8">
        <div className="text-[#2563EB]/60 font-medium text-sm text-center tracking-tight mt-0">
          Belum memiliki akun?{" "}
          <button className="text-[#2563EB] font-bold text-sm text-center tracking-tight hover:underline">
            Daftar Sekarang
          </button>
        </div>{" "}
      </div>
    </main>
  );
};

export default LayoutSignIn;
