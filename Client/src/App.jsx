/* eslint-disable no-unused-vars */
import React from 'react'
import LandingPage from './Components/LandingPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Components/Login'
import Home from './Components/Home'
import CarDetailsMain from './Components/CarDetailsMain'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/cardetailsmain' element={<CarDetailsMain/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App