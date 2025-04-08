"use client";

import React, { useRef } from "react";
import Image from "next/image";

const cats = [
  {
    id: 1,
    src: "https://placecats.com/neo/300/200",
    width: 300,
    height: 200,
    name: "Neo",
  },
  {
    id: 2,
    src: "https://placecats.com/millie/300/200",
    width: 300,
    height: 200,
    name: "Millie",
  },
  {
    id: 3,
    src: "https://placecats.com/bella/300/200",
    width: 300,
    height: 200,
    name: "Bella",
  },
];
function Page() {
  const catRef = useRef<Map<string, HTMLDivElement | null>>(null);

  function getMap() {
    if (!catRef.current) {
      // Initialize the Map on first usage.
      catRef.current = new Map();
    }
    return catRef.current;
  }
  function scrollToCat(catName: string) {
    const map = getMap();
    const node = map.get(catName);
    if (node) {
      node.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }

  return (
    <main className="bg-gray-100 h-full flex flex-col items-center justify-center overflow-hidden">
      List of Refs
      <div className="py-2">
        {cats.map((cat) => (
          <button
            key={cat.id}
            className="px-3 py-0.5 mx-1 bg-blue-500 text-white hover:bg-blue-600 rounded-md active:bg-blue-800"
            onClick={() => scrollToCat(cat.name)}
          >
            {cat.name}
          </button>
        ))}
      </div>
      <div className="container overflow-scroll">
        <div className="w-[1600px] flex flex-row">
          {cats.map((cat) => (
            <div
              key={cat.id}
              ref={(node) => {
                const map = getMap();
                map.set(cat.name, node);

                return () => {
                  map.delete(cat.name);
                };
              }}
              className="w-[400px]"
            >
              <Image
                src={cat.src}
                alt={cat.name}
                width={cat.width}
                height={cat.height}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Page;
