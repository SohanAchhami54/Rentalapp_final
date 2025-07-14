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
import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";


const App = () => {
  const [showLogin,setShowLogin]=useState(false);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Mainlayout/>,
      children: [
        {
          path:'/',
          element:<Home/>
        },
        {
          path: '/cardetail/:id',
          element:<CarDetails/>,
        },
        {
          path: '/car',
          element:<Cars/>
        },
        {
          path:'/mybooking',
          element:<MyBooking/>
        },
           {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/signup',
          element:<Signup/>
        },
        {
          path:'/owner',
          element:<OwnerLaout/>,
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
            }
          ]
        },
     
      ]
    }
  ]);

  return (
    <>
     {/* {showLogin&&<Login setShowLogin={setShowLogin}/>} */}
      <RouterProvider router={router} />
    </>
  );
};

export default App;
