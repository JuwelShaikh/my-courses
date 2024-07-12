
import { useState } from 'react'
import './App.css'
import Courses from './Component/Courses/Courses'
import Header from './Component/Header/Header'
import SCourse from './Component/Seleceted course/SCourse'

function App() {

  const [SlCourse, setSlCourse] = useState([])
  const [cPrice, setPrice] =useState(0);
  const [cTime , setTime] = useState(0);

  const handleSlCourse = (course, price, time) => {

    const newSlCourse = [...SlCourse, course];
    setSlCourse(newSlCourse)

    const newPrice = cPrice + price;
    setPrice(newPrice);

    const newTime = cTime + time;
    setTime(newTime);
  }


  return (
    <div className=' max-w-7xl items-center mx-auto'>
      <Header />
      <div className='flex'>
        <Courses handleSlCourse={handleSlCourse} />
        <SCourse 
        SlCourse={SlCourse}
        cPrice={cPrice}
        cTime={cTime}
         />
      </div>
    </div>
  )
}

export default App
