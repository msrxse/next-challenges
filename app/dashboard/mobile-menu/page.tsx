import React from 'react'

function Page() {
  return (
    <main className="relative flex flex-col items-center justify-between bg-gray-100">
      <div className="absolute inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 bg-white/50 px-4 backdrop-blur-xs transition">
        <div className="absolute inset-x-0 top-full h-px bg-zinc-900/7.5 transition"></div>
        <div className="flex items-center gap-5">
          <button
            type="button"
            className="relative flex size-6 items-center justify-center rounded-md transition hover:bg-zinc-900/15"
            aria-label="Toggle navigation"
          >
            <span className="absolute top-1/2 left-1/2 size-12 -translate-1/2 [@media(pointer:fine)]:hidden"></span>
            <svg
              viewBox="0 0 10 9"
              fill="none"
              strokeLinecap="round"
              aria-hidden="true"
              className="w-2.5 stroke-zinc-900"
            >
              <path d="M.5 1h9M.5 8h9M.5 4.5h9"></path>
            </svg>
          </button>
          <a aria-label="Home" href="/">
            <svg viewBox="0 0 99 24" aria-hidden="true" className="h-6">
              <path
                className="fill-emerald-400"
                d="M16 8a5 5 0 0 0-5-5H5a5 5 0 0 0-5 5v13.927a1 1 0 0 0 1.623.782l3.684-2.93a4 4 0 0 1 2.49-.87H11a5 5 0 0 0 5-5V8Z"
              ></path>
              <path
                className="fill-zinc-900"
                d="M26.538 18h2.654v-3.999h2.576c2.672 0 4.456-1.723 4.456-4.333V9.65c0-2.61-1.784-4.333-4.456-4.333h-5.23V18Zm4.58-10.582c1.52 0 2.416.8 2.416 2.241v.018c0 1.441-.896 2.25-2.417 2.25h-1.925V7.418h1.925ZM38.051 18h2.566v-5.414c0-1.371.923-2.206 2.382-2.206.396 0 .791.061 1.178.15V8.287a3.843 3.843 0 0 0-.958-.123c-1.257 0-2.136.615-2.443 1.661h-.159V8.323h-2.566V18Zm11.55.202c2.979 0 4.772-1.88 4.772-5.036v-.018c0-3.128-1.82-5.036-4.773-5.036-2.953 0-4.772 1.916-4.772 5.036v.018c0 3.146 1.793 5.036 4.772 5.036Zm0-2.013c-1.372 0-2.145-1.116-2.145-3.023v-.018c0-1.89.782-3.023 2.144-3.023 1.354 0 2.145 1.134 2.145 3.023v.018c0 1.907-.782 3.023-2.145 3.023Zm10.52 1.846c.492 0 .967-.053 1.283-.114v-1.907a6.057 6.057 0 0 1-.755.044c-.87 0-1.24-.387-1.24-1.257v-4.544h1.995V8.323H59.41V6.012h-2.592v2.311h-1.495v1.934h1.495v5.133c0 1.88.949 2.645 3.304 2.645Zm7.287.167c2.98 0 4.772-1.88 4.772-5.036v-.018c0-3.128-1.82-5.036-4.772-5.036-2.954 0-4.773 1.916-4.773 5.036v.018c0 3.146 1.793 5.036 4.773 5.036Zm0-2.013c-1.372 0-2.145-1.116-2.145-3.023v-.018c0-1.89.782-3.023 2.145-3.023 1.353 0 2.144 1.134 2.144 3.023v.018c0 1.907-.782 3.023-2.144 3.023Zm10.767 2.013c2.522 0 4.034-1.353 4.297-3.463l.01-.053h-2.374l-.017.036c-.229.966-.853 1.467-1.908 1.467-1.37 0-2.135-1.08-2.135-3.04v-.018c0-1.934.755-3.006 2.135-3.006 1.099 0 1.74.615 1.908 1.556l.008.017h2.391v-.026c-.228-2.162-1.749-3.56-4.315-3.56-3.033 0-4.738 1.837-4.738 5.019v.017c0 3.217 1.714 5.054 4.738 5.054Zm10.257 0c2.98 0 4.772-1.88 4.772-5.036v-.018c0-3.128-1.82-5.036-4.772-5.036-2.953 0-4.773 1.916-4.773 5.036v.018c0 3.146 1.793 5.036 4.773 5.036Zm0-2.013c-1.371 0-2.145-1.116-2.145-3.023v-.018c0-1.89.782-3.023 2.145-3.023 1.353 0 2.144 1.134 2.144 3.023v.018c0 1.907-.782 3.023-2.144 3.023ZM95.025 18h2.566V4.623h-2.566V18Z"
              ></path>
            </svg>
          </a>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex gap-4">
            <div>
              <button
                type="button"
                className="flex size-6 items-center justify-center rounded-md transition hover:bg-zinc-900/10"
                aria-label="Find something..."
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className="h-5 w-5 stroke-zinc-900"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12.01 12a4.25 4.25 0 1 0-6.02-6 4.25 4.25 0 0 0 6.02 6Zm0 0 3.24 3.25"
                  ></path>
                </svg>
              </button>
            </div>
            <button
              type="button"
              className="flex size-6 items-center justify-center rounded-md transition hover:bg-zinc-900/10"
              aria-label="Switch to dark theme"
            >
              <svg
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
                className="h-5 w-5 stroke-zinc-900"
              >
                <path d="M12.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path>
                <path
                  strokeLinecap="round"
                  d="M10 5.5v-1M13.182 6.818l.707-.707M14.5 10h1M13.182 13.182l.707.707M10 15.5v-1M6.11 13.889l.708-.707M4.5 10h1M6.11 6.111l.708.707"
                ></path>
              </svg>
            </button>
          </div>
          <a
            className="inline-flex justify-center gap-0.5 overflow-hidden rounded-full bg-zinc-900 px-3 py-1 text-sm/6 font-medium text-white transition hover:bg-zinc-700"
            href="#"
          >
            Sign in
          </a>
        </div>
      </div>
      <div className="grid h-150 overflow-scroll bg-amber-100 lg:grid-cols-6">
        <p className="mt-14 w-full pl-2 lg:col-start-2">Notes:</p>
        <ul className="h-200 list-disc space-y-4 pl-6 lg:col-span-3">
          <li className="text-xs text-gray-900">
            Recommended size for touch targets: between 44px to 48 x 48 pixels.
            Our buttons are 24x24pixels, which is quite smaller that the
            recommended size.
          </li>
          <li className="text-xs text-gray-900">
            We could enlarge these menu buttons but there other ways if you
            don&apos;t want to change the design.
          </li>
          <li className="text-xs text-gray-900">
            Negative margins work until they dont. So stay away from them if you
            can. A solution without negative margins is always better.
          </li>
          <li className="text-xs text-gray-900">
            Add extra span inside the button, make it absolute relative to the
            button and add the desired size to the span. Any click will
            propagate to the button even though is visually outside.
          </li>
          <li className="text-xs text-gray-900">
            The "top-1/2 left-1/2 size-12 -translate-1/2" is there even if it is
            a flex container already to make it bullet-proof centered.
          </li>
          <li className="text-xs text-gray-900">
            The button will be in the hover state when you get closer with the
            cursor even though you would not be touching the button. But theres
            a fix to that:
          </li>
          <li className="text-xs text-gray-900">
            To avoid the button&apos;s hover state before the mouse gets there:
            Screen size is not a good idea but there is this other media query
            called: ``` @media(pointer: coarse) // or fine ```` that can work.
          </li>
          <li className="text-xs text-gray-900">
            There is no variant for this media query but you can use the
            arbitrary variant. ```[@media(pointer:fine)]:hidden```. Now on any
            device where there is support for fine (the mouse cursor) this span
            will be hidden. But is we were in a touch device, this span will be
            there and usable.
          </li>
          <li className="text-xs text-gray-900">
            The nice thing is that all of the logic is encapsulated on the
            button - besides the position relative of the parent. No increase on
            size on mobile, no negative margins.
          </li>
        </ul>
      </div>
    </main>
  )
}

export default Page
