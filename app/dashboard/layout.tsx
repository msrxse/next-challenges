import SideNav from '@/app/ui/dashboard/SideNav'

import React from 'react'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto">{children}</div>
    </div>
  )
}

export default Layout
