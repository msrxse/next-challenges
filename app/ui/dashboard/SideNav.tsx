import NavLinks from '@/app/ui/dashboard/nav-links'
import { lusitana } from '@/app/ui/fonts'
import Link from 'next/link'

function SideNav() {
  return (
    <div className="flex flex-col px-3 py-4 md:px-2">
      <Link
        className={`${lusitana.className} mb-2 flex h-[48px] w-32 items-center justify-center rounded-md bg-blue-400 text-xl text-white md:w-full md:text-2xl`}
        href="/dashboard"
      >
        Logo
      </Link>
      {/* <div
        className={`${lusitana.className} w-32 md:w-full flex justify-center items-center h-[48px] bg-blue-400  text-white rounded-md`}
      >
        Logo
      </div> */}
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-y-2 md:space-x-0">
        <NavLinks />
      </div>
    </div>
  )
}

export default SideNav
