import React from 'react'

const DashBoard = () => {
  return (
    <div>
       <h1>THis is dashboard</h1>
    </div>
  )
}

 export default DashBoard
// "use client";
// import React, { useState } from "react";
// import { FaUser } from "react-icons/fa";
// import { TbLayoutDashboardFilled } from "react-icons/tb";
// import { MdAddBox } from "react-icons/md";
// import { TbBrandBooking } from "react-icons/tb";
// import { Sidebar, SidebarBody, SidebarLink } from "../aceternity/sidebar";
// import {
//   IconBrandTabler,
//   IconSettings,
//   IconUserBolt,
//   IconArrowLeft,
// } from "@tabler/icons-react";
// import { cn } from "../lib/utils";
// import { assets } from "../assets/assets";

// const links = [
//   {
//     label: "Dashboard",
//     href: "#",
//     // icon: <IconBrandTabler className="h-5 w-5 text-white" />,
//     icon:<TbLayoutDashboardFilled />,
//   },
//   {
//     label: "Profile",
//     href: "#",
//     // icon: <IconUserBolt className="h-5 w-5  text-white" />,
//     icon:<MdAddBox />,
//   },
//   {
//     label: "Settings",
//     href: "#",
//     icon: <img src={assets.carIcon} />
//   },
//   {
//     label: "Logout",
//     href: "#",
//     // icon: <IconArrowLeft className="h-5 w-5  text-white" />,
//     icon:<TbBrandBooking />
//   },
// ];

// const DashBoard = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="w-full h-screen flex bg-gray-100 ">
//       <Sidebar open={open} setOpen={setOpen}>
//         <SidebarBody className="justify-between gap-10">
//           <div className="flex flex-1 flex-col overflow-y-auto">
//             <div className="mt-8 flex flex-col gap-2">
//               {links.map((link, idx) => (
//                 <SidebarLink key={idx} link={link} />
//               ))}
//             </div>
//           </div>
//           <div className="p-4">
//             <SidebarLink
//               link={{
//                 label: "Manu Arora",
//                 href: "#",
//                 icon: (
//                   <img
//                     src="https://assets.aceternity.com/manu.png"
//                     className="h-7 w-7 shrink-0 rounded-full"
//                     width={50}
//                     height={50}
//                     alt="Avatar"
//                   />
//                 ),
//               }}
//             />
//           </div>
//         </SidebarBody>
//       </Sidebar>

//       <div className="flex-1 p-6 overflow-y-auto">
//         <h1 className="text-xl font-bold text-gray-800 "> Dashboard Content</h1>
//         {/* <FaUser /> */}
//         {/* Add your main page content here */}
//       </div>
//     </div>
//   );
// };

// export default DashBoard;
