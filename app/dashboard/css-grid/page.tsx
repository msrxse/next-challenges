import React from 'react'

function Page() {
  return (
    <main className="grid min-h-screen place-items-center bg-gray-100">
      <div className="grid bg-amber-100 lg:grid-cols-6">
        <p className="w-full pl-2 lg:col-start-2">Notes:</p>
        <ul className="list-disc pl-6 lg:col-span-3">
          <li className="text-xs text-gray-900">
            Starts on small screens with 1 column layout.
          </li>
          <li className="text-xs text-gray-900">
            Pass the initial small break point the layout switches to two
            columns and paragraph is manually placed on the second row and
            second column lines and the rest of it flows naturally.
          </li>
          <li className="text-xs text-gray-900">
            Once reached the large break point the grid jumps into four columns.
            The heading has three columns used and then within it two columns
            used for the text with one that stays blank.
          </li>
        </ul>
      </div>
      <div className="grid max-w-5xl gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4">
        <h1 className="text-4xl font-extrabold sm:col-span-2 sm:grid sm:grid-cols-2 sm:gap-4 lg:col-span-3 lg:grid-cols-3 lg:text-5xl">
          <span className="col-span-2">Grid layout with Tailwind CSS</span>
        </h1>
        <p className="sm:col-start-2 sm:row-start-2 sm:self-center lg:col-span-2 lg:col-start-1 lg:pr-12 lg:text-lg">
          Pariatur nobis reiciendis eum ut nostrum ab dolorum. Vel qui
          exercitationem et quas. Tenetur fugiat odit ad suscipit.
        </p>
        <div className="sm:square h-16 bg-blue-500 sm:h-auto"></div>
        <div className="sm:square h-16 bg-blue-500 sm:h-auto"></div>
        <div className="sm:square h-16 bg-pink-500 sm:h-auto"></div>
        <div className="sm:square h-16 bg-blue-500 sm:h-auto lg:col-start-2"></div>
        <div className="sm:square h-16 bg-pink-500 sm:h-auto"></div>
        <div className="sm:square h-16 bg-blue-500 sm:h-auto"></div>
        <div className="sm:square h-16 bg-blue-500 sm:h-auto"></div>
        <div className="sm:square h-16 bg-pink-500 sm:h-auto"></div>
        <p className="self-center lg:col-span-2 lg:px-4 lg:text-center lg:text-lg">
          Pariatur nobis reiciendis eum ut nostrum ab dolorum.
        </p>
      </div>
    </main>
  )
}

export default Page
