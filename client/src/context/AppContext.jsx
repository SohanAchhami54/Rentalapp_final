  import { createContext, useContext, useEffect, useState } from "react";
  import {useNavigate} from 'react-router-dom'
  import axios from 'axios';
  import {toast} from 'react-hot-toast';

  axios.defaults.baseURL=import.meta.env.VITE_BASE_URL

  const AppContext=createContext();
  export const AppProvider=({children})=>{
      console.log('App Provider is mounted');
      //const navigate=useNavigate();
      const currency=import.meta.env.VITE_CURRENCY;
      const [token,setToken]=useState(null);
      const [user,setUser]=useState('');
      const [isOwner,setIsOwner]=useState(false);
      const [showLogin,setShowLogin]=useState(false);
      const [pickupDate, setPickupDate] = useState('');
      const [returnDate,setReturnDate]=useState('');
      const [bike,setBike]=useState([]);

      //function to check if the user is loggedin
      const fetchUser=async()=>{
          try {
          const {data}= await axios.get('/api/user/data') //to extract the data from the database.
          if(data.success){
              console.log(data);
              setUser(data.user);
              setIsOwner(data.user.usertype==='host')
          }else{
              //navigate('/');
              localStorage.removeItem('token');
              setToken(null);
          }
        
          } catch (error) {
              toast.error(error.message);
          }
      }

  //function to fetch all the bike from the server.
  const fetchBikes=async()=>{
      try{
          const {data}=await  axios.get('/api/user/bikes');
          console.log('Fetched bikes:',data);
          data.success?setBike(data.bikes):toast.error(data.message);
        }catch(error){
          console.log(error.message);
      }
  }


  //function to logout the user
  const logout=()=>{
      localStorage.removeItem('token')
      setToken(null);
      setUser(null);
      setIsOwner(false);
      axios.defaults.headers.common['Authorization']='';
      toast.success('You have been logout')
  }


  //useEffect to retrieve the token from localstorage
    useEffect(()=>{
        const token=localStorage.getItem('token');
        setToken(token);
        fetchBikes();
    },[]);






  //useeffect to fetch the user data when the token is available
    useEffect(()=>{
      //this token will be added to the axios headers with the authorization property 
      //so in all the request this token is available by default.
    if(token){ 
      // axios.defaults.headers.common['Authorization']=` ${token}`;
       axios.defaults.headers.common['Authorization'] = `${token}`;

      fetchUser();
    }
    },[token])
      const value={
      currency,axios,user,setUser,token,setToken,isOwner,setIsOwner,fetchUser,showLogin,
        setShowLogin,logout,fetchBikes,bike,setBike,pickupDate,setPickupDate,returnDate,setReturnDate
      }
      return(
          <>
          <AppContext.Provider value={value}> 
                {children}
          </AppContext.Provider>
          </>
      )
  }

  export const useAppcontext=()=>{
      return useContext(AppContext);
  }
