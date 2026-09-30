import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()

  const handleStudents = () => {
    navigate('/students')
  }

  return (
    <div className="p-10 text-center">

      <h1 className="text-4xl font-bold">
        Welcome to Sanjeev Student Portal
      </h1>

      <p className="mt-4 text-xl text-gray-600">
        Learn • Build • Achieve
      </p>

      <button
        onClick={handleStudents}
        className="mt-6 rounded-lg bg-teal-700 px-6 py-3 text-white hover:bg-teal-800"
      >
        View Students
      </button>

    </div>
  )
}

export default Home




//    const navigate = useNavigate()   =>  gives you a function that can change the route.
//    navigate('/students')  => takes the user to:  /students