"use client";

import React from "react";
import Link from "next/link";

function Page() {
  return (
    <main className="bg-gray-100 h-full flex flex-col justify-around items-center p-4">
      <h1>Welcome to the site</h1>
      <Link href="/dashboard/modal-dialog/login">Login</Link>
    </main>
  );
}

export default Page;
