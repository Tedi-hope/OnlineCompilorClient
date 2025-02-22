import { useState,useEffect } from 'react'
import Nav from './components/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Practice from './pages/Practice'
import Quiz from './pages/Quiz'
import CodingLevel from './pages/CodingLevel'


function App() {
  
  return (
    <>
     <BrowserRouter>
     <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/practice' element={<Practice />}></Route>
        <Route path='/quiz' element={<Quiz />}></Route>
        <Route path='/codinglevel' element={<CodingLevel />}></Route>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
