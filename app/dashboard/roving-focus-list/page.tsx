'use client'

import Item from '@/app/dashboard/roving-focus-list/item'
import React, { useCallback, useEffect, useRef, useState } from 'react'

export interface Dog {
  id: number
  dog: string
}
export const dogs: Dog[] = [
  {
    id: 1,
    dog: 'Grand Bleu de Gascogne',
  },
  {
    id: 2,
    dog: 'Yakutian Laika',
  },
  {
    id: 3,
    dog: 'Portuguese Podengo',
  },
  {
    id: 4,
    dog: 'Tornjak',
  },
  {
    id: 5,
    dog: 'Affenpinscher',
  },
  {
    id: 6,
    dog: 'Black Mouth Cur',
  },
  {
    id: 7,
    dog: 'Denmark Feist',
  },
  {
    id: 8,
    dog: 'Yorkshire Terrier',
  },
  {
    id: 9,
    dog: 'Border Terrier',
  },
]

function Page() {
  const listRef = useRef<HTMLUListElement>(null)
  const [currentFocus, setCurrentFocus] = useState<number>(0)
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const size = dogs.length
      if (event.key === 'ArrowDown') {
        event.preventDefault()
        setCurrentFocus(currentFocus === size - 1 ? 0 : currentFocus + 1)
      } else if (event.key === 'ArrowUp') {
        event.preventDefault()
        setCurrentFocus(currentFocus === 0 ? size - 1 : currentFocus - 1)
      }
    },
    [currentFocus]
  )

  useEffect(() => {
    const listElement = listRef.current
    listElement?.addEventListener('keydown', handleKeyDown, false)

    return () => {
      listElement?.removeEventListener('keydown', handleKeyDown, false)
    }
  }, [handleKeyDown])

  return (
    <main className="flex h-full flex-col items-center justify-center bg-gray-100">
      <h1 className="pb-4 text-3xl text-gray-800">Roving Focus List</h1>
      <h2 className="pb-4 text-2xl text-gray-800">Roving focus Technique</h2>
      <ul className="mb-4 w-[70%] list-disc text-sm text-gray-800">
        <li>
          We want to move the focus of between list items using arrow keys to
          make it more accessible and keyboard friendly.
        </li>
        <li>
          We also want to wrap the focus back to the top when it reaches bottom.
        </li>
        <li>
          We add tabIndex=0 to the focused list element and all others
          tabIndex=-1. Then call ref.current.focus() on the ref of the
          tabIndex=0 element.
        </li>
      </ul>
      <ul
        role="listbox"
        ref={listRef}
        tabIndex={0}
        className="min-h-60 w-40 divide-y divide-gray-300 border border-gray-300"
      >
        {dogs.map((dog, index) => (
          <Item
            key={dog.id}
            dog={dog}
            currentFocus={currentFocus === index}
            index={index}
            setCurrentFocus={setCurrentFocus}
          />
        ))}
      </ul>
    </main>
  )
}

export default Page
