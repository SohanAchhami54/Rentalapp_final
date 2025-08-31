// import { useAppcontext } from '../context/AppContext'
// import { Navigate, Outlet } from 'react-router-dom';

// const ProtectedRoute = () => {
//   const {user}=useAppcontext();

//   return (
//     <>
//       <div>
//          { user? <Outlet/>:<Navigate to='/login'/>}
//       </div>
//     </>
//   )
// }

// import { useAppcontext } from '../context/AppContext';
// import { Navigate, Outlet } from 'react-router-dom';

// const ProtectedRoute = ({ allowedUsertype }) => {
//   const { user } = useAppcontext();

//    if(user===undefined) return null;

//     if (!user) return <Navigate to="/login" replace />;
// // for both type of user that is host and guest for !allowedUsertype
//   // if (!allowedUsertype || user.usertype === allowedUsertype) {
//   if(user.usertype===allowedUsertype){
//     return <Outlet />;  
//   }

//   return <Navigate to="/" replace />;
// };

// export default ProtectedRoute;
import { useAppcontext } from '../context/AppContext';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ allowedUsertype }) => {
  const { user, isLogged } = useAppcontext();

  if (!isLogged) {  //j ma jana khojeni login ma lanxa
    return <Navigate to="/login" replace />;
  }

  if (user && user.usertype === allowedUsertype) {
    return <Outlet />;
  }

  return <Navigate to="/" replace />;
};

export default ProtectedRoute;


