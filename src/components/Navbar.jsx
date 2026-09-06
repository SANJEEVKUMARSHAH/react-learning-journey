import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-emerald-950 flex py-5 px-3 gap-50'> 
    <h2 className='text-2xl'> Sanjeev </h2>
    <div className='flex gap-10 items-center'>
    <h4 className='text-xl'> About </h4>    
    <h4 className='text-xl'> Contact </h4>   
    <h4 className='text-xl'> Services </h4>   
    <h4 className='text-xl'> Your Account  </h4>   
        
     </div>

    </nav>
  )
}

export default Navbar