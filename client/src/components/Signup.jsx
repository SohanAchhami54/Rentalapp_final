import React, { useState } from 'react';
import { Button } from '../shadcnui/button';
import { useAppcontext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export const Signup = () => {
  // Destructure fetchUser from useAppcontext - it's no longer needed here for automatic login
  const { axios } = useAppcontext(); // Only need axios for the signup POST request
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    usertype: '',
    address: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post('/api/user/signup', formData);

      if (data.success) {
        toast.success('Signup successful! Please login.'); 
        navigate('/login'); // Redirect to login after successful signup
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="firstname" className="block text-sm mb-1">First Name</label>
            <input
              id="firstname"
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              placeholder='Sulav'
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="lastname" className="block text-sm mb-1">Last Name</label>
            <input
              id="lastname"
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              placeholder='Shrestha'
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="usertype" className="block text-sm mb-1">User Type</label>
          <select
            id="usertype"
            name="usertype"
            value={formData.usertype}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>Select user type</option>
            <option value="guest">Guest</option>
            <option value="host">Host</option>
          </select>
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <input type="text" placeholder='type here' name='address' id='address' value={formData.address}
            onChange={handleChange} required
            className="w-full px-4 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm mb-1">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='type here'
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm mb-1">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder='type here'
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-md"
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};
  // import React, { useState } from 'react';
  // import { useNavigate } from 'react-router-dom';
  // import { toast } from 'react-hot-toast';
  // import { Button } from '../shadcnui/button';
  // import { useAppcontext } from '../context/AppContext';

  // const Signup = () => {
  //   const { setShowLogin, axios, setToken } = useAppcontext();
  //   const navigate = useNavigate();
  //   const [formData, setFormData] = useState({
  //     firstname: '',
  //     lastname: '',
  //     usertype: '',
  //     address: '',
  //     email: '',
  //     password: '',
  //   });

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData(prev => ({ ...prev, [name]: value }));
  //   };

  //   const handleSubmit = async (event) => {
  //     event.preventDefault();
  //     try {
  //       // ✅ Fixed: Send formData in request
  //       const { data } = await axios.post('/api/user/signup', formData);
        
  //       if (data.success) {
  //         setToken(data.token);
  //         localStorage.setItem('token', data.token);
  //         navigate('/');
  //         toast.success('Signup successful!');
  //       } else {
  //         toast.error(data.message);
  //       }
  //     } catch (error) {
  //       toast.error(error.response?.data?.message || 'Signup failed');
  //     }
  //   };

  
  //   return (
  //     <div className="flex items-center justify-center min-h-screen bg-gray-100">
  //       <form
  //         onSubmit={handleSubmit}
  //         className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
  //       >
  //         <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>

  //         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
  //           <div>
  //             <label htmlFor="firstname" className="block text-sm mb-1">First Name</label>
  //             <input
  //               id="firstname"
  //               type="text"
  //               name="firstname"
  //               value={formData.firstname}
  //               onChange={handleChange}
  //               placeholder='Sulav'
  //               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  //               required
  //             />
  //           </div>
  //           <div>
  //             <label htmlFor="lastname" className="block text-sm mb-1">Last Name</label>
  //             <input
  //               id="lastname"
  //               type="text"
  //               name="lastname"
  //               value={formData.lastname}
  //               onChange={handleChange}
  //               placeholder='Shrestha'
  //               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  //               required
  //             />
  //           </div>
  //         </div>

  //         <div className="mb-4">
  //           <label htmlFor="usertype" className="block text-sm mb-1">User Type</label>
  //           <select
  //             id="usertype"
  //             name="usertype"
  //             value={formData.usertype}
  //             onChange={handleChange}
  //             required
  //             className="w-full px-4 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
  //           >
  //             <option value="" disabled>Select user type</option>
  //             <option value="guest">Guest</option>
  //             <option value="host">Host</option>
  //           </select>
  //         </div>


  //         <div>
  //           <label htmlFor="address">Address</label>
  //           <input type="text" name='address' placeholder='type here' id='address' value={formData.address}
  //           onChange={handleChange} required 
  //             className="w-full px-4 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
  //         </div>

  //         <div className="mb-4">
  //           <label htmlFor="email" className="block text-sm mb-1">Email</label>
  //           <input
  //             id="email"
  //             type="email"
  //             name="email"
  //             value={formData.email}
  //             onChange={handleChange}
  //             placeholder='type here'
  //             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  //             required
  //           />
  //         </div>

  //         <div className="mb-6">
  //           <label htmlFor="password" className="block text-sm mb-1">Password</label>
  //           <input
  //             id="password"
  //             type="password"
  //             name="password"
  //             value={formData.password}
  //             onChange={handleChange}
  //             placeholder='type here'
  //             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  //             required
  //           />
  //         </div>

  //         <Button
  //           type="submit"
  //           className="w-full bg-black text-white py-2 rounded-md"
  //         >
  //           Sign Up
  //         </Button>
  //       </form>
  //     </div>
  //   );
  // };
