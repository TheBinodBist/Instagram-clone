import React from 'react'
import { Outlet } from 'react-router-dom'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'

const MainLayout = () => {
  return (
    <div className="flex min-h-screen">
      <LeftSidebar />
      <div className="flex-1 p-6">
        <Outlet />
      </div>
      <div >
        <RightSidebar/>
      </div>
    </div>
  )
}

export default MainLayout

