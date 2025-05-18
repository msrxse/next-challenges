'use client'

import { Button } from '@/app/ui/button'
import React, { useRef, useState } from 'react'
const catNames = [
  'neo',
  'millie',
  'millie_neo',
  'neo_banana',
  'neo_2',
  'bella',
  'poppy',
]
import Image from 'next/image'
import clsx from 'clsx'
import { flushSync } from 'react-dom'

const catList = catNames.map((cat, index) => ({
  id: index,
  imageUrl: `https://placecats.com/${cat}/300/200`,
  alt: cat,
  width: 300,
  height: 200,
}))

function Page() {
  const selectedRef = useRef<HTMLLIElement>(null)
  const [index, setIndex] = useState(0)

  return (
    <div className="flex h-full flex-col items-center justify-center overflow-hidden bg-gray-100">
      <h1 className="mb-10 text-3xl">Image Carousel</h1>
      <ul className="px-4">
        <li>
          - This image carousel has a “Next” button that switches the active
          image.
        </li>
        <li>
          - You don’t need to have a ref to every image. It should be enough to
          have a ref to the currently active image, or to the list itself.
        </li>
        <li>- Use flushSync to ensure the DOM is updated before you scroll.</li>
        <li>
          - Note that the flushSync call is necessary to force React to update
          the DOM before the scroll. Otherwise, selectedRef.current would always
          point at the previously selected item.
        </li>
      </ul>
      <nav className="m-6">
        <Button
          onClick={() => {
            flushSync(() => {
              if (index < catList.length - 1) {
                setIndex(index + 1)
              } else {
                setIndex(0)
              }
            })
            if (selectedRef.current !== null) {
              selectedRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center',
              })
            }
          }}
        >
          Next
        </Button>
      </nav>
      <div className="container overflow-scroll">
        <ul className="flex w-[2170px] flex-row justify-start">
          {catList.map((cat, i) => (
            <li
              key={cat.id}
              ref={index === i ? selectedRef : null}
              className={clsx('m-2 w-[310px]', {
                'ring-4 ring-blue-600': index === i,
              })}
            >
              <Image
                src={cat.imageUrl}
                alt={cat.alt}
                width={cat.width}
                height={cat.height}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Page
