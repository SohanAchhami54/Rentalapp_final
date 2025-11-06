import { useAppcontext } from '../../context/AppContext';

const NavbarOwner = () => {
    const {user}=useAppcontext();
  return (
    <>
      <div className='flex justify-center items-center px-6 md:px-10 py-1'>

       <p className='text-xl text-black font-medium '>Welcome! {user?.firstname}{user?.lastname} </p>
       {/* <p className='text-white'>Welcome,Sohan</p> */}
        
      </div>  
    </>
  )
}

export default NavbarOwner
 