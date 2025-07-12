import  { useState } from 'react'
import { assets, dummyUserData, ownerMenuLinks } from '../../assets/assets'
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const user=dummyUserData;
    const location=useLocation();
    const [image,setImage]=useState('');

    const updateImage=async()=>{
        user.image=URL.createObjectURL(image);
        setImage('');
    }

  return (
    <div className='flex flex-col  items-center  bg-neutral-200 min-h-screen'>
        <div className='relative ml-3'>
            <label htmlFor="image">
                <img src={image?URL.createObjectURL(image):user?.image} className='w-8 sm:w-15 flex rounded-full' alt="host" />
                {/* it is used to update the user profile image */}
                <input type='file' id='image' accept='image/*' hidden onChange={(e)=>setImage(e.target.files[0])} />
                	{/* Stores the selected file in the image state */}

                <div className='absolute hidden top-0 right-0 left-0 bottom-0 rounded-full '>
                    <img src={assets.edit_icon} alt="edit_icon" />
                </div>    
            </label>
        </div>
       {image&&(
        <button className='absolute top-0 right-0 flex p-2 gap-1 bg-blue-700 cursor-pointer'
        >Save <img src={assets.check_icon} width={13} onClick={updateImage} alt="" /> </button>
       )}
       {/* <p className='text-xs sm:text-md md:text-base'>{user?.name} </p> */}
       <p className='text-xs sm:text-md md:text-base'>Sohan </p>
        <div className='w-full flex flex-col gap-4 mt-2'>
            {ownerMenuLinks.map((link,index)=>{
               return  <NavLink key={index} to={link.path} className={`flex mx-1 gap-2 py-2 px-4    ${link.path===location.pathname?'bg-blue-100 text-blue-500':'bg-gray-300 text-gray-600'}`} >
                    <img src={link.path===location.pathname?link.coloredIcon:link.icon} alt="car icon"/>
                    <span className='max-md:hidden'>{link.name}</span>
                    {/* <div></div> */}
                </NavLink>

            })}

        </div>

         
    </div>
  )
}

export default Sidebar
 