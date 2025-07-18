import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout, HomePage, AboutPage, DashboardContent } from './pages/Dashboard' 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Home page */}
          <Route index element={<HomePage />} />
          
          {/* About page */}
          <Route path="about" element={<AboutPage />} />
          
          {/* Dashboard page - using just the content */}
          <Route path="dashboard" element={<DashboardContent />} />
          
          {/* Authentication pages */}
          <Route path="register" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App