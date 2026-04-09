import React from 'react'
import { NavLink } from 'react-router'

function MyNavLink({to, children}) {
  return (
           <NavLink to={to} className={({isActive}) => `font-semibold pb-2 ${isActive ? "text-purple-500 border-b-2 border-purple-500" : ""}` }>{children}</NavLink>

  )
}

export default MyNavLink