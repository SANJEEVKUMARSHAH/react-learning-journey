// import React from 'react'
// import { useState } from 'react'

// function Hi(){
//   let user="sanjeev"
//   return<div> 
// <h1> hi {user} welcome to react session </h1>
//   </div>
// }

// export default Hi


             // example 2

// import React from 'react'
// import { useState } from 'react'

// function App() {
//   const [A, setA] = useState(0)
//   const increment =()=>{ setA(A + 1)}
//    const decrement =()=>{ setA(A - 1)}
//   return (
//     <div>
//       <h1> hi play the game of increment and decrement , the value is  {A} </h1>
//       <button onClick={increment} className='btn-i'> increment </button>
//        <button onClick={decrement} className='btn-ii'> Decrement </button>
//     </div>
//   )
// }

// export default App


            // example 3


// import React , {useState} from 'react'

// const User = ()=>{
//   const [user, setuser] = useState("Ram");
//   return <div> 
//     <h1> hi {user} welcome to Tech Lakshya Yt Channel </h1>
//     <button onClick={()=>setuser("Sanjeev")}  className='btn-i'> Change User </button>
//   </div>
// }

// export default User


                // example 4

// import React, { useState } from 'react'

// const User = () => {
//   const [user, setUser] = useState("Ram")

//   const ChangeUser = () => {
//     setUser("Sanjeev")
//   }

//   return (
//     <div>
//       <h1>Hi {user}, welcome to Tech Lakshya YT Channel</h1>

//       <button onClick={ChangeUser} className="btn-i">
//         Change User
//       </button>
//     </div>
//   )
// }

// export default User


                      // example -> 5 Learn Conditional Rendering  🧠🧠

// import React, { useState } from "react";

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <div>
//       {isLoggedIn ? (
//         <h1>Welcome Sanjeev</h1>
//       ) : (
//         <h1>Please Login</h1>
//       )}

//       <button onClick={() => setIsLoggedIn(!isLoggedIn)} className="btn-i">
//         Login / Logout
//       </button>
//     </div>
//   );
// };

// export default App;


             // example -6 => 2 button for conditional handling  ✅  ( log in / log out button )

// import React, { useState } from 'react'

// const user = "Ram"

// const App = () => {
//   const [login, setLogin] = useState(true)

//   return (
//     <div>
//       {login ? ( <h1>Welcome {user}</h1> ) : ( <h1>Please login first</h1>  )}

//       <button onClick={() => setLogin(true)}  className="btn-i" > Log in  </button>
//       <button onClick={() => setLogin(false)}  className="btn-ii" > Log out  </button>
//     </div>
//   )
// }

// export default App

                       // example -7 ( dark mode / light mode )


// import React, { useState } from 'react'

// const App = () => {
//   const [light, setLight] = useState(true)

//   return (
//     <div
//       style={{
//         minHeight: '100vh',
//         padding: '40px',
//         backgroundColor: light ? 'white' : 'black',
//         color: light ? 'black' : 'white',
//         textAlign: 'center',
//         transition: '0.3s'
//       }}
//     >
//       {/* Heading */}
//       <h1>
//         {light ? '☀️ Light Mode is ON' : '🌙 Dark Mode is ON'}
//       </h1>

//       <p>
//         Current mode: {light ? 'Light' : 'Dark'}
//       </p>

//       {/* Buttons */}
//       <button
//         onClick={() => setLight(true)}
//         className="btn-i"
//       >
//         ☀️ Light Mode
//       </button>

//       <button
//         onClick={() => setLight(false)}
//         className="btn-ii"
//       >
//         🌙 Dark Mode
//       </button>
//     </div>
//   )
// }

// export default App



                         // Rendering Lists with map() ✅
            // array as a string

// import React from 'react'

// const App = () => {
//   const users = ["Ram", "Sanjeev", "Hari", "Shyam"]
//   return (
//     <div>
// {

// users.map((user)=> <h2 key={user}> {user} </h2>)

// }
//     </div>
//   )
// }

// export default App


                // json format type

// import React from 'react'

// const App = () => {
//   const users = [
//     { name: "Ram", age: 20 },
//    { name: "Sanjeev", age: 20 },
//     { name: "Hari", age: 21 },
//     { name: "Shyam", age: 19 }
//   ]
//   return (
//     <div>
// {  users.map((user) => <div key={user.name} > 
//   <h1> Name:  {user.name} </h1> 
//   <p> Age:  {user.age} </p> 
//   </div>
//   ) }
//     </div>
//   )
// }
// export default App
  

                             // next examples ✅

// import React from 'react'

// function App() {
//   const students = [
//     {
//       id: 1,
//       name: "Sanjeev",
//       department: "Computer Engineering",
//       gpa: 3.62
//     },
//     {
//       id: 2,
//       name: "Ram",
//       department: "Electrical Engineering",
//       gpa: 3.45
//     },
//     {
//       id: 3,
//       name: "Hari",
//       department: "Mechanical Engineering",
//       gpa: 3.80
//     }
//   ]

//   return (
//     <div>
//       {students.map((student) => (
//         <div key={student.id}>
//           <h1>{student.name}</h1>
//           <p>{student.department}</p>
//           <p>GPA: {student.gpa}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default App



                          // props ✅✅
        // Props = properties/data passed from a parent component to a child component. 🙌🙌
  
// import React from 'react'

//                     // Child
// const StudentCard = (props) => {
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <p>{props.department}</p>
//       <p>GPA: {props.gpa}</p>
//     </div>
//   )
// }

//      //    Parent
// const App = () => {
//   return (
//     <div>
//       <StudentCard
//         name="Sanjeev"
//         department="Computer Engineering"
//         gpa={3.62}
//       />

//       <StudentCard
//         name="Ram"
//         department="Electrical Engineering"
//         gpa={3.45}
//       />

//       <StudentCard
//         name="Hari"
//         department="Mechanical Engineering"
//         gpa={3.80}
//       />
//     </div>
//   )
// }

// export default App

                              // using props 🔥
// import React from "react";
//       // child is acquiring property from parent 
// const StudentCard = (props) => {
//   return <div> 
//   <h1> {props.name} </h1>
//   <h1>{ props.department} </h1>
//   <h1> {props.gpa }</h1>
//           </div>
// }


//          // parent is sending their property to child through props
// const App = ()=> {

//   return <div> 
//  <StudentCard 
//  name="sanjeev"
//  department="computer engg"
//  gpa = {3.98}
//  />

//  <StudentCard 
//  name="Ram"
//  department="civil engg"
//  gpa = {3.89}
 
// />

//  <StudentCard 
//  name="Hanuman"
//  department="mechanical engg"
//  gpa = {3.88}
 
// />

//  <StudentCard 
//  name="Sita "
//  department="electrical engg"
//  gpa = {3.87}
 
// />

//   </div>
//  }

// export default App



                  //  Option 2 — Destructuring ⭐

//                   import React from 'react'

//                             const Studentcard = ({name,department,gpa}) => {
//                     return <div> 
// <h1> {name}  </h1>
// <h2> {department}  </h2>
// <h3> {gpa}  </h3>
//                     </div>

//                   }

                  
//                   function App() {
//                     return (
//                       <div>
// <Studentcard
// name = "sanjeev"
// department ="compueter engineering "
// gpa= {4.00}
// />

// <Studentcard
// name = "Ram"
// department ="electrical  engineering "
// gpa= {3.90}
// />

// <Studentcard
// name = "hanuman"
// department ="mechanical  engineering "
// gpa= {3.97}
// />

//                       </div>
//                     )
//                   }
                  

        


//       export default App


      // NOTE => 
      //   For a React component, use an UPPERCASE first letter.
      //   React treats lowercase JSX names as HTML elements.



                    // form  in react ✅✅✅

// import React, { useState } from 'react'

// const App = () => {

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: ""
//   })

//   const handleChange = (e) => {

//     const { name, value } = e.target

//     setFormData({
//       ...formData,
//       [name]: value
//     })
//   }

//   const handleSubmit = (e) => {

//     e.preventDefault()

//     console.log(formData)
//   }

//   return (
//     <div>

//       <h1>Registration Form</h1>

//       <form onSubmit={handleSubmit}>

//         <input
//           type="text"
//           name="name"
//           placeholder="Enter your name"
//           value={formData.name}
//           onChange={handleChange}
//         />

//         <br />

//         <input
//           type="email"
//           name="email"
//           placeholder="Enter your email"
//           value={formData.email}
//           onChange={handleChange}
//         />

//         <br />

//         <input
//           type="password"
//           name="password"
//           placeholder="Enter your password"
//           value={formData.password}
//           onChange={handleChange}
//         />

//         <br />

//         <button type="submit">
//           Register
//         </button>

//       </form>

//     </div>
//   )
// }

// export default App

                           // self ✅✅

// import React , {useState} from 'react'

// const App = () => {
//   const submitHandler = (e) => {
//     e.preventDefault();
//     console.log("submitted");
//   }
//   return (
//     <div>
//   <form onSubmit={(e)=> { submitHandler(e)}}>
//   <input type='text' placeholder='enter your name' required />
// <button className="btn-i">
//   Submit
// </button>
    
    
//    </form>

//     </div>
//   )
// }

// export default App


                                   // use state se kaise kare isse ✅  ( 2 way binding )

// import React, { useState } from 'react'

// const App = () => {

//   const [name, setName] = useState("")

//   const submitHandler = (e) => {
//     e.preventDefault()
//     console.log(name)
//   }

//   return (
//     <div>
//       <form
//         onSubmit={submitHandler}
//         className="flex gap-4 p-10 m-5"
//       >

//         <input
//           type="text"
//           placeholder="Enter your name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//           className="px-5 py-3 border border-gray-400 rounded"
//         />

//         <button
//           type="submit"
//           className="px-8 py-3 w-22 text-xl rounded bg-red-500 text-white"
//         >
//           Submit
//         </button>

//       </form>
//     </div>
//   )
// }

// export default App



                             // FRAGMENTS IN REACT ✅✅

  // import React,{useState} from 'react'

  // function App() {
  //   let name="sanjeev";
  //   const [age, setage] = useState(21)
  //   const [count, setcount] = useState(0)
  //   return (
  //     <>  
  //     <h1> hi , i am {name}</h1>
  //     <h2> my age is {age} </h2>
  //     <h4> play increment / decrement  game with me {count} </h4>
  //     <button onClick={()=> setcount(count + 1 )}  className='btn-i'> INcrement </button>
  //     <button onClick={()=> setcount(count - 1 )}  className='btn-ii'> Decrement </button>
      
  //     </>
  //   )
  // }
  
  // export default App

                             // Components ✅✅
// for this , make a folder inside src with components name then make a file inside it with first letter capital and export it . 
//   after this, import that particular folder into App.jsx and use it with the exact foldername like a html tags .


// import Navbar from './components/Navbar'
// import Footer from './components/Footer'

// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <Footer />
//     </>
//   )
// }

// export default App


                                     // props ( properties ) ✅✅ 
  // under components folder, make a folder name Card.jsx
  // let us use that Card as a html tag

//  import React from 'react'
//  import Card from './components/Card'

//  const App = () => {
//   const num = 10;
//    return (
//      <div>
// {/* <Card> a={num} </Card>    // this is wrong ❌, Pass the prop inside the opening tag: */}

// {/* <Card a={num}>  </Card>    // method -1 ✅✅ */}

// <Card a={num} / > 
//      </div>
//    )
//  }
 
//  export default App



                      // examples -> Json File ✅✅   ( best and better )

//  import React from 'react'
// import Card from './components/Card'

// const App = () => {

//   const users = [
//     {
//       id: 1,
//       name: "Alex Johnson",
//       age: 24,
//       city: "New York",
//       profilePhoto: "https://randomuser.me/api/portraits/men/32.jpg"
//     },
//     {
//       id: 2,
//       name: "Emily Carter",
//       age: 22,
//       city: "London",
//       profilePhoto: "https://randomuser.me/api/portraits/women/44.jpg"
//     },
//     {
//       id: 3,
//       name: "Daniel Smith",
//       age: 27,
//       city: "Toronto",
//       profilePhoto: "https://randomuser.me/api/portraits/men/46.jpg"
//     },
//     {
//       id: 4,
//       name: "Sophia Wilson",
//       age: 25,
//       city: "Sydney",
//       profilePhoto: "https://randomuser.me/api/portraits/women/65.jpg"
//     },
//     {
//       id: 5,
//       name: "Michael Brown",
//       age: 29,
//       city: "Melbourne",
//       profilePhoto: "https://randomuser.me/api/portraits/men/75.jpg"
//     },
//     {
//       id: 6,
//       name: "Olivia Davis",
//       age: 23,
//       city: "Paris",
//       profilePhoto: "https://randomuser.me/api/portraits/women/68.jpg"
//     }
//   ]

//   return (
//     <div>
//       <div className="p-10">
        
//         {users.map((user) => {
//           return (
//             <Card
//               key={user.id}
//               username={user.name}
//               age={user.age}
//               city={user.city}
//               photo={user.profilePhoto}
//             />
//           )
//         })}

//       </div>
//     </div>
//   )
// }

// export default App


                                  // Axios ✅✅✅ 
  // Axios is a JavaScript library used to send HTTP requests from your React app to a server/API.
  // React app → Axios → API/server → data → React app

      //   url of api is =>   https://picsum.photos/v2/list

      // import React from 'react'
      // import axios from 'axios';
      // import { useState } from 'react';
      
      // const App = () => {
      //   const [data, setdata] = useState([])
      //   const getData = async ()=>{
      //    const response =  await axios.get('https://picsum.photos/v2/list ');
      //    console.log(response.data);            // use this to know what to do and how it can be done 
      //       setdata(response.data)
      //   }
      //   return (
      //     <div className='p-10'> 
      //     <button onClick={getData} className='bg-teal-600 text-white py-3 px-5 m-3 rounded w-22' > Click Me </button>
      //     <div className='p-5 mt-5 bg-gray-950'>   
      //     {data.map(function ( ele, idx) 
      //   {
      //   return <div key={idx} className='bg-green'>
      //     <img className='h-40' src= {ele.download_url}  /> 
      //     <h1> {ele.author} </h1> 
      //     </div>


      //   }  
        
      //   )}       
          
      //      </div>
      //      </div>
      //   )
      // }
      
      // export default App

              
       
                                 // useEffect in the above program ✅✅
  // useEffect is a React Hook used when you want to perform a side effect in a component.
  // Run some code automatically when the component loads or when something changes.

//  import React from 'react'
//       import axios from 'axios';
//       import { useState } from 'react';
//       import { useEffect } from 'react';
      
//       const App = () => {
//         const [data, setdata] = useState([])
//         const getData = async ()=>{
//          const response =  await axios.get('https://picsum.photos/v2/list ');
//          console.log(response.data);
//             setdata(response.data)
//         }

//         useEffect(() => {
//           getData()
          
//         }, [])
        
//         return (
//           <div className='p-10'> 
//           <button onClick={getData} className='bg-teal-600 text-white py-3 px-5 m-3 rounded w-22' > Click Me </button>
//           <div className='p-5 mt-5 bg-gray-950'>   
//           {data.map(function ( ele, idx) 
//         {
//         return <div key={idx} className='bg-green'>
//           <img className='h-40' src= {ele.download_url}  /> 
//           <h1> {ele.author} </h1> 
//           </div>


//         }  
        
//         )}       
          
//            </div>
//            </div>
//         )
//       }
      
//       export default App



                              // React Router ✅✅✅✅
  // React Router is a library used to create multiple pages/routes 
  // in a React application without reloading the browser.

  // routing => In React, routing means showing different components/pages based on the URL, 
                              // usually without reloading the whole webpage.
 
//       /         → Home page
//   /about        → About page
//   /products     → Products page
//   /login        → Login page

          // Install it:    =>    npm install react-router-dom  ✅

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from './pages/Product'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Header from './components/Header'



          const App = () => {
            return (
              <div>
                <Header> </Header>
           <Routes> 
           <Route path='/' element={<Home/>}> </Route>
           <Route path='/home' element={<Home/>}> </Route>
           <Route path='/about' element={<About/>}> </Route>
           <Route path='/product' element={<Product/>}> </Route>
           <Route path='/contact' element={<Contact/>}> </Route>

           </Routes>




              </div>
            )
          }
          
          export default App