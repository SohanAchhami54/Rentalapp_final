//function to check the availability of the bike for a given date
const Bike = require('../models/bike');
const Booking=require('../models/booking');
const ownerRouter = require('../routes/ownerRouter');

exports.checkAvailability=async(bike,pickupDate,returnDate)=>{
    const bookings=await Booking.find({
        bike,
        pickupDate:{$lte:returnDate},
        returnDate:{$gte:pickupDate},
    })
    return bookings.length===0;
}


// //for the home page data
// //api to check the availability of bike for the given date and location 
// exports.checkAvailbilityOfBike=async(req,res)=>{
//     try {
//        const {location,pickupDate,returnDate}=req.body;
//        //fetch all the available bike for the given location
//        const bikes=await Bike.find({location,isAvailable:true});

//        //check bike availability for the given date range using promise
//        const availableBikePromises=bikes.map(async(bike)=>{
//          const isAvailable= await checkAvailability(bike._id,pickupDate,returnDate);
//          return {...bike._doc,isAvailable:isAvailable}
//        })

//        let availableBike=await Promise.all(availableBikePromises);
//        availableBike=availableBike.filter(bike=>bike.isAvailable===true);
//        res.json({success:true,availableBike});


//     } catch (error) {
//         console.log(error.message);
//         res.json({success:false,message:error.message});
//     }

// }


//for booking the bike
exports.createBooking=async(req,res)=>{//for booking we need the use id and bike details
    try {
       const {_id}=req.user;//req.user contains info about the logged-in user (like ID, name, email). 
       console.log('req.user:',req.user);
       const {bikeId,pickupDate,returnDate}=req.body;
       console.log('req.body:',req.body);
       const isAvailable=await this.checkAvailability(bikeId, pickupDate,returnDate);

       if(!isAvailable){
        return res.json({success:false,message:'bike is not available'});
       }

       //if the bike is ava ilable
        const bikeData=await Bike.findById(bikeId);

        //calculate the price based on pickup and return date
        const picked=new Date(pickupDate);//js object lai create garxa string number haru bata
        const returned=new Date(returnDate);
        const noofdays=Math.ceil((returned-picked)/(1000*60*60*24));//returned-picked convert into milliseconds
        const price=bikeData.pricePerDay*noofdays;
       
        await Booking.create({bike:bikeId,owner:bikeData.owner,user:_id,pickupDate,returnDate,price})
        res.json({success:true,message:'Booking created'});



    } catch (error) {
         console.log(error.message);
         res.json({success:false,message:error.message});
    }
}


//api to list the user bookings
exports.getUserBookings=async(req,res)=>{
    try {
        console.log('userbookings',req.user);
      const {_id}=req.user;//yo owner ko id ho
      const bookings=await Booking.find({user:_id}).populate('bike').sort({createdAt:-1});
        res.json({success:true,bookings});
    } catch (error) {   
        console.log(error.message);
         res.json({success:false,message:error.message});
    }
}



//yo chai dashboard ko data ho.
//api to get the  owner bookings
exports.getOwnerBookings=async(req,res)=>{
    console.log(req.user);
    try {
       if(req.user.usertype!=='host'){
        return res.json({success:false,message:'Unauthorized'});
       }
       const bookings=await Booking.find({owner:req.user._id}).populate('bike user').select('-user.password').sort({createdAt:-1});
       res.json({success:true,bookings});
    } catch (error) {
         res.json({success:false,message:error.message});
    }
}


//for confirmed and cancelled the bookings
exports.changeBookingStatus=async(req,res)=>{
    try {
         const {_id}=req.user;
         const {bookingId,status}=req.body;
         const booking=await Booking.findById(bookingId);
         
        if(booking.owner.toString()!==_id.toString()){
            return res.json({success:false,message:'Unauthorized'});  
        }

        booking.status=status;
        await booking.save()
        res.json({success:true,message:'Status Updated'});
    } catch (error) {
        console.log(error.message);
         res.json({success:false,message:error.message});
    }
}


