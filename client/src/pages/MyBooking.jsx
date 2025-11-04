// //this is for the booking data.
// import { useEffect, useState } from "react"
// import Title from "../components/Title";
// import { useAppcontext } from "../context/AppContext";
// import toast from "react-hot-toast";

// const MyBooking = () => {
// const {axios,user,currency}=useAppcontext();
// const [bookings,setBookings]=useState([]);
// const [paymentData,setPaymentData]=useState({});
// const [now,setNow]=useState(new Date());
// const fetchMyBookings=async()=>{
//     try {
//       const {data}=await axios.get('/api/guestbooking/user');
//       console.log(data);  
//       if(data.success){
//         // setBookings(data.bookings); 
//         setBookings(data.bookings); 


//       }else{
//         toast.error(data.message)
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
// } 
// //whennever we load this component this useEffect will run
// //and it will  fetch the dummyMyBookingsData 
// //and set the value of the bookings state.
//  useEffect(()=>{
//    user && fetchMyBookings();
// },[user])

//   //update the current time every second
//  useEffect(()=>{
//   const interval=setInterval(()=>setNow(new Date()),1000);
//   return ()=>clearInterval(interval);
//  },[]);
// //helper to format remaining time
// const formatRemainingTime=(returnDate)=>{
//   const diff=new Date(returnDate)-now;
//   if(diff<=0) return "Expired";
//   const days=Math.floor(diff/(1000*60*60*24));
//   const hours=Math.floor(diff/(1000*60*60)%24);
//   const minutes=Math.floor(diff/(1000*60)%60);
//   const seconds=Math.floor(diff/(1000)%60);
//   return `${days}d ${hours}h ${minutes}m ${seconds}s`;
// }


//   return (
//    <>
//    {/* max-w-7xl sets Limits the maximum width of the container */}
//    <div className="px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 mt-16 text-sm  max-w-7xl min-h-screen">
//       {/* this is the title components */}
//        <Title title='My Bookings' subTitle='View and manage your all vehicle bookings'/>
       
//        {/* Bookings data */}
//        <ul>
//         {
//           bookings.map((booking,index)=>{
//             // four oota grid ma convert gardeko xu 
//             return <li key={booking._id}className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 rounded-lg
//             border border-gray-400 mt-5">
//               {/* bike image + info */}
//                {/* <div className=""> */}
//                 <div className="">
//                   {/* The aspect-video class in Tailwind CSS sets an element's aspect ratio to 16:9, commonly used for videos. */}
//                    <img src={booking.bike.image} alt="booking bike" className="w-full h-auto aspect-video object-cover"/>
//                      <p className="text-lg font-medium mt-2">{booking.bike.brand } {booking.bike.model} </p>
//                      <p className="text-gray-500">{booking.bike.year}.{booking.bike.category}.{booking.bike.location} </p>
//                 </div>
//                 {/* booking pending information */}
//                 {/* it take two column md:col-span-2 */}
//                   <div className=""> 
//                       {/* this is booking and pending */}
//                       <div className="flex items-center gap-2"> 
//                            <p className="px-3 py-1.5 bg-light rounded">Booking #{index+1} </p>
//                            <p className={`px-2 py-1 text-sm rounded-full ${booking.status==='confirmed'?'bg-green-500':'bg-red-500'}`}>{booking.status}  </p>
//                       </div>
//                       {/* this is for pickup date  */}
//                       <div className="flex items-start gap-2 mt-2">
//                            {/* <img src={assets.calendar_icon_colored} alt="calender" 
//                              className="w-4 h-4 mt-1"/> */}
//                              {/* this is for rental period */}
//                              <div>
//                               <p className="text-gray-500">Rental Period</p>
//                               {/* take the date part only before T  not after that */}
//                               <p>{booking.pickupDate.split('T')[0]} To {booking.returnDate.split('T')[0]} </p>
//                              </div>
                             
//                       </div>
//                          {/* this is for the return location */}
//                         <div className="flex items-start gap-2 mt-2">
//                            {/* <img src={assets.location_icon_colored} alt="calender" 
//                              className="w-4 h-4 mt-1"/> */}
//                              {/* this is for rental period */}
//                              <div>
//                               <p className="text-gray-500">Pickup Location</p>
//                               {/* take the date part only before T  not after that */}
//                               <p>{booking.bike.location} </p>
//                              </div>
                             
//                       </div>
//                   </div> 

//                   {/* this is for the time */}
                  
//                   <div className="flex  flex-col mx-auto">
//                     <div>
//                     <p className="text-gray-500 text-sm md:text-lg">Time Remaining</p>
//                     {booking.status==='confirmed'?(
//                         <p>{formatRemainingTime(booking.returnDate)} </p>
//                     ):(
//                       <p className="text-gray"> Waiting for host confirmation </p>
//                     )
//                     }
//                   </div>
//                   {/* <div>
//                         <form
//                       action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
//                         method="POST"
//                           >
//                 <input type="text" id="amount" name="amount" value="100" required />
//                 <input type="text" id="tax_amount" name="tax_amount" value="10" required />
//                 <input type="text" id="total_amount" name="total_amount" value="110" required />
//                 <input type="text" id="transaction_uuid" name="transaction_uuid" value="241028" required />
//                 <input type="text" id="product_code" name="product_code" value="EPAYTEST" required />
//                 <input type="text" id="product_service_charge" name="product_service_charge" value="0" required />
//                 <input type="text" id="product_delivery_charge" name="product_delivery_charge" value="0" required />
//                 <input type="text" id="success_url" name="success_url" value="https://developer.esewa.com.np/success" required />
//                      <input type="text" id="failure_url" name="failure_url" value="https://developer.esewa.com.np/failure"                required />
//                      <input type="text" id="signed_field_names" name="signed_field_names" value="total_amount,transaction_uuid,               product_code" required />
//                      <input type="text" id="signature" name="signature" value="i94zsd3oXF6ZsSr/kGqT4sSzYQzjj1W/waxjWyRwaME="                required />
                     
//                      <input type="submit" value="Submit" />
//                    </form>
//                    </div> */}
//                   </div>
                   
//                    {/* this is for price data */}
//                       <div className="flex flex-col justify-between">
//                         <div className="space-y-2 text-sm text-gray-500 text-right">
//                           <p>Total Price</p>
//                           <h1 className="text-2xl font-bold text-blue-700">{currency} {booking.price} </h1>
//                           <p>Booked on {booking.createdAt.split('T')[0] } </p>
//                         </div>

//                       </div>
//               {/* </div> */}
                  
//             </li>
           
//           })
//         }
//        </ul>
//    </div>
     

//    </>
//   )
// }

// export default MyBooking
// MyBooking.jsx
import { useEffect, useState } from "react";
import Title from "../components/Title";
import { useAppcontext } from "../context/AppContext";

import toast from "react-hot-toast";
import { Button } from "../shadcnui/button";
import {useNavigate} from 'react-router';
const MyBooking = () => {
  const { axios, user, currency } = useAppcontext();
  const [bookings, setBookings] = useState([]);
  const [now, setNow] = useState(new Date());
  const navigate=useNavigate();
  const fetchMyBookings = async () => {
    try {
      const { data } = await axios.get("/api/guestbooking/user");
      if (data.success) setBookings(data.bookings);
      else toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => { 
    if (user) fetchMyBookings(); 
  }, [user]);

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

    const formatRemainingTime = (returnDate) => {
      const diff = new Date(returnDate) - now;
      if (diff <= 0) return "Expired";
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };

// const handlePayment = async (bookingId) => {
//   try {
//     const { data } = await axios.post(`/api/guestbooking/payment`,{bookingId});
//    // const { data } = await axios.get(`/api/guestbooking/payment/${bookingId}`);

//     console.log("Payment API response:", data);

//     if (!data.success) return toast.error(data.message || "Payment initiation failed");

//     const pd = data.paymentData;

//     const form = document.createElement("form");
//     form.method = "POST";
//     form.action = "https://rc-epay.esewa.com.np/api/epay/main/v2/form";
// //Iterates over every field in paymentData (amount, total_amount, transaction_uuid, etc.).
//     Object.keys(pd).forEach((key) => { //
//       const input = document.createElement("input");
//       input.type = "hidden"; //For each field, creates an hidden input:
//       input.name = key;
//       input.value = pd[key];
//       form.appendChild(input);  
//     });

//     document.body.appendChild(form);
//     form.submit();  //Calls form.submit() → redirects the user to eSewa payment page.
//     //document.body.removeChild(form);
//   } catch (error) {
//     toast.error("Payment failed to initiate");
//     console.error(error);
//   }
// };


  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 mt-16 text-sm max-w-7xl min-h-screen">
      <Title title="My Bookings" subTitle="View and manage all your vehicle bookings" />

      <ul>
        {bookings.map((booking, index) => (
          <li key={booking._id} className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 rounded-lg border border-gray-400 mt-5">
            
            {/* Bike Info */}
            <div>
              <img src={booking.bike.image} alt="booking bike" className="w-full h-auto aspect-video object-cover" />
              <p className="text-lg font-medium mt-2">{booking.bike.brand} {booking.bike.model}</p>
              <p className="text-gray-500">{booking.bike.year}.{booking.bike.category}.{booking.bike.location}</p>
            </div>

            {/* Booking Info */}
            <div>
              <div className="flex items-center gap-2">
                <p className="px-3 py-1.5 bg-light rounded">Booking #{index + 1}</p>
                <p className={`px-2 py-1 text-sm rounded-full ${booking.status === 'confirmed' ? 'bg-green-500' : 'bg-red-500'}`}>
                  {booking.status}
                </p>
              </div>

              <div className="flex items-start gap-2 mt-2">
                <div>
                  <p className="text-gray-500">Rental Period</p>
                  <p>{booking.pickupDate.split('T')[0]} To {booking.returnDate.split('T')[0]}</p>
                </div>
              </div>

              <div className="flex items-start gap-2 mt-2">
                <div>
                  <p className="text-gray-500">Pickup Location</p>
                  <p>{booking.bike.location}</p>
                </div>
              </div>
            </div>

            {/* Time Remaining & Payment */}
            <div className="flex flex-col mx-auto">
              <div>
                <p className="text-gray-500 text-sm md:text-lg">Time Remaining</p>
                {booking.status === 'confirmed' ? (
                  <p>{formatRemainingTime(booking.returnDate)}</p>
                ) :booking.status==="cancelled"?(
                <p className="text-gray-500">Your booking is Cancelled</p>)
                : (
                  <p className="text-gray-500">Waiting for payment</p>
                )}
              </div>

              {booking.status === 'pending' && booking.paymentAllowed&&(
                <div className="mt-2">
                  {/* <Button
                    onClick={() => handlePayment(booking._id)}
                    className="bg-green-500 font-bold"
                  >
                    Pay via eSewa
                  </Button> */}
                  <Button 
                   onClick={()=>navigate('/payment',{state:{total_amount:booking.price,bookingId:booking._id}})}
                   className="bg-green-500 rounded-lg font-medium"
                   >
                   {/* {booking.payment.pricestatus==="unpaid"?
                   "Pay Via eSewa"
                   :booking.payment.pricestatus==="paid"?
                   "Payment done Thank You"
                   :"Payment failure"
                  } */}
                  Pay via eSewa
                  </Button>
                </div>
              )}
            </div>

            {/* Price Info */}
            <div className="flex flex-col justify-between">
              <div className="space-y-2 text-sm text-gray-500 text-right">
                <p>Total Price</p>
                <h1 className="text-2xl font-bold text-blue-700">{currency} {booking.price}</h1>
                <p>Booked on {booking.createdAt.split('T')[0]}</p>
              </div>
            </div>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyBooking;
