"use client";

import React, { useRef, useState } from "react";

function Page() {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);

  const handleStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());
    intervalRef.current = null;

    intervalRef.current = setInterval(() => {
      // Update current time every 10ms
      setNow(Date.now());
    }, 10);
  };

  const handleStop = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null; // Reset after clearing
    }
    // clearInterval(intervalRef.current as ReturnType<typeof setInterval>);
  };

  let secondsPassed = 0;
  if (startTime !== null && now !== null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <div className="bg-gray-100 h-full flex flex-col justify-around items-center p-4">
      <div>
        <h1 className="text-3xl font-bold text-center mb-5">Stopwatch</h1>
        <p>
          Make a stopwatch that the user can start or stop by pressing a button.
        </p>
        <p className="font-bold mt-10">Notes:</p>
        <ul className="px-4 mb-2">
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
          className="bg-blue-500 focus:bg-blue-600 active:bg-blue-800 px-3 py-1.5 rounded-md text-white mr-1"
        >
          Start
        </button>
        <button
          onClick={handleStop}
          className="bg-blue-500 focus:bg-blue-600 active:bg-blue-800 px-3 py-1.5 rounded-md text-white"
        >
          Stop
        </button>
      </div>
      <div className="flex justify-center items-center font-mono mt-4 border-dashed border-gray-400 border-2 w-[40%] h-[20%] bg-amber-50 rounded-md">
        Time passed: {secondsPassed.toFixed(3)}
      </div>
    </div>
  );
}

export default Page;
