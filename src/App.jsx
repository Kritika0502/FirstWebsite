import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Button from './Button'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/services" element={<Services/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
