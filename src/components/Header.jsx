import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='py-7 px-10 bg-emerald-600 text-white flex items-center justify-between'>
        <h2 className='text-2xl'> sanjeev </h2>
        <div className='flex gap-10'> 
            
        {/* <a  className='text-xl' href="/home" > Home </a>
        <a  className='text-xl'href="/about"> About</a>
        <a  className='text-xl'href="/contact"> Contact </a>
        <a  className='text-xl'href=" /product"> Product </a> */}


    <Link to= "/home"> Home </Link>
    <Link to= "/about"> About </Link>
    <Link to= "/product"> Product </Link>
    <Link to= "/contact"> Contact </Link>

        </div>



    </div>
  )
}

export default Header