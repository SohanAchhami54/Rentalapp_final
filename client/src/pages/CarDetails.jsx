import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { assets, dummyCarData } from "../assets/assets";
import { Button } from "../shadcnui/button";

const CarDetails = () => {
  const { id } = useParams(); //it takes the id of particular page //{id: '67ff6b758f1b3684286a2a65'}
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const currency=import.meta.env.VITE_CURRENCY; 
  console.log(car);

 //to handle the form details
 const handleSubmit=async(e)=>{
    e.preventDefault();
 }

  useEffect(() => {
    //when the id changes it display the value of that particular id.
    setCar(dummyCarData.find((car) => car._id === id));
  }, [id]);


  
  return car ? (
    <>
      {/* this is the individual car details */}
      <div className="px-6 md:px-16 lg:px-24  xl:px-32 mt-16">
        {/* //jun page bata car ko details lai click gareko ho 
      // yo button click garisakey paxi paila kai page ma aai puginxa. */}
        <Button
          onClick={() => {navigate(-1);scrollTo(0,0)}}
          className="bg-black text-white flex  items-center gap-2 mb-6 cursor-pointer"
        >
          Back to all cars
        </Button>
      
       {/* this line seperate the new left side and right side of the cardetails page */}

        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* this is the left car image */}
          <div className="lg:col-span-2">
            <img
              src={car.image}
              alt={car.brand}
              className="w-full h-auto md:max-h-100 object-cover rounded-xl mb-6 shadow-md "
            />
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold">
                  {/* brand model */}
                  {car.brand}
                  {car.model}{" "}
                </h1>
                {/* car model and year */}
                <p className="text-lg">
                  {car.category} . {car.year}{" "}
                </p>
              </div>
              <hr className="my-6" />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { icon: assets.users_icon, text: `${car.seating_capacity}` },
                  { icon: assets.fuel_icon, text: car.fuel_type },
                  { icon: assets.car_icon, text: car.transmission },
                  { icon: assets.location_icon, text: car.location },
                ].map(({ icon, text }) => (
                  <div
                    key={text}
                    className="flex flex-col items-center p-4 bg-light rounded-lg"
                  >
                    {/* for the image of assets  */}
                    <img src={icon} alt="" className="h-5 mb-3" />
                    <p>{text} </p>
                  </div>
                ))}
              </div>
            </div>
       {/* description */}
            <div>
               <h1 className="text-xl font-medium m-3">Description</h1>
               <p className="text-gray-600">{car.description} </p>
            </div>

            {/* Features */}
          <div>
              <h1 className="text-xl font-medium m-3">Features</h1>
               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {
                      ['360 Camera','Blutooth','GPS','Heated Seats',
                        'Rear view Mirror'].map((item)=>{
                          return <li key={item} className="flex items-center ">
                             <img src={assets.check_icon} className="h-4 mr-2" alt="" />
                              {item}
                          </li>
                        })
                    }
               </ul>
          </div>
          </div>
          {/* this is for the right car image */}
         <form action="" onSubmit={handleSubmit}
          className="h-max sticky top-18 p-6 shadow-xl rounded-lg">
              <p className="text-xl font-bold flex items-center justify-between ">
                {currency}{car.pricePerDay} <span className="font-normal text-gray-600">per day </span></p>
            <hr className=" border my-6" />
         

         {/* this is the pickup date */}
            <div className="flex flex-col gap-2">
              {/* pickup date */}
               <label htmlFor="pickup-date">Pickup Date</label>
               <input type="date" id='pickup-date' className="border  px-3 py-2 rounded-lg"
                  min={new Date().toISOString().split('T')[0]}
               required />
               {/* return date */}
               <label htmlFor="return-date">Return Date</label>
               <input type="date" id='return-date' className="border  px-3 py-2 rounded-lg"
               required />
               <Button className="text-lg text-white bg-black">Book now</Button>
               <p className="text-center py-1 text-sm">No Credit card require to reserve</p>
            </div>

         </form>
        </div>
      </div>
    </>
  ) : (
    <p>Loading...</p>
  );
};

export default CarDetails;
