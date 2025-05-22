import React from 'react'

function Page() {
  return (
    <main className="flex flex-col items-center justify-between bg-gray-100">
      <div className="grid bg-amber-100 lg:grid-cols-6">
        <p className="w-full pl-2 lg:col-start-2">Notes:</p>
        <ul className="list-disc space-y-4 pl-6 lg:col-span-3">
          <li className="text-xs text-gray-900">
            Gravida quam mi erat tortor neque molestie. Auctor aliquet at
            porttitor a enim nunc suscipit tincidunt nunc.
          </li>
          <li className="text-xs text-gray-900">
            Gravida quam mi erat tortor neque molestie. Auctor aliquet at
            porttitor a enim nunc suscipit tincidunt nunc. Et non lorem tortor
            posuere. Nunc eu scelerisque interdum eget tellus non nibh
            scelerisque bibendum.
          </li>
          <li className="text-xs text-gray-900">
            Gravida quam mi erat tortor neque molestie. Auctor aliquet at
            porttitor a enim nunc suscipit tincidunt nunc.
          </li>
          <li className="text-xs text-gray-900">
            Gravida quam mi erat tortor neque molestie. Auctor aliquet at
            porttitor a enim nunc suscipit tincidunt nunc. Et non lorem tortor
            posuere. Nunc eu scelerisque interdum eget tellus non nibh
            scelerisque bibendum.
          </li>
        </ul>
      </div>
      <div className="w-full py-16">
        <div className="mx-auto flex max-w-md flex-col gap-y-10">
          <h1 className="text-2xl text-gray-900">Neque molestie</h1>
          <p className="text-sm text-gray-900">
            Gravida quam mi erat tortor neque molestie. Auctor aliquet at
            porttitor a enim nunc suscipit tincidunt nunc. Et non lorem tortor
            posuere. Nunc eu scelerisque interdum eget tellus non nibh
            scelerisque bibendum.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Page
