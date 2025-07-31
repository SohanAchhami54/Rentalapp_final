//this page is also for the home page banner
import { assets } from '../assets/assets'
import { Button } from '../shadcnui/button'
import { useNavigate } from 'react-router-dom'
import { useAppcontext } from '../context/AppContext'
import { toast } from 'react-hot-toast';

const Banner = () => {
    const navigate=useNavigate();
    const {user}=useAppcontext();
    const handleClick=()=>{
      if(user?.usertype==='host'){
        navigate('/owner/addbike');
        window.scrollTo({top:0,behavior:'smooth'})
      }else{
        toast.error('Only host can list the bike')
      }
    }
  return (
    <>
    <div className='flex flex-col   gap-8  justify-between items-center md:flex-row   shadow-2xl  py-10 px-10 
     max-w-6xl mx-3 md:mx-auto bg-gradient-to-l from to-blue-600 rounded-xl'>
       <div className='flex flex-col space-y-3'>
         <h2 className='font-semibold text-2xl'>Do you want a Super Bike?</h2>
         <p>Monetize your vehicle effortlessly by listing it on RentalSite</p>
         <p>We take care of insurance,driver certification and secure payments-
            so you can earn passive income,stress-free
         </p>
        <Button 
          onClick={handleClick} 
          className={`w-30 bg-black text-white hover:cursor-pointer`} 
         
        >
          List your Bikes
          </Button>
         
       </div>
       <div className='sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] overflow-hidden rounded-full'>
        <img src={assets.homebike} alt="super bike" className='w-full h-full object-cover 
         transition-all duration-500 ease-in-out delay-200 hover:scale-105' />
        </div>
    </div>
    </>
  )
}
export default Banner
