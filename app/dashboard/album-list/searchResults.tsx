import { use } from "react";
import { fetchAlbums, type Album } from "./page";
import { MusicalNoteIcon } from "@heroicons/react/24/outline";

export default function SearchResults({ query }: { query: string }) {
  const albums: Album[] = use(fetchAlbums(query));

  return (
    <ul className="max-w-md divide-y-2 divide-gray-300">
      {albums.map((album) => (
        <li key={album.id} className="py-2">
          <div className="flex items-center space-x-4">
            <div className="shrink-0">
              <MusicalNoteIcon className="w-5 md:w-6" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="tect-sm font-medium text-gray-900 truncate">
                {album.artist}
              </p>
              <p className="text-sm text-gray-500 truncate">{album.title} </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900">
              {album.album}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
