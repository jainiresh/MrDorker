import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Dorker from '../components/Dorker'
import Aboutus from '../components/About-us'
import NotFoundPage from './NotFoundPage'
import Navbar from '../components/Navbar'
import Feedback from './Feedback'
import LoginPage from './LoginPage'

const Layout = () => {
  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Dorker />} />
        <Route exact path="/dorker" element={<Dorker />} />
        <Route exact path="/about-me" element={<Aboutus />} />
        <Route exact path='/feedback' element={<Feedback />} />
        <Route exact path='/login' element={<LoginPage formName={'login'}/>}  />
        <Route exact path='/register' element={<LoginPage formName={'registration'}/>}  />
        <Route element={<NotFoundPage />} />
      </Routes>
    </div>
  </Router>
  )
}

export default Layout