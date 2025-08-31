import { useAppcontext } from '../context/AppContext';

const UserLoader = ({ children }) => {
  const { loadingUser } = useAppcontext();

  if (loadingUser) return <div>Loading user...</div>; // show spinner or message
  return children;
};

export default UserLoader;
