import React from 'react'
import { dummyUserData } from '../../assets/assets';
import { Link } from 'react-router-dom';

const NavbarOwner = () => {
    const user=dummyUserData;
  return (
    <>
      <div className='flex justify-between items-center px-6 md:px-10 py-4 text-gray-500 bg-gray-700'>
       <Link to='/' className="text-2xl font-medium text-white">RentalApp</Link>
       {/* <p>Welcome,{user.name ||'Owner' } </p> */}
       <p className='text-white'>Welcome,Sohan</p>
        
      </div> 
      <hr /> 
    </>
  )
}

export default NavbarOwner
 