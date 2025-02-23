import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="container-fluid py-6 px-10 bg-darkGreen ">
       <div className="max-w-full">
          <div className="flex justify-between items-center text-white text-lg ">
            <div className="text-white ">
               BOC
            </div>
            <div class="flex flex-row justify-between space-x-10">
              <div className="md:space-x-12">
                 <Link to='/'>Home</Link>
                 <Link to='/practice'>Practice</Link>
                 <Link to='/quiz'>Quiz</Link>
                 <Link to='/codinglevel'>Coding Level</Link>
              </div>
              <div>|</div>
              <div className="">
                <form action="">
                 <select name="" id="" className="w-26 h-7 rounded-md bg-black">
                  <option value="">My profile</option>
                  <option value="">Edit Profile</option>
                 </select>
                 </form>
              </div>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Nav