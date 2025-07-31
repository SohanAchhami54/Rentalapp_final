import  { useState } from 'react'
import Title from './Title';
import { assets } from '../../assets/assets';
import { Input } from '../../shadcnui/input';
import { Textarea } from "../../shadcnui/textarea"
import { Button } from '../../shadcnui/button';
import { useAppcontext } from '../../context/AppContext';
import toast from 'react-hot-toast'

const Addbike = () => {
  const {axios,currency}=useAppcontext();
  const [image,setImage]=useState(null);//this is for image.
  const [bike,setBike]=useState({ //bike details
    brand:'',
    model:'',
    year:0,
    pricePerDay:0,
    category:'',
    transmission:'',
    fuel_type:'',
    location:'',
    description:'',
  }) ;
 const [isloading,setIsLoading]=useState(false);
 //whenever we will submit the form isloading will become true
  const handleSubmit=async(e)=>{
    e.preventDefault();
    //if the data is already being submitted then this will be true and it will return the null . 
    if(isloading) return null; //if it is true.
    setIsLoading(true);
    try{
      const formData=new FormData();
       formData.append('image',image);
       formData.append('bikeData',JSON.stringify(bike))

      const {data}=await axios.post('/api/owner/addbike',formData);
      if(data.success){
        toast.success(data.message);
        setImage(null);
        setBike({
          brand:'',
         model:'',
         year:'',
         pricePerDay:0,
         category:'',
         transmission:'',
         fuel_type:'',
         location:'',
         description:'',
             })
      }else{
        toast.error(data.message);
      }
    }catch(error){
        toast.error(error.message);
    }finally{
      setIsLoading(false);
    }

  } 

  return (
    <>
         <div className='px-4 py-10 md:px-10   '>
          <Title title='Add new Bike here' subTitle='List your bike and the real money.' />
           <form action="" onSubmit={handleSubmit} className='mt-6 flex flex-col space-y-8'>
                {/* this is for the bike image  */}


                <div className='flex gap-3 justify-center items-center  w-60 mb-3'>
                  {/* bike image */} 
                  <label htmlFor="bikeimage">
                  {/* the image will appear here after we select the image */}
                  <img src={image?URL.createObjectURL(image):assets.upload_icon} alt="Bikeimage" 
                  className='h-14 w-16 object-cover rounded cursor-pointer ' />
                  
                  {/* this is for uploading the real image */}
                  <input type="file" id='bikeimage' accept='image/*'
                   onChange={(e)=>setImage(e.target.files[0])}
                  hidden/>
                </label>
                {/* upload bike */}
                <p className='text-sm text-gray-500'>Upload the picture of your Bike</p>
                </div>



                {/* this is for bike brand and model display in the row format. */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div className='flex flex-col w-full'>
                      <label htmlFor="brand">Brand:</label>
                      <Input type='text' placeholder='e.g. pulsar,honda,ducati' value={bike.brand}
                        id='brand' onChange={(e)=>setBike({...bike,brand:e.target.value})}
                      className='' />
                  </div>
                  <div className='flex flex-col w-full'>
                      <label htmlFor="model">Model:</label>
                      <Input type='text' placeholder='e.g. v3,v5' value={bike.model}
                        id='model'    onChange={(e)=>setBike({...bike,model:e.target.value})}
                      className='' />
                  </div>
                </div>


               {/* bike year, Price, Category  */}

               <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                   {/* bike year */}
                     <div className='flex flex-col w-full'>
                      <label htmlFor="year">Year:</label>
                      <Input type='number' placeholder='e.g 2025' value={bike.year}
                        id='year'    onChange={(e)=>setBike({...bike,year:e.target.value})}
                      className='' />
                  </div>
 
                  {/* bike price  */}
                   <div className='flex flex-col w-full'>
                      <label htmlFor="dailyPrice">Dailyprice:</label>
                      <Input type='number' placeholder='100' value={bike.pricePerDay}
                        id='dailyPrice'    onChange={(e)=>setBike({...bike,pricePerDay:e.target.value})}
                      className='' />
                  </div>

                  {/* bike category  */}
                 <div className='flex flex-col w-full'>
                    <label htmlFor="category">Category:</label>
                      <select onChange={(e)=>{setBike({...bike,category:e.target.value})}} 
                      value={bike.category}
                      name="category" id="category" className='border px-1   py-1.5 rounded'>
                      <option >Normal</option>
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
                      <select onChange={(e)=>{setBike({...bike,transmission:e.target.value})}} 
                      value={bike.transmission}
                      name="transmission" id="transmission" className='border px-1 py-1.5 rounded'>
                         {/* <option value="">Select Transmission</option> */}
                       <option value="manual">Manual</option>
                      <option value="automatic">Automatic</option>
                      <option value="semi-automatic">Semi-Automatic</option>
                    </select>
                    </div>

                    
                  <div className='flex flex-col w-full'>
                    <label htmlFor="fueltype">Fuel:</label>
                      <select onChange={(e)=>{setBike({...bike,fuel_type:e.target.value})}} 
                      value={bike.fuel_type}
                      name="fueltype" id="fueltype" className='border px-1 py-1.5 rounded'>
                        <option value="">Select Fuel Type</option>
                        <option value="petrol">Petrol</option>
                        <option value="diesel">Diesel</option>
                        <option value="electric">Electric</option>
                        <option value="hybrid">Hybrid</option>
                    </select>
                    </div>






              </div>


              {/* this is for the location */}
              <div className='flex flex-col w-full'>
                <label htmlFor="location">Location</label>
                <Input  value={bike.location} id='location'
                onChange={(e)=>setBike({...bike,location:e.target.value})}
                placeholder='Enter the location' />
              </div>

               {/* this is for the description of the vehicle */}
              <div className='flex flex-col w-full'>
                    <label htmlFor="description">Description</label>
                  <Textarea id='description' placeholder='100 milage'
                   value={bike. description} onChange={(e)=>setBike({...bike,description:e.target.value})} />
              </div>


           <Button 
            className='text-lg text-gray-500 bg-black/25'>{isloading?'Listing....':' List your Bike'}
            </Button>
                 
          </form>
          </div>   
    </>
  )
}

export default Addbike
