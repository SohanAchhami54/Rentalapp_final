import React, { useState } from 'react'
import Title from './Title';
import { assets } from '../../assets/assets';
import { Input } from '../../shadcnui/input';
import { Textarea } from "../../shadcnui/textarea"
import { Button } from '../../shadcnui/button';

const Addcar = () => {
  const [image,setImage]=useState(null);//this is for image.
  const [car,setCar]=useState({ //car details
    brand:'',
    model:'',
    year:0,
    pricePerDay:0,
    category:'',
    transmission:'',
    fuel_type:'',
    seating_capacity:0,
    location:'',
    description:'',

  }) ;

  const handleSubmit=(e)=>{
    e.preventDefault();
  }

  return (
    <>
         <div className='px-4 py-10 md:px-10   '>
          <Title title='Add new Bike here' subTitle='List your car and the real money.' />
           <form action="" onSubmit={handleSubmit} className='mt-6 flex flex-col space-y-8'>
                {/* this is for the car image  */}


                <div className='flex gap-3 justify-center items-center  w-60 mb-3'>
                  {/* car image */} 
                  <label htmlFor="carimage">
                  {/* the image will appear here after we select the image */}
                  <img src={image?URL.createObjectURL(image):assets.upload_icon} alt="Carimage" 
                  className='h-14 w-16 object-cover rounded cursor-pointer ' />
                  
                  {/* this is for uploading the real image */}
                  <input type="file" id='carimage' accept='image/*'
                   onChange={(e)=>setImage(e.target.files[0])}
                  hidden/>
                </label>
                {/* upload car */}
                <p className='text-sm text-gray-500'>Upload the picture of your Bike</p>
                </div>



                {/* this is for car brand and model display in the row format. */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div className='flex flex-col w-full'>
                      <label htmlFor="brand">Brand:</label>
                      <Input type='text' placeholder='e.g. pulsar,honda,ducati' value={car.brand}
                        id='brand' onChange={(e)=>setCar({...car,brand:e.target.value})}
                      className='' />
                  </div>
                  <div className='flex flex-col w-full'>
                      <label htmlFor="model">Model:</label>
                      <Input type='text' placeholder='e.g. v3,v5' value={car.model}
                        id='model'    onChange={(e)=>setCar({...car,model:e.target.value})}
                      className='' />
                  </div>
                </div>


               {/* Car year, Price, Category  */}

               <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                   {/* car year */}
                     <div className='flex flex-col w-full'>
                      <label htmlFor="year">Year:</label>
                      <Input type='number' placeholder='e.g. v3,v5' value={car.year}
                        id='year'    onChange={(e)=>setCar({...car,year:e.target.value})}
                      className='' />
                  </div>
 
                  {/* car price  */}
                   <div className='flex flex-col w-full'>
                      <label htmlFor="dailyPrice">Dailyprice:</label>
                      <Input type='number' placeholder='100' value={car.pricePerDay}
                        id='dailyPrice'    onChange={(e)=>setCar({...car,pricePerDay:e.target.value})}
                      className='' />
                  </div>

                  {/* car category  */}
                 <div className='flex flex-col w-full'>
                    <label htmlFor="category">Category:</label>
                      <select onChange={(e)=>{setCar({...car,category:e.target.value})}} 
                      value={car.category}
                      name="category" id="category" className='border px-1   py-1.5 rounded'>
                      <option value="sport">Sport</option>
                      <option value="adventure">Adventure</option>
                      <option value="Touring">Touring</option>
                      <option value="scooter">Scooter</option>
                      <option value="offroad">Offroad</option>
                      <option value="eletric">Electric</option>
                    </select>
                    </div>
                  </div>
   

        {/* transmission seat and fuel  */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          
             <div className='flex flex-col w-full'>
                    <label htmlFor="transmission">Transmission:</label>
                      <select onChange={(e)=>{setCar({...car,transmission:e.target.value})}} 
                      value={car.transmission}
                      name="transmission" id="transmission" className='border px-1 py-1.5 rounded'>
                         <option value="">Select Transmission</option>
                       <option value="manual">Manual</option>
                      <option value="automatic">Automatic</option>
                      <option value="semi-automatic">Semi-Automatic</option>
                    </select>
                    </div>

                    
                  <div className='flex flex-col w-full'>
                    <label htmlFor="fueltype">Fuel:</label>
                      <select onChange={(e)=>{setCar({...car,fuel_type:e.target.value})}} 
                      value={car.fuel_type}
                      name="fueltype" id="fueltype" className='border px-1 py-1.5 rounded'>
                        <option value="">Select Fuel Type</option>
                        <option value="petrol">Petrol</option>
                        <option value="diesel">Diesel</option>
                        <option value="electric">Electric</option>
                        <option value="hybrid">Hybrid</option>
                    </select>
                    </div>


                      <div className='flex flex-col w-full'>
                      <label htmlFor="capacity">Seating Capacity:</label>
                      <Input type='number' id='capacity' placeholder='100' value={car. seating_capacity}
                           onChange={(e)=>setCar({...car, seating_capacity:e.target.value})}
                      className='' />
                  </div>



              </div>


              {/* this is for the location */}
              <div className='flex flex-col w-full'>
                <label htmlFor="location">Location</label>
                <Input  value={car.location} id='location'
                onChange={(e)=>setCar({...car,location:e.target.value})}
                placeholder='Enter the location' />
              </div>

               {/* this is for the description of the vehicle */}
              <div className='flex flex-col w-full'>
                    <label htmlFor="description">Description</label>
                  <Textarea id='description' placeholder='100 milage'
                   value={car. description} onChange={(e)=>setCar({...car,description:e.target.value})} />
              </div>


           <Button className='text-lg text-gray-500 bg-black/25'>List your Bike</Button>
                 
          </form>
          </div>   
    </>
  )
}

export default Addcar
