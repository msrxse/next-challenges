"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value;
    const params = new URLSearchParams(searchParams.toString());
    if (q) {
      params.set("search", q);
    } else {
      params.delete("search");
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <div>
      <label
        htmlFor="search"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Search
      </label>
      <input
        type="text"
        id="search"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder=" Search album..."
        onChange={handleChange}
        required
      />
    </div>
  );
}
