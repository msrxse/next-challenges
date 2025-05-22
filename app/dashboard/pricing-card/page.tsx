import { CheckIcon } from '@heroicons/react/24/outline'
import React from 'react'

function Page() {
  return (
    <main className="flex h-screen flex-col items-center bg-gray-100">
      <div className="grid bg-amber-100 lg:grid-cols-6">
        <p className="w-full pl-2 lg:col-start-2">Notes:</p>
        <ul className="list-disc space-y-4 pl-6 lg:col-span-3">
          <li className="text-xs text-gray-900">
            How to correctly center, for example an icon right next to text.
          </li>
          <li className="text-xs text-gray-900">
            Dont center on the flex container because as soon as the line wraps
            the icon would be centered but not he the first text line.
          </li>
          <li className="text-xs text-gray-900">
            First list item is centered with flex, see how it is centered to the
            flex container but not to the line.
          </li>
          <li className="text-xs text-gray-900">
            Second list item with items-start, then nudge it down a bit with
            some math until OK, with margin-top. Height of icon is 24px,
            line-heigh is 20px, we need to nudge it down by 2 pixels (mt-0.5).
          </li>
          <li className="text-xs text-gray-900">
            Third, add ”1lh” to a span wrapping the SVG. The lh unit is “equal
            to the computed value of line-height”
          </li>
          <li className="text-xs text-gray-900">
            Fourth, since our icon component allows it, instead just add it to
            the icon&apos;s class.
          </li>
        </ul>
      </div>
      <div className="w-full overflow-scroll py-16">
        <div className="mx-auto flex max-w-md flex-col gap-y-10">
          <div className="relative rounded-3xl border-gray-300 bg-white p-10 shadow-2xl ring-1 ring-gray-900/10">
            <h3 className="text-base/7 font-semibold text-blue-900">
              Personal
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-5xl font-semibold tracking-tight text-gray-900">
                £29
              </span>
              <span className="text-base font-medium text-gray-500">
                /month
              </span>
            </p>
            <p className="mt-6 text-sm text-gray-800">
              Gravida quam mi erat tortor neque molestie aliquet enim nunc
              suscipit tincidunt nunc.
            </p>
            <ul role="list" className="mt-10 space-y-3 text-sm/6 text-gray-600">
              <li className="flex items-center gap-x-3">
                <CheckIcon className="size-5 flex-none text-blue-800" />
                Nunc eu scelerisque interdum eget tellus non nibh scelerisque
                bibendum.
              </li>
              <li className="flex items-start gap-x-3">
                <CheckIcon className="mt-0.5 size-5 flex-none text-blue-800" />
                Nunc eu scelerisque interdum eget tellus non nibh scelerisque
                bibendum.
              </li>
              <li className="flex items-start gap-x-3">
                <span className="flex h-[1lh] items-center">
                  <CheckIcon className="size-5 flex-none text-blue-800" />
                </span>
                Nunc eu scelerisque interdum eget tellus non nibh scelerisque
                bibendum.
              </li>
              <li className="flex items-start gap-x-3">
                <CheckIcon className="size-5 h-[1lh] flex-none text-blue-800" />
                Nunc eu scelerisque interdum eget tellus non nibh scelerisque
                bibendum.
              </li>
            </ul>
            <button className="mt-10 w-full rounded-sm bg-blue-600 px-0.5 py-1.5 font-semibold tracking-tight text-white shadow-md">
              Get started today
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Page
