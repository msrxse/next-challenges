'use client'

import { useRouter, useSearchParams } from 'next/navigation'

export default function SearchInput() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value
    const params = new URLSearchParams(searchParams.toString())
    if (q) {
      params.set('search', q)
    } else {
      params.delete('search')
    }
    router.push(`?${params.toString()}`)
  }

  return (
    <div>
      <label
        htmlFor="search"
        className="mb-2 block text-sm font-medium text-gray-900"
      >
        Search
      </label>
      <input
        type="text"
        id="search"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        placeholder=" Search album..."
        onChange={handleChange}
        required
      />
    </div>
  )
}
