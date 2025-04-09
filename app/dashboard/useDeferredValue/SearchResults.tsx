import type { Album } from "./page";

export default function SearchResults({ albums }: { albums: Album[] }) {
  return (
    <ul>
      {albums.map((album) => (
        <li
          key={album.id}
          className="w-full border border-gray-300 px-2 my-2 rounded-md"
        >
          {album.artist}, {album.title} ({album.album})
        </li>
      ))}
    </ul>
  );
}
