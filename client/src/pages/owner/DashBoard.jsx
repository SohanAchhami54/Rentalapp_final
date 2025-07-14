import React, { useEffect, useState } from 'react'
import { assets, dummyDashboardData } from '../../assets/assets';
import Title from './Title';

const DashBoard = () => {
  const currency=import.meta.env.VITE_CURRENCY;
  const [data,setData]=useState({
    totalCars:0,
    totalBookings:0,
    pendingBookings:0,
    completedBookings:0,
    recentBookings: [],
    monthlyRevenue:0
  });

  const dashboardCards=[
     {title:'Total Cars',value:data.totalCars,icon:assets.carIconColored},
     {title:'Total Bookings',value:data.totalBookings,icon:assets.listIconColored},
     {title:'Pending',value:data.pendingBookings,icon:assets.cautionIconColored},
     {title:'Confirmed',value:data.completedBookings,icon:assets.listIconColored},
  ]

  useEffect(()=>{
    setData(dummyDashboardData);
  },[]);



  return (
    <>
     <div className='px-4 pt-10 md:px-10 flex-1'>
       <Title title='Host DashBoard' subTitle='I controlled all the data hehehe' />
       {/* this is to display the dashboardCards data */}
       <ul className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-2'>
        {
          dashboardCards.map((curElem,index)=>{
            return <li key={index} className='flex gap-2 justify-between bg-gray-300 rounded-lg p-4'>
              {/* this is for title and value section  */}
              <div>
                 <h1>{curElem.title}</h1>
                <h2>{curElem.value} </h2>
              </div>
              {/* this is for icon section */}
                <div className='mt-1'>
                    <img src={curElem.icon} alt="" />
                </div>
            </li>
          })
        }
       </ul>

       {/* this is for recent bookings and monthly revenue */}
        <div className='flex flex-wrap items-start gap-12 mb-8  rounded-lg mt-5 w-full'>
          {/* recent booking */}
          <div className='p-4 md:p-6 w-full md:max-w-xl  rounded-lg  bg-gray-300'>
              <h1>Recent Bookings</h1>
              <p>Latest Customer Bookings </p>
               
               <ul className=''>
                {
                      data.recentBookings.map((bookdata,index)=>{
                          return <li key={index} className='mt-3 flex justify-between'>
                            {/* this is first div  */}
                              <div className='flex items-center  gap-2'>

                                  <div className='hidden md:flex items-center justify-center'>
                                  <img src={assets.listIconColored} alt="" className='h-5 w-5' />
                                </div>

                                <div>
                                  <p>{bookdata.car.brand} {bookdata.car.model } </p>
                                  <p className='text-sm text-gray-500'>{bookdata.createdAt.split('T')[0]} </p>
                                  </div>
                              </div>
                                {/* this is second div  */}
                            <div className='flex items-center gap-2 font-medium '>
                                <p className='text-sm text-gray-500'>{currency} {bookdata.price} </p>
                                <p>{bookdata.status} </p>
                            </div>
  

                          </li>
                      })
                }
               </ul>
          </div>
          {/* this is for monthly revenue */}
          <div className='p-4 md:pd-6 w-full md:max-w-lg  bg-gray-300 rounded-lg '>
                 <h1 className='text-lg font-medium'>Monthly Revenue</h1>
                 <p>Revenue for current month</p>
                 <p className='text-3xl mt-6 font-semibold text-blue-600'>{currency} {data.monthlyRevenue} 
                  
                 </p>
          </div>
        </div>

    </div>
    </>
   
  )
}

 export default DashBoard
