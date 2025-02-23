import React from 'react'
import Nav from '../components/Nav'

const Home = () => {
  return (
    <>
    <Nav />
    <section>
       <div className="container-fluid max-w-full px-7 py-5 text-white">
         <div className="flex flex-col justify-between items-center md:flex-row ">
            <div>
              <h3>Compile Online</h3>
            </div>
            <div>
              <button>Coding Level Test</button>
            </div>
         </div>
       </div>
    </section>
    <section className="bg-darkGreen text-white">
      <div className="container-fluid max-w-full h-screen px-7 py-4 ">
        <div>Select Language</div>
         <div className="flex flex-col justify-between items-center space-y-4 md:space-y-0 md:flex-row md:space-x-3 h-full">
           <div className="w-full h-4/5 md:w-1/2 px-7 py-3   bg-lightDark rounded-md">
             code editor
           </div>
           <div className="w-full h-4/5 md:w-1/2 px-7 py-3  bg-lightDark rounded-md">
             output
           </div>
         </div>
      </div>
    </section>
    <section>
      <div className="container-fluid px-10 py-10 text-white">
        <div className="flex flex-col md:flex-row ">
           description
        </div>
      </div>
    </section>
    </>
  )
}

export default Home