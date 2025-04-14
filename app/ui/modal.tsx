"use client";

import { Button } from "@/app/ui/button";
import { useRouter } from "next/navigation";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <>
      <div className="fixed inset-0 opacity-25 bg-black"></div>
      <div className="fixed inset-0 flex justify-center items-center z-10">
        <div className="relative w-md p-2">
          <Button
            className="absolute right-2 top-2"
            onClick={() => {
              router.back();
            }}
          >
            Close modal
          </Button>
          <div className="pt-12">{children}</div>
        </div>
      </div>
    </>
  );
}
