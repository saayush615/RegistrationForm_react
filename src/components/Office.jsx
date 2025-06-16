import React from 'react'

const Office = () => {
  return (
    <div>

        <form className='flex flex-col' >

          <div className='label-style'>
            <label htmlFor="email">Email : </label>
            <input className='input-box' type="email" id='email' name='email' />
          </div>

          <div className='label-style'>
            <label htmlFor="pass">Password : </label>
            <input className='input-box' type="password" id='pass' name='pass' />
          </div>

          <button className='w-full bg-blue-600 text-white py-2 rounded-lg cursor-pointer font-semibold hover:bg-blue-700 transition' type='submit'>Submit</button>
        </form>
      
    </div>
  )
}

export default Office
