// import { useEffect, useState } from "react"
// import { assets, dummyCarData } from "../assets/assets"
// import Title from "../components/Title"
// import { Input } from "../shadcnui/input"
// import CarCard from "../components/CarCard"
// import { useSearchParams } from "react-router-dom"
// import { useAppcontext } from "../context/AppContext"
// import User from "../../../backend/models/User"
// const Cars = () => {
//   const [searchParams]=useSearchParams();
//   const pickupLocation=searchParams.get('pickupLocation');
//   const pickupDate=searchParams.get('pickupDate');
//   const returnDate=searchParams.get('returnDate');

//   const {bike,axios,user}=useAppcontext();

//   const isSearchData=pickupLocation && pickupDate && returnDate;  
//   const [filteredBike,setFilteredBike]=useState([]);
 
 
//   //for searching the car
//   const applyFilter=async()=>{
//     if(input==''){
//        setFilteredBike(bike);
//        return null;
//     }
//   }

//   // const searchCarAvailability=async()=>{
//   //   console.log("Calling searchCarAvailability...");
//   //   const {data}=await axios.post('/api/booking/check-availability',{location:pickupLocation, pickupDate,returnDate});
//   //   if(data.success){
//   //     console.log('Filtered Available Bikes',data.availableBike);
//   //     setFilteredBike(data.availableBike)
//   //       if(data.availableBike.length===0){
//   //         toast('No Bike available');
//   //       }
//   //       return null;
//   //   }
//   // }
 
//   //  useEffect(()=>{
//   //    isSearchData && searchCarAvailability();
//   //  },[])  

//    useEffect(()=>{
//      bike.length>0 && !isSearchData && applyFilter();
//    },[])
  

//   const [input,setInput]=useState('');
//   return (
//    <>
//     <div>
//       {/* available car */}
//       <div className=" ">
//          <Title title='Available Bike' subTitle='Browse our selection of premium vehicle available for you next  adventure' />
//           <div className="flex items-center gap-2 bg-white px-4 max-w-140 w-full mx-auto mt-5 h-12 ">
//             <img src={assets.search_icon} alt="" />
//             <Input  onChange={(e)=>setInput(e.target.value)} value={input}
//              type='text' placeholder='Search by made,model or features' />
//           </div>
//       </div>
//    {/* available car */}


//    {/* this is  available car details */}
//       <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-10 list-none" >
//         {/* this is showing the available car details */}
//         <p className="text-gray-500 xl:pl-20  max-w-7xl mx-auto">Showing {filteredBike.length} data </p>
//            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4
//            xl:px-20 max-w-7xl mx-auto">

//             {
//               filteredBike.map ((car,index)=>{
//                     return <li key={index}>
//                       {/* this is calling the CarCard component */}
//                          {/* <CarCard car={car} isHost={user?usertype==='host'} /> */}
                        
//                     </li>
//                 })
//               }
//            </div>
//       </div>
//     </div>
//    </>
//   )
// }

// export default Cars
import { useEffect, useState } from "react"
import { assets } from "../assets/assets"
import Title from "../components/Title"
import { Input } from "../shadcnui/input"
import CarCard from "../components/BikeCard"
import { useSearchParams } from "react-router-dom"
import { useAppcontext } from "../context/AppContext"

const Bikes = () => {
  const [searchParams] = useSearchParams();
  const pickupLocation = searchParams.get('pickupLocation');
  const pickupDate = searchParams.get('pickupDate');
  const returnDate = searchParams.get('returnDate');

  const { bike, axios, user } = useAppcontext();

  const isSearchData = pickupLocation && pickupDate && returnDate;
  const [filteredBike, setFilteredBike] = useState([]);
  const [input, setInput] = useState('');

  // Filtering logic when there's no search data
  const applyFilter = async () => {
    if (input === '') {
      setFilteredBike(bike);
      return;
    }
    const lowerInput = input.toLowerCase();
    const filtered = bike.filter((b) =>
      b.title.toLowerCase().includes(lowerInput) ||
      b.location.toLowerCase().includes(lowerInput)
    );
    setFilteredBike(filtered);
  };

  useEffect(() => {
    bike.length > 0 && !isSearchData && applyFilter();
  }, [bike, input]);

  return (
    <>
      <div>
        {/* available car */}
        <div>
          <Title
            title='Available Bike'
            subTitle='Browse our selection of premium vehicle available for your next adventure'
          />
          <div className="flex items-center gap-2 bg-white px-4 max-w-140 w-full mx-auto mt-5 h-12">
            <img src={assets.search_icon} alt="" />
            <Input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type='text'
              placeholder='Search by make, model, or features'
            />
          </div>
        </div>

        {/* this is  available car details */}
        <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-10 list-none">
          <p className="text-gray-500 xl:pl-20 max-w-7xl mx-auto">
            Showing {filteredBike.length} data
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 xl:px-20 max-w-7xl mx-auto">
            {filteredBike.map((bike, index) => (
              <li key={index}>
                {/* ✅ Prevent host from opening CarDetails */}
                <CarCard bike={bike} isHost={user?.usertype === 'host'} />
              </li>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Bikes;
