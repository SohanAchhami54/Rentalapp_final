import Title from './Title'
import BikeCard from './BikeCard'
import { Button } from '../shadcnui/button'
import { useNavigate } from 'react-router-dom'
import { useAppcontext } from '../context/AppContext'
const Featurebike = () => {
    const  navigate=useNavigate();

    const  {bike,user}=useAppcontext();//to display the bike information
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
           {bike && bike.length > 0 ? (
           bike.slice(0, 6).map((bikeDetails) => (
           <li key={bikeDetails._id}>
            {/* this is car card  */}
              <BikeCard bike={bikeDetails}  isHost={user?.usertype==='host'} />
           </li>
          ))
        ) : (
       <p className="col-span-3 text-center text-gray-500">No vehicles available</p>
        )}

           </ul>
           {/* this is explore all car  */}
              <div className=' flex items-center justify-center m-10 '>
                {/* . This is commonly used when navigating between pages or routes in a Single-Page Application (SPA) to ensure the new page loads at the top, preventing the user from remaining at the previous scroll position.  use of scrollTo */}
                   <Button onClick={()=>{navigate('/bike');scrollTo(0,0)}} 
                    className='bg-black text-white  text-md'>
                    Explore all Bikes </Button>
              </div>
         </div>
       </div>
    
    </>
  )
}

export default Featurebike
