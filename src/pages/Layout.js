import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from '../components/HomePage'
import Aboutus from '../components/About-us'
import NotFoundPage from './NotFoundPage'
import Navbar from '../components/Navbar'
import Feedback from './Feedback'

const Layout = () => {
  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about-me" element={<Aboutus />} />
        <Route exact path='/feedback' element={<Feedback />} />
        <Route element={<NotFoundPage />} />
      </Routes>
    </div>
  </Router>
  )
}

export default Layout