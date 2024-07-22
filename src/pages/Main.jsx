import React from 'react'
import Header from '../components/Header'
import Trending from '../components/Trending'
import { Outlet } from 'react-router-dom'

const Main = ({ setDescriptionId }) => {
  return (
    <div className='w-full h-full'>
      <Header />
      <div className='relative p-10 bg-cover bg-center bg-fixed h-full' style={{ backgroundImage: "url('/backgroundAnime.jpeg')" }}>
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='relative z-10 mt-10 h-100'>

          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Main
