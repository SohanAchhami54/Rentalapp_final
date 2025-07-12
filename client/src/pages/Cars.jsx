import { useState } from "react"
import { assets, dummyCarData } from "../assets/assets"
import Title from "../components/Title"
import { Input } from "../shadcnui/input"
import CarCard from "../components/CarCard"
const Cars = () => {
  const [input,setInput]=useState('');
  return (
   <>
    <div>
      {/* available car */}
      <div className=" ">
         <Title title='Available Car' subTitle='Browse our selection of premium vehicle available for you next  adventure' />
          <div className="flex items-center gap-2 bg-white px-4 max-w-140 w-full mx-auto mt-5 h-12 ">
            <img src={assets.search_icon} alt="" />
            <Input  onChange={(e)=>setInput(e.target.value)} value={input}
             type='text' placeholder='Search by made,model or features' />
          </div>
      </div>
   {/* available car */}


   {/* this is  available car details */}
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-10" >
        {/* this is showing the available car details */}
        <p className="text-gray-500 xl:pl-20  max-w-7xl mx-auto">Showing {dummyCarData.length} data </p>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4
           xl:px-20 max-w-7xl mx-auto">

            {
              dummyCarData.map ((car,index)=>{
                    return <li key={index}>
                      {/* this is calling the CarCard component */}
                         <CarCard car={car} />
                    </li>
                })
              }
           </div>
      </div>
    </div>
   </>
  )
}

export default Cars
