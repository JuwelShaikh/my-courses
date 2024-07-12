
import './App.css'
import Courses from './Component/Courses/Courses'
import Header from './Component/Header/Header'
import SCourse from './Component/Seleceted course/SCourse'

function App() {


  return (
    <div className=' max-w-7xl items-center mx-auto'>
      <Header />
      <div className='flex'>
        <Courses />
        <SCourse />
      </div>
    </div>
  )
}

export default App
