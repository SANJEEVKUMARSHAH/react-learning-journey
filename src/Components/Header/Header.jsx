// import React from 'react'
// import { Link } from 'react-router-dom'

// const Header = () => {
//   return (
//     <div className="py-7 px-10 bg-teal-800 text-white flex items-center justify-between">
      
//       <h2 className="text-2xl">
//         Sanjeev
//       </h2>

//       <div className="flex gap-10 text-lg">
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/account">Account</Link>
//       </div>

//     </div>
//   )
// }

// export default Header




import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-teal-800 px-10 py-6 text-white">

      <h1 className="text-2xl font-bold">
        Sanjeev Portal
      </h1>

      <div className="flex gap-8 text-lg">

        <Link to="/">
          Home
        </Link>

        <Link to="/about">
          About
        </Link>

        <Link to="/students">
          Students
        </Link>

        <Link to="/contact">
          Contact
        </Link>

      </div>

    </div>
  )
}

export default Header