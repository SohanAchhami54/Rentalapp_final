import {Outlet, useLocation, useNavigate} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
const Mainlayout = () => {
  const isOwnerPath=useLocation().pathname.startsWith('/owner');
  return (
    <>
    <Header/>
      <Outlet/>
   
    <Footer/>  
    </>
  )
}

export default Mainlayout
