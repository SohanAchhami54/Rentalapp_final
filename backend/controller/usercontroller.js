const Booking=require('../models/booking');
require('dotenv').config();
const CryptoJS=require('crypto-js');
const {v4:uuidv4}=require('uuid');
// exports.getUserBookings=async(req,res)=>{
//     try {
//         console.log('userbookings',req.user);
//       const {_id}=req.user;//yo owner ko id ho
//       const bookings=await Booking.find({user:_id}).populate('bike').sort({createdAt:-1});
//         res.json({success:true,bookings});
//     } catch (error) {   
//         console.log(error.message);
//          res.json({success:false,message:error.message});
//     }
// }

exports.makepayment = async (req, res) => {
  try {
      //const { _id } = req.user;
     const {bookingId}=req.body;
  //  const {bookingId}=req.params;

     const booking = await Booking.findById({_id: bookingId }).populate("bike");
    //const booking=await Booking.findById(bookingId).populate('bike');

    if (!booking) {
      return res.json({ success: false, message: "Booking not found" });
    }

    const total_amount = booking.price.toFixed(2); // string with 2 decimals
    const uid = uuidv4(); //Ensures each payment has a unique identifier.

    // Only fields listed here are used for signature
    const signedFields = "total_amount,transaction_uuid,product_code";

    // Create signature string
    const message = `total_amount=${total_amount},transaction_uuid=${uid},product_code=EPAYTEST`;

    // Generate HMAC-SHA256 signature in Base64
    const hash = CryptoJS.HmacSHA256(message, process.env.ESEWASECRET);
    const signature = CryptoJS.enc.Base64.stringify(hash);

    res.json({
      success: true,
      paymentData: {
        amount: total_amount, // required by eSewa
        tax_amount: "0",
        total_amount: total_amount,
        transaction_uuid: uid,
        product_code: "EPAYTEST",
        product_service_charge: "0",
        product_delivery_charge: "0",
        success_url: `${process.env.FRONTEND_URL}/payment-success?bookingId=${booking._id}`,
        failure_url: `${process.env.FRONTEND_URL}/payment-fail?bookingId=${booking._id}`,
        signed_field_names: signedFields,
        signature: signature,
      },
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};


exports.getUserBookings=async(req,res)=>{
    try {
        console.log('userbookings',req.user);
      const {_id}=req.user;//yo owner ko id ho
   // await Booking.deleteMany({user:_id,returnDate:{$lt:new Date()}});
      const bookings=await Booking.find({user:_id}).populate('bike').sort({createdAt:-1});
        
const availableBookings = bookings.filter(b => b.bike && b.bike.isAvailable);

res.json({ success: true, bookings: availableBookings });
    } catch (error) {   
        console.log(error.message);
         res.json({success:false,message:error.message});
    }
}
