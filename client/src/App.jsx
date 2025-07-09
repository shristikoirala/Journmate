import { React } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from  './pages/Signup'
import Login from './pages/Login'
import {BrowserRouter, Routes, Route}  from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/' element={<Home />}></Route>
        
      </Routes>
    </BrowserRouter> 
  )
}

export default App
