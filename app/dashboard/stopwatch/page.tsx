'use client'

import React, { useRef, useState } from 'react'

function Page() {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const [startTime, setStartTime] = useState<number | null>(null)
  const [now, setNow] = useState<number | null>(null)

  const handleStart = () => {
    setStartTime(Date.now())
    setNow(Date.now())
    intervalRef.current = null

    intervalRef.current = setInterval(() => {
      // Update current time every 10ms
      setNow(Date.now())
    }, 10)
  }

  const handleStop = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current)
      intervalRef.current = null // Reset after clearing
    }
    // clearInterval(intervalRef.current as ReturnType<typeof setInterval>);
  }

  let secondsPassed = 0
  if (startTime !== null && now !== null) {
    secondsPassed = (now - startTime) / 1000
  }

  return (
    <main className="flex h-full flex-col items-center justify-around bg-gray-100 p-4">
      <div>
        <h1 className="mb-5 text-center text-3xl font-bold">Stopwatch</h1>
        <p>
          Make a stopwatch that the user can start or stop by pressing a button.
        </p>
        <p className="mt-10 font-bold">Notes:</p>
        <ul className="mb-2 px-4">
          <li>
            - Use state for the 2 variables we need on render, now and
            startTime.
          </li>
          <li>
            - When user starts timer, save the time now and setInterval to save
            the time elapsed every 10ms.
          </li>
          <li>
            - Use a ref to clear the interval, instead of using useEffect.
          </li>
          <li>
            - Note that the rest calculation ( now - time elapsed ) is made in
            render as it is derived from state.
          </li>
        </ul>
      </div>
      <div>
        <button
          onClick={handleStart}
          className="mr-1 rounded-md bg-blue-500 px-3 py-1.5 text-white focus:bg-blue-600 active:bg-blue-800"
        >
          Start
        </button>
        <button
          onClick={handleStop}
          className="rounded-md bg-blue-500 px-3 py-1.5 text-white focus:bg-blue-600 active:bg-blue-800"
        >
          Stop
        </button>
      </div>
      <div className="mt-4 flex h-[20%] w-[40%] items-center justify-center rounded-md border-2 border-dashed border-gray-400 bg-amber-50 font-mono">
        Time passed: {secondsPassed.toFixed(3)}
      </div>
    </main>
  )
}

export default Page
