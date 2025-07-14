import { useState } from 'react';
import { assets, dummyUserData, ownerMenuLinks } from '../../assets/assets';
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const user = dummyUserData;
  const location = useLocation();
  const [image, setImage] = useState('');

  const updateImage = async () => {
    user.image = URL.createObjectURL(image);
    setImage('');
  };

  return (
    <div className='relative  flex flex-col items-center pt-8 max-w-13 md:max-w-55 w-full
      min-h-[900px]'>

      {/*  Save Button in top-right corner of sidebar */}
      {image && (
        <button
          onClick={updateImage}
          className='absolute top-3 right-4 flex items-center gap-1 px-2 py-1 bg-blue-700 text-white 
          text-xs rounded shadow'
        >
          Save
          <img src={assets.check_icon} width={13} alt="check icon" />
        </button>
      )}

      {/*  Profile Image */}
      <div className='relative w-16 h-16'>
        <label htmlFor="image" className='block w-full h-full cursor-pointer'>
          <img
            src={image ? URL.createObjectURL(image) : user?.image}
            className='h-9 md:h-14 mx-auto rounded-full object-cover'
            alt="host"
          />
          <input
            type='file'
            id='image'
            accept='image/*'
            hidden
            onChange={(e) => setImage(e.target.files[0])}
          />
          <div className='absolute inset-0 rounded-full bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition'>
            <img src={assets.edit_icon} alt="edit_icon" className='w-4 h-4' />
          </div>
        </label>
      </div>

      {/* User Name */}
      <p className='mt-2 text-xs sm:text-md md:text-base'>Sohan</p>

      {/* Menu Items */}
      <div className='w-full flex flex-col gap-4 mt-4'>
        {ownerMenuLinks.map((link, index) => {
          const isActive = link.path === location.pathname;
          return (
            <NavLink
              key={index}
              to={link.path}
              className={`flex mx-1 gap-2 py-2 px-4 rounded ${
                isActive
                  ? 'bg-blue-100 text-blue-500'
                  : 'bg-gray-300 text-gray-600'
              }`}
            >
              <img
                src={isActive ? link.coloredIcon : link.icon}
                alt="menu icon"
              />
              <span className='max-md:hidden'>{link.name}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
