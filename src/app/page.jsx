import React from "react";

const { default: LayoutCover } = require("@/components/layouts/cover");
const { default: LayoutSignIn } = require("@/components/layouts/sign-in");

export default function App() {
  return (
    <main className="flex flex-col lg:flex-row w-full h-screen items-center justify-center p-0">
      <div className="hidden lg:flex shadow-none lg:shadow-2xl lg:shadow-[#292D32]/10">
        <LayoutCover />
      </div>
      <LayoutSignIn />
    </main>
  );
}
