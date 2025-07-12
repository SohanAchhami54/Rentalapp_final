import React from 'react'
import { dummyUserData } from '../../assets/assets';
import { Link } from 'react-router-dom';

const NavbarOwner = () => {
    const user=dummyUserData;
  return (
    <>
      <div className='flex justify-between items-center px-6 md:px-10 py-4 text-gray-500 '>
       <Link to='/' className="text-2xl font-medium">RentalApp</Link>
       {/* <p>Welcome,{user.name ||'Owner' } </p> */}
       <p>Welcome,Sohan</p>
      </div>  
    </>
  )
}

export default NavbarOwner
 