import Title from './Title'
import CarCard from './CarCard'
import { dummyCarData } from '../assets/assets'
import { Button } from '../shadcnui/button'
import { useNavigate } from 'react-router-dom'
const Featurecar = () => {
    const  navigate=useNavigate();
  return (
    <>
       <div className='flex flex-col items-center py-24 px-6 md:px-16 lg:px-24'>
        {/* this is for title of the page */}
         <div>
            <Title title='Features Vehicles' subTitle='Explore a Wide Range of Vehicles and Choose the Perfect Ride for Every Journey' />
         </div>
         {/* this is for car components */}
          <div>
           <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10'>
            {
                dummyCarData.slice(0,6).map ((carDetails)=>{
                    return <li key={carDetails._id}>
                         <CarCard car={carDetails} />
                    </li>
                })
            }
           </ul>
           {/* this is explore all car  */}
              <div className=' flex items-center justify-center m-10 '>
                {/* . This is commonly used when navigating between pages or routes in a Single-Page Application (SPA) to ensure the new page loads at the top, preventing the user from remaining at the previous scroll position.  use of scrollTo */}
                   <Button onClick={()=>{navigate('/car');scrollTo(0,0)}} 
                    className='bg-black text-white  text-md'>
                    Explore all Cars </Button>
              </div>
         </div>
       </div>
    
    </>
  )
}

export default Featurecar
