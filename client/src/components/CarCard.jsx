//this is car component and this page show all the car details  
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
const CarCard = ({car}) => {
 const currency=import.meta.env.VITE_CURRENCY; //yo chai env variable ko data ho.
 const navigate=useNavigate();
  return (
   <>
     {/* this function is used to go to the individual webpage of each car */}
     <div onClick={()=>{navigate(`/cardetail/${car._id}`);scrollTo(0,0)}}
      className='group rounded-xl overflow-hidden shadow-lg   transition-all duration-500
      cursor-pointe hover:translate-y-2 cursor-pointer'>
        {/* this is for image */}
        <div className='relative h-50 w-full overflow-hidden'>
            <img src={car.image} alt="car image" className='w-full h-full object-cover transition-all duration-500 ease   hover:scale-105' />
            {car.isAvailable&& <p className='absolute top-4 left-4 bg-blue-600 text-white text-xs
            px-2.5 py-1 rounded-full'>Available now</p>}
            <div className='absolute bottom-4 right-4 bg-black text-white px-3 py-2 rounded-lg'>
               <span className='font-semibold'>{currency}{car.pricePerDay} </span>
               <span className='text-sm text-white/80'>/day</span>
            </div>
        </div>
        {/* this is for details */}
        <div className="p-4 sm:p-5 ">
            {/* this is for car name */}
            <div>
            <h3 className="text-lg font-medium">{car.brand} {car.model} </h3>
            <p>{car.category} {car.year}</p>
           </div>
           <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 items-center h-20 text-gray-600">
                 <div className="flex items-center text-sm gap-1">  
                    {/* user icon */}
                    <img src={assets.users_icon}  alt="" className="h-4 " />
                    <span className="text-xs sm:text-sm">{car.seating_capacity} </span>
                 </div>
                    {/* fuel icon */}
                   <div className="flex items-center text-sm  gap-1">  
                    <img src={assets.fuel_icon}  alt="" className="h-4 " />
                    <span className="text-xs sm:text-sm">{car.fuel_type} </span>
                 </div>
                   {/* this is for car icon */}
                   <div className="flex items-center text-sm  gap-1">  
                    <img src={assets.car_icon}  alt="" className="h-4 " />
                    <span  className="text-xs sm:text-sm">{car.transmission} </span>
                 </div>
                   {/* this is for location  */}
                   <div className="flex items-center text-sm  gap-1">  
                    <img src={assets.location_icon}  alt="" className="h-4 " />
                    <span className="text-xs sm:text-sm">{car.location} </span>
                 </div>
           </div>
        </div>
     </div>
   </>
  )
}
//we can mount this component in any page.
export default CarCard
