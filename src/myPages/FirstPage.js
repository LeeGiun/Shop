import React from 'react'
import { Outlet } from 'react-router-dom'

export default function FirstPage() {
  return ( 
    <div>
      <h1>First Page</h1>
      <Outlet></Outlet>
    </div>
  )
}


// <ul className='lnb'>
// <li style={{color: 'blue', fontWeight: 'blod', fontSize: 20}}>Login</li>
// <li>Join</li>
// <li>Search</li>
// <li>Sitemap</li>
// </ul>
