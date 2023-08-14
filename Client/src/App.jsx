/* eslint-disable no-unused-vars */
import React from 'react'
import Home from './Components/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Components/Login'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App