export function SkeletonList() {
  return (
    <ul className="mt-4 space-y-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <li key={i} className="h-5 w-2/3 animate-pulse rounded bg-gray-200" />
      ))}
    </ul>
  )
}
