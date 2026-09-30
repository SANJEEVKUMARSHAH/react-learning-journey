// // import React, { useState } from 'react'


// // const App = () => {
// //   const [UserName, setUserName] = useState("ram")
// //   return (
// //     <div>
// //       <button onClick={()=> setUserName("hanuman") } className=' px-3 oy-4 m-2  rounded bg-teal-700  text-white' > 
// //         ChangeUser
// //       </button>

// //       <p> user = {UserName} </p>
// //     </div>
// //   )
// // }

// // export default App




// import React, { useState } from 'react'

// const App = () => {
//   const [value, setvalue] = useState(0)
//   return (
//     <div flex items-center >
//       <p className=' text-center py-10 m-10 rounded bg-pink-700 text-3xl text-white' >
//         Value is {value}
//       </p>

//       <button onClick={()=>setvalue(value+1)} className='px-10  ml-70 py-5 m-10 border-white-300 rounded text-xl text-white bg-orange-950 '> Increment  </button>
//        <button onClick={()=>setvalue(value-1)} className='px-10 ml-30 py-5 m-10 border-white-300 rounded text-xl text-white  bg-blue-950 '> Decrement  </button>


//     </div>
//   )
// }

// export default App





// import React from 'react'
// import Navbar from './Components/Navbar'

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Navbar /> 
//     </div>
//   )
// }

// export default App




// import React from 'react'
// import Card from './Components/Card'

// const App = () => {
//   return (
//     <div>
// <p className='text-black'> hi i am sanjeev </p>
// <Card name="Ram" className=" text-black text-2xl font-semibold " /> 

//     </div>
//   )
// }

// export default App



// import React from 'react'
// import Card from './Components/Card'

// const App = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 p-10">

//       <h1 className="mb-8 text-center text-4xl font-bold">
//         User Cards
//       </h1>

//       <div className="flex flex-wrap justify-center gap-6">

//         <Card
//           name="Sanjeev"
//           profession="Web Developer"
//           description="I am a computer engineering student learning React, Tailwind CSS and modern web development."
//         />

//         <Card
//           name="Ram"
//           profession="Software Engineer"
//           description="I enjoy building useful software applications and learning new technologies every day."
//         />

//         <Card
//           name="Hari"
//           profession="UI/UX Designer"
//           description="I love creating clean and user-friendly interfaces that provide a great experience."
//         />

//       </div>

//     </div>
//   )
// }

// export default App




// import React from 'react'
// import Card from './Components/Card'

// const App = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 p-10">

//       <h1 className="mb-8 text-center text-4xl font-bold">
//         User Cards
//       </h1>

//       <div className="flex flex-wrap justify-center gap-6">

//         <Card
//           name="Sanjeev"
//           profession="Web Developer"
//           image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
//           description="I am a computer engineering student learning React, Tailwind CSS and modern web development."
//         />

//         <Card
//           name="Ram"
//           profession="Software Engineer"
//           image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
//           description="I enjoy building useful software applications and learning new technologies every day."
//         />

//         <Card
//           name="Hari"
//           profession="UI/UX Designer"
//           image="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
//           description="I love creating clean and user-friendly interfaces that provide a great experience."
//         />

//       </div>

//     </div>
//   )
// }

// export default App


                                       // form handling 
  //  import React from 'react'
   
  //  const submitHandler =(e)=>{
    
  //   e.preventDefault();
  //   console.log("submitted");
    
  //  }

  //  const App = () => {
  //    return (
  //      <div> 
  //     <form onSubmit={(e)=>{
  //       submitHandler(e);
  //     }}> 

   
  //  <input type='text' className='px-3 w-80 h-44 text-center py-2 m-3 text-black font-semibold border border-e-black shadow-blue-700 rounded ' placeholder='enter name' / > 
  //   <button  className='px-2 rounded  py-3 m-1.5 text-2xl text-center text-black bg-pink-600'> Submit </button>


  //     </form>
     
  //      </div>
  //    )
  //  }
   
  //  export default App


                                        // 2 way binding ✅✅✅


  //  import React, { useState } from 'react'
   
  //  const App = () => {
  //   const [name, setname] = useState("")

  //   const submitHandler =(e)=>{
  //   e.preventDefault();
  //   console.log("submitted");
  //   console.log(name);
    
  //  }

  //    return (
  //      <div> 
  //     <form onSubmit={submitHandler} > 
  //  <input value={name} type='text' onChange={(e)=> setname(e.target.value)} className='px-3 w-80 h-44 text-center py-2 m-3 text-black font-semibold border border-e-black shadow-blue-700 rounded ' placeholder='enter name' / > 
  //   <button  className='px-2 rounded  py-3 m-1.5 text-2xl text-center text-black bg-pink-600'> Submit </button>
  //     </form>
     
  //      </div>
  //    )
  //  }
   
  //  export default App




                            // 2 way binding ✅

// import React, { useState } from 'react'


// const App = () => {
//   const [Name, setName] = useState("")   // Name=> " "  ( kux nahi hai initial value , only khaali string hai )
//   const submitHandler=(e)=>
//   {
//     console.log("submitted");
//     e.preventDefault();
//     console.log(Name);
    
//   }
//   return (
//     <div>
//   {/* <form onSubmit={submitHandler}> */}

//    <form onSubmit={(e)=> submitHandler(e)}>
//     <input  onChange={(e)=>setName(e.target.value)}  value={Name} type='text' className='px-3 py-3 m-2 text-black text-2xl font-semibold bg-blue-300 rounded border border-amber-700 ' ></input>
//    <button className='px-3 py-3 m-2 text-2xl font-semibold bg-amber-600 rounded-2xl text-center  border-amber-900'> Submit </button>
   
//   </form>

//     </div>   // fragments can be used also here instead of div
//   )
// }

// export default App



                       // conditional rendering 

  // using if-else

//     import React from 'react'

// const App = () => {

//   const isLoggedIn = true

//   if (isLoggedIn) {
//     return <h1>Welcome Sanjeev</h1>
//   } else {
//     return <h1>Please Login</h1>
//   }

// }

// export default App



                   // ternary operator conditional rendering

// import React from 'react'

// const App = () => {
//     const isloggedin = true;

//   return (
//     <div>
//     {
//       (isloggedin)? (<h1> welcome </h1> ): (<h1> please login </h1>)
//     }
//     </div>
//   )
// }

// export default App



                             // axios ( api calling tool )

// import React, { useState } from 'react'
// import axios from "axios"

// const App = () => {

//   const [data, setData] = useState([])

//   const getData = async () => {
//     const response = await axios.get("https://picsum.photos/v2/list")

//     console.log(response.data)
//     setData(response.data)
//   }

//   return (
//     <div className="p-10">

//       <button
//         onClick={getData}
//         className="bg-teal-700 text-white px-5 py-4 rounded"
//       >
//         Get Data
//       </button>

//       <div className="p-5 mt-5 bg-gray-950">

//         {data.map(function (ele, idx) {

//           return (
//             <div
//               key={idx}
//               className="mb-5 bg-green-500 p-5"
//             >

//               <img
//                 className="h-40"
//                 src={ele.download_url}
//                 alt={ele.author}
//               />

//  <h1 className="text-white text-xl">
//                Name:  {ele.author}
//               </h1>

//               <h1 className="text-white text-xl">
//                 Width: {ele.width}
//               </h1>

              
//                <h1 className="text-white text-xl">
//                 Height  {ele.height}
//               </h1>

//             </div>
//           )

//         })}

//       </div>

//     </div>
//   )
// }

// export default App


                                    // AXIOS CALLING PRActice


// import React, { useState } from 'react'
// import axios  from 'axios';

// const App = () => {

//   const [data, setdata] = useState([])

//   const getData = async ()=>{
//  const response= await axios.get("https://picsum.photos/v2/list");

//  console.log(response.data);
//  setdata(response.data);

//   }

//   return (
//     <div> 

//    <button onClick={getData} className='px-3 py-4 m-3 rounded bg-black text-center text-white text-2xl font-semibold border shadow-blue-400 border-orange-600'> getData </button>

//    <div> 

//     { data.map(function(ele,idx)
//     {
//      return (
//      <div key={ele.id}>
//        <img src={ele.download_url} alt={ele.author} className='w-52 h-48 px-3 py-3 m-4 '/>
//       <h1 className='px-3 py-3 m-4 text-blue-500 font-semibold'> name: {ele.author}  </h1>
//       </div>

//      )
//     }
//   )
//   }
//    </div>


//     </div>
//   )
// }

// export default App



                         // react router ✅✅


              // this is causing problem ( refreshing) to tackle this, use another approach 

// import React from 'react'

// import Navbar from './Components/Navbar'
// import About from './Components/Pages/About'
// import Home from './Components/Pages/Home'
// import Contact from '../Contact'
// import Account from './Components/Pages/Account'
// import Header from './Components/Header'
// import { Link, Route, Routes } from 'react-router-dom'

// const App = () => {
//   return (
//    <div>

//       <Header />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/account" element={<Account />} />
//       </Routes>

//     </div>
//   )
// }

// export default App



// import React from 'react'
// import { Routes, Route, Link } from 'react-router-dom'

// import Home from './Components/Pages/Home'
// import About from './Components/Pages/About'
// import Account from './Components/Pages/Account'

// const App = () => {
//   return (
//     <div>

//       {/* Navbar */}
//       <div className="py-7 px-10 bg-teal-800 text-white flex items-center justify-between">
//         <h2 className="text-2xl">Sanjeev</h2>

//         <div className="flex gap-10 text-lg">
//           <Link to="/">Home</Link>
//           <Link to="/about">About</Link>
//           <Link to="/account">Account</Link>
//         </div>
//       </div>

//       {/* Routes */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/account" element={<Account />} />
//       </Routes>

//     </div>
//   )
// }

// export default App



// import React from 'react'
// import { Routes, Route } from 'react-router-dom'

// import Header from './Components/Header'

// import Home from './Components/Pages/Home'
// import About from './Components/Pages/About'
// import Account from './Components/Pages/Account'

// const App = () => {
//   return (
//     <div>

//       <Header />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/account" element={<Account />} />
//       </Routes>

//     </div>
//   )
// }

// export default App



import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'
import Students from './Components/Pages/Students'
import Header from './Components/Header/Header'


const App = () => {
  return (
    <div>

<Header />

<Routes>
<Route path='/' element={ <Home/ >} /> 
<Route path='/about' element={ < About/ >} /> 
<Route path='/contact' element={ <Contact/ >} /> 
<Route path='/students' element={ <Students/ >} /> 

</Routes>

    </div>
  )
}

export default App