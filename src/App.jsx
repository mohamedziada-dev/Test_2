import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FindWork from './pages/FindWork'

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="min-h-screen bg-white">
            <Navbar />
            <Home />
            <FindWork />
            <Footer />
          </div>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}
