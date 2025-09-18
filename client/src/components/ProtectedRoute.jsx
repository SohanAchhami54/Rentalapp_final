
import { useAppcontext } from '../context/AppContext';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ allowedUsertype}) => {
  const { user, isLogged,loadingUser} = useAppcontext();
 if(loadingUser) return <div>Loading.....</div>; 

  if (!isLogged) {  //j ma jana khojeni login ma lanxa
    return <Navigate to="/login" replace />;
  }

  if (user && user.usertype === allowedUsertype) {
    return <Outlet />;
  }

  return <Navigate to="/" replace />;
};

export default ProtectedRoute;
