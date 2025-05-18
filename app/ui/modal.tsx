'use client'

import { Button } from '@/app/ui/button'
import { useRouter } from 'next/navigation'

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-25"></div>
      <div className="fixed inset-0 z-10 flex items-center justify-center">
        <div className="relative w-md p-2">
          <Button
            className="absolute top-2 right-2"
            onClick={() => {
              router.back()
            }}
          >
            Close modal
          </Button>
          <div className="pt-12">{children}</div>
        </div>
      </div>
    </>
  )
}
