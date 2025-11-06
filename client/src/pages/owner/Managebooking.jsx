import  { useEffect, useState } from 'react'
import Title from './Title';
import { useAppcontext } from '../../context/AppContext';
import toast from 'react-hot-toast';
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
 const changeBookingStatus = async (bookingId, status) => {
		try { 
      // for the database 
			const { data } = await axios.post("/api/booking/change-status", {
				bookingId,
				status,
			});
			if (data.success) {
				toast.success(data.message);
      //this is for frontend
				setBookings((prev) =>
					prev.map((b) => (b._id === bookingId ? { ...b, status } : b)),
				);
			} else {
				toast.error(data.message);
			}
		} catch (error) {
			toast.error(error.message);
		}
	};

const paymentAllow = async (bookingId, payallow, paymentStatus) => {
  try {
    //  If payment is already done, block unclicking
    if (paymentStatus === "paid" && payallow === false) {
      toast.error("Payment already done. Cannot unclick the button.");
      // Revert checkbox UI immediately
      setBookings((prev) =>
        prev.map((b) =>
          b._id === bookingId ? { ...b, paymentAllowed: true } : b
        )
      );
      return;
    }

    // If payment is unpaid and host tries to unclick, ask confirmation
    if (paymentStatus === "unpaid" && payallow === false) {
      const confirmUnclick = window.confirm(
        "Are you sure you want to change the status?"
      );
      if (!confirmUnclick) {
        // Revert back if cancelled
        setBookings((prev) =>
          prev.map((b) =>
            b._id === bookingId ? { ...b, paymentAllowed: true } : b
          )
        );
        return;
      }
    }

    //  Proceed with normal update
    const { data } = await axios.post("/api/booking/allowpayment", {
      bookingId,
      payallow,
    });

    if (data.success) {
      toast.success(data.message);
      setBookings((prev) =>
        prev.map((b) =>
          b._id === bookingId ? { ...b, paymentAllowed: payallow } : b
        )
      );
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    toast.error("Failed to update payment permission");
  }
};

  useEffect(()=>{  //whenever the component get load it function the function inside it
    fetchOwnerBookings();
  },[])
  

  return (
     <>
      <div className='px-4 pt-5 md:px-10 w-full'>
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
                <th className='font-medium px-3 py-2 max-md:hidden'>P.Score</th>
                <th className='font-medium px-3 py-2'>Actions</th>
                </tr>
              </thead>
     
                 <tbody>

                    {
                      bookings.map((booking,index)=>{
                        return <tr key={index} className='border-t borderColor'>
                              
                              {/* first table data  */}
                             <td className='p-3 flex items-center gap-3'>
                                  <img src={booking.bike.image} alt="bikeimage" 
                                  className='h-12 w-12 as pect-square object-cover rounded-md'
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
                              <span className={` p-2
                               ${
                                 booking.payment.pricestatus==="unpaid"
                                 ?"bg-red-400 text-black  rounded-lg"
                                 :"bg-green-400 text-black rounded-lg"
                               }
                              
                              `}
                              
                              
                              > {booking.payment.pricestatus}</span> 
                              </td>

                              {/* fifth data  */}
                               <td className='p-3 max-md:hidden'>
                                {booking.priorityScore} 
                                 <input type="checkbox"
                                 checked={booking.paymentAllowed||false}
                                 onChange={(e)=>paymentAllow(booking._id,e.target.checked,booking.payment.pricestatus)}
                                 />
                                </td>

                              {/* Sixth data  */}
                            <td className="p-3 ">
										   	<select
                       onChange={(e) => changeBookingStatus(booking._id, e.target.value)}
                       value={booking.status}
                       className={`px-2 py-1.5 mt-1 text-gray-700 border rounded-md outline-none
                         ${
                           booking.status === "confirmed"
                             ? "bg-green-200"
                             : booking.status === "cancelled"
                             ? "bg-red-200"
                             : "bg-white"
                         }`}
                     >
                           <option value="pending">Pending</option>
                           <option value="cancelled">Cancelled</option>
                           <option value="confirmed">Confirmed</option>
                           </select>									</td>


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
