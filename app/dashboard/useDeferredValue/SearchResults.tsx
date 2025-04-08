"use client";

import { use, useState } from "react";
import type { Album } from "./page";

export default function SearchResults({
  albumPromise,
}: {
  albumPromise: Promise<Album[]>;
}) {
  const [query, setQuery] = useState("");
  const albums: Album[] = use(albumPromise);
  const filteredAlbums = albums.filter((album) => {
    const q = query.toLowerCase();
    return album.artist.toLowerCase().includes(q);
  });

  return (
    <div className="w-full p-4">
      <div>
        <label
          htmlFor="search"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Search
        </label>
        <input
          type="text"
          id="search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder=" Search album..."
          onChange={(e) => setQuery(e.target.value)}
          required
        />
      </div>
      <ul>
        {filteredAlbums.map((album) => (
          <li
            key={album.id}
            className="w-full border border-gray-300 px-2 my-2 rounded-md"
          >
            {album.artist}, {album.title} ({album.album})
          </li>
        ))}
      </ul>
    </div>
  );
}
