import React from 'react'
import { Outlet } from 'react-router-dom'

const Details = ({ descriptionId, setDescriptionId }) => {
  return (
    <div>
      hi
      <Outlet />
    </div>
  )
}

export default Details
