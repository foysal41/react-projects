import React from 'react'
import { Outlet } from 'react-router'

export default function RootLayout() {
  return (
    <div>
        <div>Navbar</div>
        <Outlet></Outlet>
        <div>Footer</div>
    </div>
  )
}
