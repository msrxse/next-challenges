"use client";

import Link from "next/link";
import {
  BookmarkIcon,
  MusicalNoteIcon,
  WindowIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const links = [
  { name: "List of Refs", href: "/dashboard/list-of-refs", icon: BookmarkIcon },
  { name: "Stopwatch", href: "/dashboard/stopwatch", icon: BookmarkIcon },
  {
    name: "Image Carousel",
    href: "/dashboard/image-carousel",
    icon: BookmarkIcon,
  },
  {
    name: "Album List",
    href: "/dashboard/album-list",
    icon: MusicalNoteIcon,
  },
  { name: "Modal Dialog", href: "/dashboard/modal-dialog", icon: WindowIcon },
  { name: "Challenge 1", href: "/dashboard/challenge-1", icon: BookmarkIcon },
];

function NavLinks({}) {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}

export default NavLinks;
