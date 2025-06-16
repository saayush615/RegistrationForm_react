import React from 'react'

const Personal = () => {
  return (
    <div>

        <form className='flex flex-col' >
          <div className='label-style'>
            <label htmlFor="fullName">Full Name : </label>
            <input className='input-box' type="text" id='fullName' name='fullName' />
          </div>

          <div className='label-style'>
            <label htmlFor="email">Email : </label>
            <input className='input-box' type="email" id='email' name='email' />
          </div>

            <div>
              <p>Gender : </p>
              <div className="flex gap-4">
                {["male", "female", "others"].map((gender) => (
                  <label key={gender} htmlFor={gender} className="inline-flex items-center gap-1">
                    <input
                      type="radio"
                      id={gender}
                      name="gender"
                      value={gender}
                      className="accent-blue-500"
                    />
                    <span className="capitalize">{gender}</span>
                  </label>
                ))}
              </div>
            </div>

          <div className='label-style'>
            <label htmlFor="dob">DOB : </label>
            <input className='input-box' type="date" id='dob' name='dob' />
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

export default Personal
