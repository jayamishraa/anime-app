import React from 'react'
import Header from '../components/Header'
import Trending from '../components/Trending'
import { Outlet } from 'react-router-dom'

const Main = ({setDescriptionId}) => {
  return (
    <div>
      <Header />
        {/* <Trending setDescriptionId={setDescriptionId} /> */}
      
      <Outlet />
    </div>
  )
}

export default Main
