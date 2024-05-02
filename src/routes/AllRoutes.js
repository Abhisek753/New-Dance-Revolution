import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import SignupPage from '../pages/signup/SignupPage'
import LoginPage from '../pages/login/Login'
import Home from "../pages/Home/Index"
const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/signup' element={<SignupPage/>}  />
            <Route path='/login' element={<LoginPage/>}  />
            <Route path='/' element={<Home/>}  />


        </Routes>
    </div>
  )
}

export default AllRoutes