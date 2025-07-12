import React from 'react'
import Sidebar from './Sidebar'
import NavbarOwner from './NavbarOwner'
import { Outlet } from 'react-router-dom'

const OwnerLaout = () => {
  return (
   <>
    <div className='flex flex-col'>
       <NavbarOwner/>
       <div className='flex'>
        <Sidebar/>
        <Outlet/>
       </div>
    </div>
    
   </>
  )
}

export default OwnerLaout
