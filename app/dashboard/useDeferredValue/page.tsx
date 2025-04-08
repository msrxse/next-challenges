import SearchResults from "@/app/dashboard/useDeferredValue/SearchResults";

import React, { Suspense } from "react";
export interface Album {
  id: number;
  artist: string;
  title: string;
  album: string;
}
const data: Album[] = [
  {
    id: 1,
    artist: "Steve Aoki",
    title: "Hey Alligator",
    album: "warner",
  },
  { id: 2, artist: "Darko Esser", title: "True Feeling", album: "warner" },
  {
    id: 3,
    artist: "Gerd Janson",
    title: "Written in the scars",
    album: "warner",
  },
  { id: 4, artist: "Helena Hauff", title: "Without you", album: "warner" },
];

const albumPromise: Promise<Album[]> = new Promise((resolve) => {
  setTimeout(() => {
    resolve(data);
  }, 600);
});

function Page() {
  return (
    <main className="bg-gray-100 h-full flex flex-col justify-center items-center">
      useDeferredValue
      <Suspense fallback={<h2>Loading...</h2>}>
        <SearchResults albumPromise={albumPromise} />
      </Suspense>
    </main>
  );
}

export default Page;
