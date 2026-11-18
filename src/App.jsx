import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className='bg-amber-400'>
      <Navbar/>
        <Home/>
      <Footer/>
    </div>
  )
}
