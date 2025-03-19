import React from "react";
import { lusitana } from "@/app/ui/fonts";

function Page() {
  return (
    <>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div>Select a challenge to get started</div>
    </>
  );
}

export default Page;
