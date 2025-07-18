import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainlayout from "./components/layout/Mainlayout";
import Home from "./pages/Home";
import CarDetails from "./pages/CarDetails";
import MyBooking from "./pages/MyBooking";
import Cars from "./pages/Cars";
import OwnerLaout from "./components/ownernav/OwnerLaout";
import Managecar from "./pages/owner/Managecar";
import Addcar from "./pages/owner/Addcar";
import Managebooking from "./pages/owner/Managebooking";
import DashBoard from "./pages/owner/DashBoard";
import {Login} from "./components/Login";
import {Signup} from "./components/Signup";
import  {Toaster} from 'react-hot-toast'; //to display the toast notification.
import ProtectedRoute from "./components/ProtectedRoute";
// import { useAppcontext } from "./context/AppContext";

const App = () => {
    // const {user}=useAppcontext();
  const router = createBrowserRouter([
    {
      
      path: '/',
      element: <Mainlayout/>,
      //unauthorized
      children: [
        {
          path:'/',
          element:<Home/>
        },
        {
          path: '/bikedetail/:id',
          element:<CarDetails/>,
        },
        {
          path: '/bike',
          element:<Cars/>
        },
       
           {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/signup',
          element:<Signup/>
        },

        // protectedRoute 
         {
          path:'/mybooking',
           element: (
          <ProtectedRoute allowedRoles={['guest']}>
             <MyBooking />
          </ProtectedRoute>
        )
          // element:<MyBooking/>
        },
        {
          path:'/owner',
            element: (
         <ProtectedRoute allowedRoles={['host']}>
             <OwnerLaout />
          </ProtectedRoute>
        ),
          // element:<OwnerLaout/>,
          children:[
            {
               path:'/owner',
               element:<DashBoard/>
            },
            {
              path:'/owner/managecar',
              element:<Managecar/>,
            },
            {
              path:'/owner/addcar',
              element:<Addcar/>
            },
            {
              path:'/owner/managebook',
              element:<Managebooking/>
            },
          ]
        },
     
      ]
    }
  ]);

  return (
    <>
     {/* {showLogin&&<Login setShowLogin={setShowLogin}/>} */}
      <Toaster/>
          <RouterProvider router={router} />

    </>
  );
};

export default App;

