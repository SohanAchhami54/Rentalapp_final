import React from 'react'

const Footer = () => {
  return (
   <>
   <div>
      <footer className=" flex flex-col md:flex-row gap-3 items-center justify-around w-full mt-10 py-4 text-sm bg-slate-800 text-white/70">
    <p>Copyright © {new Date().getFullYear()} RentalApp. All rights reservered.</p>
    <div className="flex items-center gap-4">
        <a href="#" className="hover:text-white transition-all">
            Contact Us
        </a>
        <div className="h-8 w-px bg-white/20"></div>
        <a href="#" className="hover:text-white transition-all">
            Privacy Policy
        </a>
        <div className="h-8 w-px bg-white/20"></div>
        <a href="#" className="hover:text-white transition-all">
            Trademark Policy
        </a>
    </div>
    
 </footer>
 </div>
   </>
  )
}
export default Footer
