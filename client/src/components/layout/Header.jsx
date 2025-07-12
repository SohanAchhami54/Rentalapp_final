// import { useState } from 'react';
// import {assets} from '../../assets/assets'
// import {  NavLink, useLocation, useNavigate } from 'react-router-dom'
// import { Button } from '../../aceternity/Button';

// const Header = () => {
//     const location=useLocation();
//     const [open,setOpen]=useState(false);
//     console.log(location);
//     const navigate=useNavigate();
//   return (
//    <>
//      <header className=' p-3 bg-slate-300'>
//         {/* rentalapp */}
//         <nav className='flex  justify-around '>
//           <NavLink to={'/'} className='text-2xl font-medium' >RentalApp</NavLink>
//           {/* Sets the element's height to 100vh &  only when screen size is ≤ 640px */}
//           {/* home cars booking dashboard */}
//            <ul className={`max-sm:fixed max-sm:h-screen max-sm:w-full  max-sm:top-0 right-0 flex flex-col 
//            sm:flex-row items-start sm:items-center gap-4 sm:gap-7 max-sm:p-4 transition-all duration-300 z-50
//            ${location.pathname==='/'?'bg-slate-300':'bg-white'}
        
//               ${!open?'max-sm:translate-x-0':'max-sm:translate-x-full' }
//            `}>
//               <NavLink to={'/'}>Home</NavLink>
//               <NavLink to={'/cars'}>Cars</NavLink>
//               <NavLink to={'/my-bookings'} >Booking</NavLink>
//               <div className='hidden lg:flex items-center px-1 gap-1  max-w-56'>
//                 <input type="text" placeholder='Search vehicle' className='border rounded-lg border-neutral-500 outline-none'/>
//                 {/* <img src={assets.search_icon} alt="search" /> */}
//               </div>
//               <div className='flex gap-2'>
//                 <button onClick={()=> navigate('/owner')}
//                  className='cursor-pointer '>Dashboard</button>
//                 <Button onClick={()=>}>Login</Button>
//               </div>

//            </ul>
        
//         </nav>
//      </header>
//    </>
//   )
// }

// export default Header
//    This specifies a translation value of zero. When applied to translate-x, it means the element will not be shifted horizontally.
  import { useState } from "react";
   import { Button } from '../../aceternity/Button';
  import { GiHamburgerMenu } from "react-icons/gi";
  import { RxCross1 } from "react-icons/rx";
  import { NavLink, useLocation } from "react-router-dom";

  const Header = () => {
    const [open,setOpen]=useState(false);
    const [showLogin,setShowLogin]=useState(false);//setter function that will open the login form.
    const isOwnerPath=useLocation().pathname.startsWith('/owner'); //owner path.
    return (
      <header className="bg-neutral-200">
        {!isOwnerPath&&
        <nav className='flex justify-between px-2 md:justify-around p-3 font-medium'>
        <h1 className="text-2xl font-medium"><NavLink href='/'>RentalApp</NavLink></h1>
         {!open&&(
            <button className="md:hidden text-xl" onClick={()=>setOpen(true)}>
          <GiHamburgerMenu />
          </button>
        )}  
          <section className="hidden md:flex">
          <ul className='flex gap-10 justify-center items-center'>
          <NavLink to={'/'} ><li>Home</li> </NavLink> 
          <NavLink to={'/car'} ><li>Car</li></NavLink> 
          <NavLink to={'/mybooking'} > <li>My Booking</li> </NavLink> 
           <NavLink to={'/owner'} ><li>Dashboard</li></NavLink>
          <li><Button onClick={()=>setShowLogin(true)}>Login</Button></li>
            </ul>
          </section>  
          {open&&(
              <section className="flex flex-col gap-3 z-10 fixed right-0 top-0 h-[100vh] pt-2 pl-2 bg-neutral-500 ">
              <button onClick={()=>setOpen(false)} >  <RxCross1 /></button> 
            <ul className='flex flex-col gap-10'>
            <NavLink to={'/'} onClick={()=>setOpen(false)}><li>Home</li> </NavLink> 
            <NavLink to={'/car'}  onClick={()=>setOpen(false)}><li>Car</li></NavLink> 
            <NavLink to={'/mybooking'}   onClick={()=>setOpen(false)}> <li>My Booking</li> </NavLink> 
            <Button  onClick={()=>setOpen(false)}>Login</Button>
            </ul>
          </section>
          )}
        
        </nav>
  }
      </header>
    )
  }

  export default Header

