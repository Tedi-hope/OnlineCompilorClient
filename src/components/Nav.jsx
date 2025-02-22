import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="container-fluid py-8 px-10 bg-darkGreen ">
       <div className="max-lg border-2 border-white">
          <div className="flex justify-between items-center">
            <div className="text-white ">
               BOC
            </div>
            <div class="text-white text-lg">
              <Link to='/'>Home</Link>
              <Link to='/practice'>Practice</Link>
              <Link to='/quiz'>Quiz</Link>
              <Link to='/codinglevel'>Coding Level</Link>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Nav