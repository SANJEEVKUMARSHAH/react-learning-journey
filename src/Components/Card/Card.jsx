// import React from 'react'

// const Card = (props) => {
//     console.log(props.name)
//   return (
//     <div>
//         <h1 className='text-3xl text-shadow-black-400 m-3 px-5 py-4 border-black-700 rounded-2xl'> Username is {props.name} </h1>
//     </div>
//   )
// }

// export default Card



// import React from 'react'

// const Card = (props) => {
//   console.log(props.name)

//   return (
//     <div>
//       <h1 className={`w-80 rounded-2xl border border-gray-200 bg-white p-6 shadow-md ${props.className}`}>
//         Username is {props.name}
//       </h1>
//     </div>
//   )
// }

// export default Card





// import React from 'react'

// const Card = (props) => {
//   return (
//     <div className="w-80 rounded-2xl border border-gray-200 bg-white p-6 shadow-md">

//       {/* Username */}
//       <h2 className="text-2xl font-bold text-gray-800">
//         {props.name}
//       </h2>

//       {/* Profession */}
//       <p className="mt-1 text-sm font-semibold text-blue-600">
//         {props.profession}
//       </p>

//       {/* Description */}
//       <p className="mt-4 line-clamp-2 text-gray-600">
//         {props.description}
//       </p>

//       {/* Button */}
//       <button className="mt-5 rounded-lg bg-black px-4 py-2 text-white transition hover:bg-gray-800">
//         See More
//       </button>

//     </div>
//   )
// }

// export default Card





import React from 'react'

const Card = (props) => {
  return (
    <div className="w-80 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">

      {/* Profile Image */}
      <img
        src={props.image}
        alt={props.name}
        className="h-56 w-full object-cover"
      />

      {/* Card Content */}
      <div className="p-6">

        {/* Username */}
        <h2 className="text-2xl font-bold text-gray-800">
          {props.name}
        </h2>

        {/* Profession */}
        <p className="mt-1 text-sm font-semibold text-blue-600">
          {props.profession}
        </p>

        {/* Description */}
        <p className="mt-4 line-clamp-2 text-gray-600">
          {props.description}
        </p>

        {/* See More Button */}
        <button className="mt-5 rounded-lg bg-black px-4 py-2 text-white transition hover:bg-gray-800">
          See More
        </button>

      </div>

    </div>
  )
}

export default Card

