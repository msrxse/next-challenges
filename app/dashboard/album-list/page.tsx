import SearchInput from '@/app/dashboard/album-list/searchInput'
import SearchResults from '@/app/dashboard/album-list/searchResults'
import { SkeletonList } from '@/app/dashboard/album-list/skeletonList'

import React, { Suspense } from 'react'
export interface Album {
  id: number
  artist: string
  title: string
  album: string
}
const data: Album[] = [
  {
    id: 1,
    artist: 'Steve Aoki',
    title: 'Hey Alligator',
    album: 'Afterlife Records',
  },
  {
    id: 2,
    artist: 'Darko Esser',
    title: 'True Feeling',
    album: 'Drumcode Records',
  },
  {
    id: 3,
    artist: 'Gerd Janson',
    title: 'Written in the scars',
    album: 'Token Records',
  },
  {
    id: 4,
    artist: 'Helena Hauff',
    title: 'Without you',
    album: 'Filth on Acid',
  },
]

export const fetchAlbums: (query: string) => Promise<Album[]> = (
  query: string
) =>
  new Promise((resolve) => {
    setTimeout(() => {
      const filtered = query
        ? data.filter((album) =>
            album.artist.toLowerCase().includes(query.toLowerCase())
          )
        : data
      resolve(filtered)
    }, 600)
  })

async function Page({ searchParams }: { searchParams: { search: string } }) {
  const { search } = (await searchParams) || ''

  return (
    <main className="flex h-full flex-col justify-evenly bg-gray-100 p-4">
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
          <li>
            Adding suspense means the page won’t block — it’ll render the
            fallback while waiting for data.
          </li>
        </ul>
      </div>
      <div>
        <Suspense fallback={<SkeletonList />}>
          <SearchInput />
          <SearchResults query={search} />
        </Suspense>
      </div>
    </main>
  )
}

export default Page
