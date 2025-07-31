// import { createBrowserRouter, Route, Router, RouterProvider, Routes } from "react-router-dom";
// import Mainlayout from "./components/layout/Mainlayout";
// import Home from "./pages/Home";
// import BikeDetails from "./pages/BikeDetails";
// import MyBooking from "./pages/MyBooking";
// import Bikes from "./pages/Bikes";
// import OwnerLaout from "./components/ownernav/OwnerLaout";
// import Addbike from "./pages/owner/Addbike";
// import Managebike from "./pages/owner/Managebike";
// import Managebooking from "./pages/owner/Managebooking";
// import DashBoard from "./pages/owner/DashBoard";
// import {Login} from "./components/Login";
// import {Signup} from "./components/Signup";
// import  {Toaster} from 'react-hot-toast'; //to display the toast notification.

// import ProtectedRoute from "./components/ProtectedRoute";

// // import { useAppcontext } from "./context/AppContext";

// const App = () => {
//     // const {user}=useAppcontext();
//   const router = createBrowserRouter([
//     {
      
//       path: '/',
//       element: <Mainlayout/>,
//       //unauthorized
//       children: [
//         {
//           path:'/',
//           element:<Home/>
//         },
//         {
//           path: '/bikedetail/:id',
//           element:<BikeDetails/>,
//         },
//         {
//           path: '/bike',
//           element:<Bikes/>
//         },
       
//            {
//           path:'/login',
//           element:<Login/>
//         },
//         {
//           path:'/signup',
//           element:<Signup/>
//         },


//          {
//           path:'/mybooking',
//            element: (
        
//              <MyBooking />
     
//         )

//         },
//         {
//           path:'/owner',
//             element: (
       
//              <OwnerLaout />
         
//         ),
       
//           children:[
//             {
//                path:'/owner',
//                element:<DashBoard/>
//             },
//             {
//               path:'/owner/managebike',
//               element:<Managebike/>,
//             },
//             {
//               path:'/owner/addbike',
//               element:<Addbike/>
//             },
//             {
//               path:'/owner/managebook',
//               element:<Managebooking/>
//             },
//           ]
//         },
     
//       ]
//     }
//   ]);


//   return (
//     <>
//      {/* {showLogin&&<Login setShowLogin={setShowLogin}/>} */}
//       <Toaster/>
//           <RouterProvider router={router} />
//           {/* <Router>

//             <Routes>
              
//                  <Route path="/" element={<Mainlayout/>}> 
//                   <Route index element={<Home/>}></Route>
//                    <Route path="bikedetail/:id" element={<BikeDetails />} />
//                    <Route path="bike" element={<Bikes />} />
//                   <Route path="login" element={<Login />} />
//                   <Route path="signup" element={<Signup />} />
//                   <Route path="mybooking" element={<MyBooking />} />

                  
//                     <Route path="owner" element={<OwnerLaout />}>
//                     <Route index element={<DashBoard />} />
//                     <Route path="managebike" element={<Managebike />} />
//                     <Route path="addbike" element={<Addbike />} />
//                     <Route path="managebook" element={<Managebooking />} />
//                    </Route>
//                   </Route>
//             </Routes>
//           </Router> */}

//     </>
//   );
// };

// export default App;
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

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
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { useAppcontext } from "./context/AppContext";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./components/ProtectedRoute";


const App = () => {
  const { user,loadingUser } = useAppcontext(); 
 if(loadingUser) return null;
  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          {/* Shared layout */}
          <Route path="/" element={<Mainlayout />}>
            {/* Public routes */}
            <Route index element={<Home />} />
            <Route path="bikedetail/:id" element={<BikeDetails />} />
            <Route path="bike" element={<Bikes />} />

            {/* Login and Signup: only show if NOT logged in */}
            {!user && (
              <>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </>
            )}

            {/* If logged in, redirect login/signup to home */}
            {user && (
              <>
                <Route path="/login" element={<Navigate to="/" replace />} />
                <Route path="/signup" element={<Navigate to="/" replace />} />
              </>
            )}

            {/* Protected route for guest users only */}
            <Route element={<ProtectedRoute allowedUsertype="guest" />}>
              <Route path="/mybooking" element={<MyBooking />} />
            </Route>

            {/* Protected routes for host users only */}
            <Route element={<ProtectedRoute allowedUsertype="host" />}>
              <Route path="/owner" element={<OwnerLaout />}>
                <Route index element={<DashBoard />} />
                <Route path="/owner/managebike" element={<Managebike />} />
                <Route path="/owner/addbike" element={<Addbike />} />
                <Route path="/owner/managebook" element={<Managebooking />} />
              </Route>
            </Route>

          </Route>
        </Routes>
      </Router>
    </>
  );
};

 export default App;
