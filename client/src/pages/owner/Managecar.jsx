import React, { useEffect, useState } from 'react'
import { dummyCarData } from '../../assets/assets'
import Title from './Title';
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
const Managecar = () => {
const currency=import.meta.env.VITE_CURRENCY;
const [cars,setCars]=useState([]);
const fetchOwnerCars=async()=>{
  setCars(dummyCarData);
}

useEffect(()=>{  //whenver the component is loaded.
  fetchOwnerCars();
},[])
  return (
    <>
      <div className='px-4 pt-10 md:px-10 w-full'>
         <Title title='Manage Bike' subTitle='View all the bike, update their details,or remove them from the booking platform. ' />
         {/* for the table  */}
         <div className=' border mt-6 rounded-lg  w-full max-w-5xl '>
          <table className='w-full text-left text-sm  text-gray-500'>
            {/* this is for table head  */}
              <thead className='text-gray-600  '>
                <tr>
                    <th className=' font-medium px-3 py-2 '>Bike</th>
                    <th className='font-medium px-3 py-2 max-md:hidden '>Category</th>
                    <th className='font-medium px-3 py-2'>Price</th>
                    <th className='font-medium px-3 py-2 max-md:hidden '>Status</th>
                    <th className='font-medium px-3 py-2'>Action</th>
                </tr>
              </thead>
     
                 <tbody>

                    {
                      cars.map((car,index)=>{
                        return <tr key={index} className='border-t borderColor'>
                          {/* td ma flex so  */}
                          
                               {/* first data  */}
                                <td className='p-3 flex items-center gap-3'>
                                {/* first element  */}
                                 <img src={car.image}  className='h-12 w-12 aspect-square object-cover rounded-md' alt="" />
                                 {/* mobile ma chai yo hidden hunxa  */}
                                <div className='max-md:hidden flex flex-col gap-1'>
                                 <p className='font-medium'>{car.model}{car.brand} </p>
                                 <p className='font-medium'>{car.transmission} </p>
                                </div>
                                </td>

                               {/* second data  */}
                                <td className='p-3 max-md:hidden'>{car.category} </td>

                                {/* third data  */}
                                <td className='p-3'>{currency} {car.pricePerDay}/day </td>

                                {/* fourth data  */}
                                 <td className='max-md:hidden p-3'>
                                   <span  className={`px-2 py-1 rounded ${car.isAvaliable?'bg-green-300':'bg-red-300'}`}
                                   >{car.isAvaliable?'Available':'Unavailable'} </span>
                                  </td>

                               {/* fifth data  */}
                                   <td className='p-3'>
                                    <div className='flex gap-2 justify-around items-center'>
                                    {car.isAvaliable ? <FaRegEyeSlash className='text-lg'/>:<FaRegEye    className='text-lg'  />}
                                     <MdDeleteForever className='text-xl text-red-600' />

                                   </div>
                                   </td>
                                  

                                
                                      
                        </tr>
                      })
                    }
                 
                 </tbody>

          </table>
              
         </div>
      </div>
    </>
  )
}

export default Managecar
