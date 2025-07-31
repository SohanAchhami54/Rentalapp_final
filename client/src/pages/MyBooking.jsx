//this is for the booking data.
import { useEffect, useState } from "react"
import Title from "../components/Title";
import { useAppcontext } from "../context/AppContext";
import toast from "react-hot-toast";

const MyBooking = () => {
const {axios,user,currency}=useAppcontext();
const [bookings,setBookings]=useState([]);
const fetchMyBookings=async()=>{
    try {
      const {data}=await axios.get('/api/booking/user');
      console.log(data);  
      if(data.success){
        setBookings(data.bookings); 
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message);
    }
} 
//whennever we load this component this useEffect will run
//and it will  fetch the dummyMyBookingsData 
//and set the value of the bookings state.
 useEffect(()=>{
   user && fetchMyBookings();
},[user])
  return (
   <>
   {/* max-w-7xl sets Limits the maximum width of the container */}
   <div className="px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 mt-16 text-sm  max-w-7xl h-screen">
      {/* this is the title components */}
       <Title title='My Bookings' subTitle='View and manage your all vehicle bookings'/>
       
       {/* Bookings data */}
       <ul>
        {
          bookings.map((booking,index)=>{
            // four oota grid ma convert gardeko xu 
            return <li key={booking._id}className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 rounded-lg
            border border-gray-400 mt-5">
              {/* car image + info */}
               {/* <div className=""> */}
                <div className="">
                  {/* The aspect-video class in Tailwind CSS sets an element's aspect ratio to 16:9, commonly used for videos. */}
                   <img src={booking.bike.image} alt="booking car" className="w-full h-auto aspect-video object-cover"/>
                     <p className="text-lg font-medium mt-2">{booking.bike.brand } {booking.bike.model} </p>
                     <p className="text-gray-500">{booking.bike.year}.{booking.bike.category}.{booking.bike.location} </p>
                </div>
                {/* booking pending information */}
                {/* it take two column md:col-span-2 */}
                  <div className="md:col-span-2"> 
                      {/* this is booking and pending */}
                      <div className="flex items-center gap-2"> 
                           <p className="px-3 py-1.5 bg-light rounded">Booking #{index+1} </p>
                           <p className={`px-2 py-1 text-sm rounded-full ${booking.status==='confirmed'?'bg-green-500':'bg-red-500'}`}>{booking.status}  </p>
                      </div>
                      {/* this is for pickup date  */}
                      <div className="flex items-start gap-2 mt-2">
                           {/* <img src={assets.calendar_icon_colored} alt="calender" 
                             className="w-4 h-4 mt-1"/> */}
                             {/* this is for rental period */}
                             <div>
                              <p className="text-gray-500">Rental Period</p>
                              {/* take the date part only before T  not after that */}
                              <p>{booking.pickupDate.split('T')[0]} To {booking.returnDate.split('T')[0]} </p>
                             </div>
                             
                      </div>
                         {/* this is for the return location */}
                        <div className="flex items-start gap-2 mt-2">
                           {/* <img src={assets.location_icon_colored} alt="calender" 
                             className="w-4 h-4 mt-1"/> */}
                             {/* this is for rental period */}
                             <div>
                              <p className="text-gray-500">Pickup Location</p>
                              {/* take the date part only before T  not after that */}
                              <p>{booking.bike.location} </p>
                             </div>
                             
                      </div>
                  </div> 
                   
                   {/* this is for price data */}
                      <div className="flex flex-col justify-between">
                        <div className="space-y-2 text-sm text-gray-500 text-right">
                          <p>Total Price</p>
                          <h1 className="text-2xl font-bold text-blue-700">{currency} {booking.price} </h1>
                          <p>Booked on {booking.createdAt.split('T')[0] } </p>
                        </div>

                      </div>
              {/* </div> */}
                  
            </li>
           
          })
        }
       </ul>
   </div>
     

   </>
  )
}

export default MyBooking
