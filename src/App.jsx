import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="min-h-screen bg-white">
            <Navbar />
            <Home />
            <Footer />
          </div>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}
