import SearchInput from "@/app/dashboard/useDeferredValue/searchInput";
import SearchResults from "@/app/dashboard/useDeferredValue/searchResults";

import React, { use, Suspense } from "react";
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

const fetchAlbums: (query: string) => Promise<Album[]> = (query: string) =>
  new Promise((resolve) => {
    setTimeout(() => {
      const filtered = query
        ? data.filter((album) =>
            album.artist.toLowerCase().includes(query.toLowerCase())
          )
        : data;
      resolve(filtered);
    }, 600);
  });

function Page({ searchParams }: { searchParams: { search: string } }) {
  const { search } = searchParams;

  const albums: Album[] = use(fetchAlbums(search));

  return (
    <main className="bg-gray-100 h-full flex flex-col p-4 justify-evenly">
      <div>
        <h1 className="text-xl text-gray-900">
          Albums{search && ` matching "${search}"`}
        </h1>
        <ul className="list-disc pl-4">
          <li>The client input updates the URL.</li>
          <li>The server reads from queryParams and filters mocked data.</li>
          <li>
            Inputs writes URL with URLSearchParams utility and reads with
            useSearchParams() hook.
          </li>
        </ul>
      </div>
      <div>
        <Suspense fallback={<h2>Loading...</h2>}>
          <SearchInput />
          <SearchResults albums={albums} />
        </Suspense>
      </div>
    </main>
  );
}

export default Page;
