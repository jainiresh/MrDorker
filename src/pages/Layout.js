import React, { useEffect } from 'react'
import {BrowserRouter as Router, Route, Routes, BrowserRouter, Outlet, Navigate, useNavigate} from 'react-router-dom'


import Navbar from '../components/NavBar/NavBar';
import Login from './NewAuthPage/Login';
import Register from './NewAuthPage/Register';
import Profile from './NewAuthPage/Profile';
import Dashboard from './Dashboard';
import GoogleDork from './Dorking/Google/GoogleDork';
import GithubDork from './Dorking/Github/GithubDork';
import { useSelector } from 'react-redux';
import HomePage from './NewAuthPage/HomePage';
import ShodanDork from './Dorking/Shodan/ShodanDork';
import AiGenerator from './AIReportGenerator/AiGenerator';

const Layout = () => {

  const {isAuthenticated} = useSelector(state => state.authReducer)
  console.log('isAuth', isAuthenticated);

  
  // const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(()=>{
    if(!isAuthenticated)
      navigate('/login')
  },[])

  const PrivateRoutes = () => {
    console.log('user ' , isAuthenticated)
    return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
  }
  return (
   <>
       <Navbar />
    <div className="App">
      <div className="max-w-[100%] md:max-w-[100%] mx-auto">
        <Routes>
          <Route element={<Login/>} path="/login"/>
          <Route element={<Register/>} path="/register"/>
          <Route element={<HomePage />} path="/"/>
          <Route element={<PrivateRoutes/>} >
          <Route element={<Profile/>} path="/profile" />
          <Route element={<Dashboard />} path='/dashboard' />
          <Route element={<GoogleDork />} path='/dorks/google'/>
          <Route element={<GithubDork />} path='/dorks/github'/>
          <Route element={<ShodanDork />} path='/dorks/shodan'/>
          <Route element={<AiGenerator />} path='/ai-report'/>
            </Route>
          
        </Routes>
      </div>
    </div>
    {/* <div className='App'>
    <Layout/>
    </div> */}</>
  )
}

export default Layout