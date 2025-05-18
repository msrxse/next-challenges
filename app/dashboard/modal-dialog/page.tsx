'use client'

import React from 'react'
import Link from 'next/link'

function Page() {
  return (
    <main className="flex h-full flex-col items-center justify-around bg-gray-100 p-4">
      <h1>Parallel + Intercepting Routes Demo Application.</h1>
      <Link href="/dashboard/modal-dialog/login">Login</Link>
    </main>
  )
}

export default Page
