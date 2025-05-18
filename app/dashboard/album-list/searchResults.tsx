import { use } from 'react'
import { fetchAlbums, type Album } from './page'
import { MusicalNoteIcon } from '@heroicons/react/24/outline'

export default function SearchResults({ query }: { query: string }) {
  const albums: Album[] = use(fetchAlbums(query))

  return (
    <ul className="max-w-md divide-y-2 divide-gray-300">
      {albums.map((album) => (
        <li key={album.id} className="py-2">
          <div className="flex items-center space-x-4">
            <div className="shrink-0">
              <MusicalNoteIcon className="w-5 md:w-6" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="tect-sm truncate font-medium text-gray-900">
                {album.artist}
              </p>
              <p className="truncate text-sm text-gray-500">{album.title} </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900">
              {album.album}
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
