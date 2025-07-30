import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainlayout from "./components/layout/Mainlayout";
import Home from "./pages/Home";
import BikeDetails from "./pages/BikeDetails";
import MyBooking from "./pages/MyBooking";
import Bikes from "./pages/Bikes";
import OwnerLaout from "./components/ownernav/OwnerLaout";
import Addbike from "./pages/owner/Addbike";
import Managebike from "./pages/owner/Managebike";
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
          element:<BikeDetails/>,
        },
        {
          path: '/bike',
          element:<Bikes/>
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
          // <ProtectedRoute allowedRoles={['guest']}>
             <MyBooking />
          // </ProtectedRoute>
        )
          // element:<MyBooking/>
        },
        {
          path:'/owner',
            element: (
        //  <ProtectedRoute allowedRoles={['host']}>
             <OwnerLaout />
          // </ProtectedRoute>
        ),
          // element:<OwnerLaout/>,
          children:[
            {
               path:'/owner',
               element:<DashBoard/>
            },
            {
              path:'/owner/managebike',
              element:<Managebike/>,
            },
            {
              path:'/owner/addbike',
              element:<Addbike/>
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

