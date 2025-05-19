'use client'

import Link from 'next/link'
import {
  BanknotesIcon,
  BookmarkIcon,
  CloudIcon,
  ForwardIcon,
  GiftTopIcon,
  HandRaisedIcon,
  ListBulletIcon,
  MusicalNoteIcon,
  NumberedListIcon,
  TableCellsIcon,
  TicketIcon,
  WindowIcon,
  KeyIcon,
  MapIcon,
} from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

const links = [
  {
    name: 'List of Refs',
    href: '/dashboard/list-of-refs',
    icon: ListBulletIcon,
  },
  { name: 'Stopwatch', href: '/dashboard/stopwatch', icon: HandRaisedIcon },
  {
    name: 'Image Carousel',
    href: '/dashboard/image-carousel',
    icon: ForwardIcon,
  },
  {
    name: 'Album List',
    href: '/dashboard/album-list',
    icon: MusicalNoteIcon,
  },
  { name: 'Modal Dialog', href: '/dashboard/modal-dialog', icon: WindowIcon },
  {
    name: 'Track a value',
    href: '/dashboard/track-a-value',
    icon: CloudIcon,
  },
  { name: 'Data Table', href: '/dashboard/data-table', icon: TableCellsIcon },
  { name: 'Tic-Tac-Toe', href: '/dashboard/tic-tac-toe', icon: TicketIcon },
  {
    name: 'Roving Focus List',
    href: '/dashboard/roving-focus-list',
    icon: NumberedListIcon,
  },
  { name: 'Banking App', href: '/dashboard/banking-app', icon: BanknotesIcon },
  { name: 'Product Page', href: '/dashboard/product-page', icon: GiftTopIcon },
  { name: 'Challenge 1', href: '/dashboard/challenge-1', icon: BookmarkIcon },
  { name: 'Login Page', href: '/dashboard/login-page', icon: KeyIcon },
  { name: 'CSS Grid', href: '/dashboard/css-grid', icon: MapIcon },
]

function NavLinks() {
  const pathname = usePathname()

  return (
    <div className="flex flex-wrap">
      {links.map((link) => {
        const LinkIcon = link.icon
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:w-full md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        )
      })}
    </div>
  )
}

export default NavLinks
