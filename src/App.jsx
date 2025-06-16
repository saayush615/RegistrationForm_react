import { useState } from 'react'
import './App.css'
import Personal from './components/Personal'
import Office from './components/office'

function App() {
  const [showPersonal, setShowPersonal] = useState(true)

  const handlePersonalChange = (e) => { 
    // console.log(e.target);
    setShowPersonal(e.target.value === 'personal');
   }

  return (
    <>
      <div className='bg-white w-1/3 h-auto mx-auto my-30 p-5 rounded-2xl'>

          <h3 className='text-4xl text-center'>Registration</h3>
          <hr className='border-gray-700 my-3' />

          <div className='text-xl flex justify-center items-center gap-5'>
            <label htmlFor="Personal">
              <input type="radio" id='Office' name='designation' value='personal' className='w-4 h-4 cursor-pointer accent-blue-500' checked={showPersonal} onChange={handlePersonalChange} />
              Personal
            </label>

            <label htmlFor="Office">
              <input type="radio" id='Office' name='designation' value='Office' className='w-4 h-4 cursor-pointer accent-blue-500' checked={!showPersonal} onChange={handlePersonalChange} />
              Office
            </label>
          </div>

          <hr className='border-gray-700 my-3' />

          {
            showPersonal ? <Personal /> : <Office />
          }

      </div>
    </>
  )
}

export default App
