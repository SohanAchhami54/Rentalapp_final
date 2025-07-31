import  { useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import { Button } from "../shadcnui/button"
import {assets} from '../assets/assets'
import { useAppcontext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
const Hero = () => {
   const navigate=useNavigate();
   const [pickupLocation,setPickupLocation]=useState('');
   const {pickupDate,setPickupDate,returnDate,setReturnDate}=useAppcontext(); 
   
   // const handleSearch=(e)=>{
   //     e.preventDefault();
   //     navigate('/bike?pickupLocation='+ pickupLocation +'&pickupDate='+pickupDate+'&returnDate='+returnDate);
   // }

  return (
   <>
      <div className='h-screen flex flex-col justify-center items-center gap-13 bg-light text-center'>
         <h1 className='text-5xl font-medium mt-25 sm:mt-30 md:mt-1'> Bikes on Rent</h1>
         {/* <form action="" 
          className='flex flex-col items-start md:items-center justify-between p-6 rounded-lg md:rounded-full w-full md:max-w-200 shadow-2xl '>
             <div className='flex flex-col md:flex-row items-start md:items-center gap-10 '> */}
                {/* this is for select list  */}
                 {/* <div className='flex flex-col items-start'>
                  <select name="vehicle" id="vehicle" value={pickupLocation}
                    onChange={(e)=>setPickupLocation(e.target.value)}
                     required>
                     <option value="">Pickup location</option>
                     <option value="Kathmandu">Kathmandu</option>
                     <option value="Bhaktapur">Bhaktapur</option>
                     <option value="lalitpur ">lalitpur</option>
                  </select>
               <p className='px-1 text-sm text-gray-500'>{pickupLocation?pickupLocation:'Select the location'}</p>
                 </div> */}
                   {/* this is for pickup date */}
                 {/* <div className='flex flex-col items-start gap-2'>
                    <label htmlFor="pickup-date">Pick-up Date</label>
                     <input value={pickupDate} onChange={(e)=>setPickupDate(e.target.value)}
                      type='date' id='pickup-date' required  min={new Date().toISOString().split('T')[0]}/>
                 </div> */}
                    {/* this is return date */}
                  {/* <div className='flex flex-col items-start gap-2'>
                    <label htmlFor="return-date">Return Date</label>
                     <input  value={returnDate} onChange={(e)=>setReturnDate(e.target.value)}
                      type='date' id='return-date' required />
                 </div>
                   <Button  
                    variant="outline">Search<IoMdSearch /> </Button>
             </div>
         </form> */}
          {/* <img src={assets.main_car}  alt="car" className='max-h-74' /> */}
          <div className='grid grid-cols-1  justify-center items-center'>
          {/* <img src={assets.yamahaBike22} alt='bike1' className='max-h-80' /> */}
          {/* <img src={assets.heroBike} alt='bike2' className='max-h-80' /> */}
          <img src={assets.ducatiBike} alt='bike2' className='max-h-80 w-full'  />
          </div>
         
   
      </div>
   </>
  )
}

export default Hero
