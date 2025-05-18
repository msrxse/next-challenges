'use client'

import { Button } from '@/app/ui/button'
import React, { useState } from 'react'

function CountLabel({ count }: { count: number }) {
  const [previousCount, setPreviousCount] = useState(count) // Keeps track of the prop as it was on the last render (not the current).
  const [trend, setTrend] = useState<'Ascending' | 'Descending' | null>(null)

  if (previousCount !== count) {
    // Here we set state on render under a conditional
    setPreviousCount(count) // This  line is important - stops infinite loop when previous === count
    setTrend(count > previousCount ? 'Ascending' : 'Descending') // with each new rerender we say say if trend is ASC / DESC
  }

  return (
    <div>
      <input
        className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
        value={count}
        readOnly
      />
      <p className="mt-2 h-8">{trend}</p>
    </div>
  )
}

function Page() {
  const [count, setCount] = useState(0)

  return (
    <main className="flex h-full flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-800">Track a value</h1>
      <ul className="w-full list-disc pl-6">
        <li>Pattern to keep track of the previous value.</li>
        <li>
          This pattern is difficult to understand but still it is better than
          updating state inside an effect.
        </li>
        <li>
          Best not to use this and instead set state from handlers if possible.
        </li>
        <li>Here you set state inside a conditional on render.</li>
        <li>
          Example: you want to show whether the counter has increased or
          decreased since the last change. The count prop doesn’t tell you this
          — you need to keep track of its previous value.
        </li>
      </ul>
      <div className="py-4">
        <div className="flex justify-between">
          <Button onClick={() => setCount(count - 1)}>Decrease</Button>
          <Button onClick={() => setCount(count + 1)}>Increase</Button>
        </div>
        <CountLabel count={count} />
      </div>
    </main>
  )
}

export default Page
