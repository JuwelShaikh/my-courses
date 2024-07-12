
import { useState } from 'react'
import './App.css'
import Courses from './Component/Courses/Courses'
import Header from './Component/Header/Header'
import SCourse from './Component/Seleceted course/SCourse'

function App() {

  const [SlCourse, setSlCourse]= useState([])

  const handleSlCourse = (course) =>{
    // const uniqueSlCourse = [...Set(SlCourse)];
    const newSlCourse = [...SlCourse, course];
    setSlCourse(newSlCourse)
  }


  return (
    <div className=' max-w-7xl items-center mx-auto'>
      <Header />
      <div className='flex'>
        <Courses handleSlCourse={handleSlCourse}/>
        <SCourse SlCourse={SlCourse}/>
      </div>
    </div>
  )
}

export default App
