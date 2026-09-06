// import React from 'react'

// const Card = (props) => {
//   return (
//     <div>
//     <h1 className='text-3xl'> Username is {props.a} </h1>

//     </div>
//   )
// }

// export default Card



                         // json typed card design 

import React from 'react'

const Card = (props) => {
  return (
    <div className='mr-7 bg-white text-black inline-block p-6 text-center rounded '>

     <img
  className="ml-8 h-32 w-32 rounded-full mb-3 mx-auto"
  src={props.photo}
  alt={props.username}
/>
      <h1 className='text-2xl font-semibold mb-4'>
        {props.username}
      </h1>

      <h4 className='text-blue-400'>
        {props.prof}
      </h4>

      <h4>
        {props.city}, {props.age}
      </h4>

      <button className='mt-5 bg-emerald-700 text-white px-4 py-2 rounded font-medium'>
        Add Friend
      </button>

    </div>
  )
}

export default Card