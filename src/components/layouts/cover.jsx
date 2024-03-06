"use client";
import React from "react";
import Image from "next/image";

const cover = {
  source: require("@/shared/assets/sigmund-mFcsYcSSiMQ-unsplash.jpg"),
};

const LayoutCover = () => {
  return (
    <main className="bg-white flex flex-col w-full lg:w-[480px] h-full lg:h-[640px] p-0 items-center justify-between rounded-none lg:rounded-lg shadow-none lg:shadow-2xl lg:shadow-[#292D32]/10">
      <Image src={cover.source} className="object-cover rounded-none lg:rounded-l-lg" />
    </main>
  );
};

export default LayoutCover;
