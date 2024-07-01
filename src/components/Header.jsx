import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-center items-center'> 
      <div className='px-5 py-3'>Trending</div>
      <div className='px-5 py-3'>Discover</div>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 rounded'>Login</button>
    </div>
  )
}

export default Header
