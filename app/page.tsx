import { lusitana } from '@/app/ui/fonts'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="h-screen content-center justify-items-center">
        <p
          className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
        >
          Challenges Collection
        </p>

        <Link
          className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          href="/dashboard"
        >
          <span>Dashboard</span> <ArrowRightIcon className="w-5 md:w-6" />
        </Link>
      </div>
    </main>
  )
}
