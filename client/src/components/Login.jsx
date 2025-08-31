  // import React, { useState } from 'react';
  // import { Button } from '../shadcnui/button';
  // import { useAppcontext } from '../context/AppContext';
  // import { useNavigate } from 'react-router-dom';

  // export const Login = () => {
  //   const {setShowLogin,axios,setToken}=useAppcontext();
  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');
  //   const navigate=useNavigate();
  //   const handleLogin = async (event) => {
  //     event.preventDefault();
  //     try {
  //       // ✅ Fixed: Remove 'fullname' - not needed for login
  //       const { data } = await axios.post(`/api/user/login`, { email, password });
        
  //       if (data.success) {
  //         setToken(data.token);
  //         localStorage.setItem('token', data.token);
  //         setShowLogin(false);
  //         navigate('/');
  //         toast.success('Login successful!');
  //       } else {
  //         toast.error(data.message);
  //       }
  //     } catch (error) {
  //       toast.error(error.response?.data?.message || 'Login failed');
  //     }
  //   };
      
  //     // Add your login logic here
    

  //   return (
  //     <div className="flex items-center justify-center min-h-screen bg-gray-100">
  //       <form
  //         onSubmit={handleLogin}
  //         className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
  //       >
  //         <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

  //         <div className="mb-4">
  //           <label htmlFor="email" className="block text-sm font-medium mb-1">
  //             Email
  //           </label>
  //           <input
  //             id="email"
  //             type="email"
  //             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  //             value={email}
  //             onChange={(e) => setEmail(e.target.value)}
  //             required
  //           />
  //         </div>

  //         <div className="mb-6">
  //           <label htmlFor="password" className="block text-sm font-medium mb-1">
  //             Password
  //           </label>
  //           <input
  //             id="password"
  //             type="password"
  //             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  //             value={password}
  //             onChange={(e) => setPassword(e.target.value)}
  //             required
  //           />
  //         </div>

  //         <Button
  //           type="submit"
  //           className="w-full bg-black text-white py-2 rounded-md"
  //         >
  //           Login
  //         </Button>
  //       </form>
  //     </div>
  //   );
  // };

  import { useState } from 'react';
  import { Button } from '../shadcnui/button';
  import { useAppcontext } from '../context/AppContext';
  import { useNavigate } from 'react-router-dom'; // Import useNavigate
  import { toast } from 'react-hot-toast'; // Import toast

  export const Login = () => {
    const { axios, setToken } = useAppcontext();
    const navigate = useNavigate(); // Initialize useNavigate
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event) => {
      event.preventDefault();
      try {
        const { data } = await axios.post(`/api/user/login`, { email, password });

        if (data.success) {
           setToken(data.token);// IMMEDIATELY sets token in context
           localStorage.setItem('token', data.token); //saves it in browser for future visits
          toast.success('Login successful!');
          navigate('/'); // Navigate to home page after successful login
        } else {
          toast.error(data.message);
        }
      } catch (error) { //if backend is not connected.
        toast.error(error.response?.data?.message || 'Login failed');
      }
    };

    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
        >
          <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md"
          >
            Login
          </Button>
        </form>
      </div>
    );
  };