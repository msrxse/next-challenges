"use client";

import Link from "next/link";
import { BookmarkIcon } from "@heroicons/react/24/outline";
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
  { name: "Challenge 2", href: "/dashboard/challenge-2", icon: BookmarkIcon },
  { name: "Challenge 3", href: "/dashboard/challenge-3", icon: BookmarkIcon },
  { name: "Challenge 4", href: "/dashboard/challenge-4", icon: BookmarkIcon },
  { name: "Challenge 5", href: "/dashboard/challenge-5", icon: BookmarkIcon },
  { name: "Challenge 6", href: "/dashboard/challenge-6", icon: BookmarkIcon },
  { name: "Challenge 7", href: "/dashboard/challenge-7", icon: BookmarkIcon },
  { name: "Challenge 8", href: "/dashboard/challenge-8", icon: BookmarkIcon },
  { name: "Challenge 9", href: "/dashboard/challenge-9", icon: BookmarkIcon },
  { name: "Challenge 10", href: "/dashboard/challenge-10", icon: BookmarkIcon },
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
