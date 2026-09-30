import React from 'react'

const Students = () => {

  const students = [
    {
      id: 1,
      name: "Ram",
      course: "Computer Engineering"
    },

    {
      id: 2,
      name: "Sita",
      course: "Civil Engineering"
    },

    {
      id: 3,
      name: "Hari",
      course: "Electrical Engineering"
    }
  ]

  return (
    <div className="p-10">

      <h1 className="mb-8 text-3xl font-bold">
        Students
      </h1>

      <div className="flex flex-wrap gap-6">

        {students.map((student) => {

          return (
            <div
              key={student.id}
              className="w-72 rounded-xl border p-6 shadow-md"
            >

              <h2 className="text-2xl font-bold">
                {student.name}
              </h2>

              <p className="mt-2 text-gray-600">
                {student.course}
              </p>

            </div>
          )

        })}

      </div>

    </div>
  )
}

export default Students



//     students.map((student) => {  Each object becomes one UI card:


// students
//    ↓
// map()
//    ↓
// Ram   → Card
// Sita  → Card
// Hari  → Card