import React from 'react'
import { Link } from 'react-router-dom'

const Navber = () => {
  return (
    <div className="navbar container mx-auto h-20 flex items-center justify-between border-b border-sky-900">
      <Link to="/" className='logo text-2xl font-medium text-sky-400'>ExpressJs
      </Link>
      </div>
  )
}

export default Navber;