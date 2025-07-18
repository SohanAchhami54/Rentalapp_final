import React from 'react'
import { useAppcontext } from '../context/AppContext'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const {user}=useAppcontext();

  return (
    <>
      <div>
         { user? <Outlet/>:<Navigate to='/login'/>}
      </div>
    </>
  )
}

export default ProtectedRoute


