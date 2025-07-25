import  { useEffect, useState } from 'react'
import Title from './Title';
import { useAppcontext } from '../../context/AppContext';

const Managebooking = () => {
  const {axios,currency}=useAppcontext();
  const [bookings,setBookings]=useState([]);//to store the booking data.
  //function to fetch the data and store it in the store variable.


  //to fetch the owner booking.  //owner ko ma kati booking aako xa teo
  const fetchOwnerBookings=async()=>{
     try {
      const {data}=await axios('/api/booking/owner');
      data.success?setBookings(data.bookings):toast.error(data.message);
     } catch (error) {
      toast.error(error.message);
     }
  }



  //to check the changeBookingStatus
 const changeBookingStatus=async(bookingId,status)=>{
  try {
    const {data}=await axios.post('/api/booking/change-status',{bookingId,status});
    if(data.success){
      toast.success(data.message)
      fetchOwnerBookings();
    }else{
      toast.error(data.message);
    }
  } catch (error) {
    toast.error(error.message);
  }
 }
 




  useEffect(()=>{  //whenever the component get load it function the function inside it
    fetchOwnerBookings();
  },[])
  

  return (
     <>
      <div className='px-4 pt-10 md:px-10 w-full'>
         <Title title='Manage  Bookings' subTitle='Track all customer bookings,approve or cancel request, and manage booking status ' />
         {/* for the table  */}
         <div className=' border mt-6 rounded-lg  w-full max-w-5xl '>
          <table className='w-full text-left text-sm  text-gray-500'>
            {/* this is for table head  */}
              <thead className='text-gray-600  '>
                <tr>
                    {/* <th className=' font-medium'>Bike</th>
                    <th className='font-medium max-md:hidden '>Date Range</th>
                    <th className='font-medium'>Total</th>
                    <th className='font-medium max-md:hidden '>Payment</th>
                    <th className='font-medium'>Actions</th> */}
                     {/* <th className=' font-medium'>Bike</th> */}
                <th className='font-medium px-3 py-2'>Bike</th>
                <th className='font-medium px-3 py-2 max-md:hidden'>Date Range</th>
                <th className='font-medium px-3 py-2'>Total</th>
                <th className='font-medium px-3 py-2 max-md:hidden'>Name of user</th>
                <th className='font-medium px-3 py-2 max-md:hidden'>Payment</th>
                <th className='font-medium px-3 py-2'>Actions</th>
                </tr>
              </thead>
     
                 <tbody>

                    {
                      bookings.map((booking,index)=>{
                        return <tr key={index} className='border-t borderColor'>
                              
                              {/* first table data  */}
                             <td className='p-3 flex items-center gap-3'>
                                  <img src={booking.bike.image} alt="carimage" 
                                  className='h-12 w-12 aspect-square object-cover rounded-md'
                                  />
                                  {/* yeslai pani hidden gardiney mobile screen ma */}
                                  <p className='font-medium max-md:hidden'>{booking.bike.brand}{booking.bike.model} </p>
                             </td>
                                 
                              
                              {/* second data  */}
                              <td className='p-3 max-md:hidden'>
                                {booking.pickupDate.split('T')[0]} to {booking.returnDate.split('T')[0]}

                              </td>


                              {/* third data  */}
                              <td className='p-3 '>
                                 {currency}{booking.price}
                              </td>
                              {/* name of the user  */}
                              <td className='p-3 max-md:hidden'>
                                 {booking.user.firstname}{booking.user.lastname}
                              </td>

                             
                             {/* fourth data  */}
                               <td className='p-3 max-md:hidden'>
                                <span>offline </span>
                              </td>

                              {/* fifth data  */}
                              <td className='p-3 '>
                                {booking.status==='pending'?(
                                  <select onChange={(e)=> changeBookingStatus(booking._id,e.target.value)}
                                   value={booking.status} className='px-2 py-1.5 mt-1 text-gray-500 border
                                  rounded-md outline-none'>
                                  <option value="pending">Pending</option>
                                  <option value="cancelled">Cancel</option>
                                  <option value="confirmed">Confirmed</option>
                                  </select>
                                ):(
                                  <span className={`px-2 py-1 rounded-sm
                                   ${booking.status==='confirmed'?'bg-green-300 ':'bg-red-300'} 
                                    `}>{booking.status} </span>
                                )}

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

export default Managebooking
