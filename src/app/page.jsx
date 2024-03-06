import React from "react";

const { default: LayoutCover } = require("@/components/layouts/cover");
const { default: LayoutSignIn } = require("@/components/layouts/sign-in");

export default function App() {
  return (
    <main className="flex flex-col lg:flex-row w-full h-screen items-center justify-center p-0">
      <div className="hidden lg:flex">
        <LayoutCover />
      </div>
      <LayoutSignIn />
    </main>
  );
}
