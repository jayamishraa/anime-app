import React from 'react'
import Header from '../components/Header'
import Trending from '../components/Trending'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div>
      <Header />
      <Trending />
      
      <Outlet />
    </div>
  )
}

export default Main
