import React, { useEffect } from 'react'
import {BrowserRouter as Router, Route, Routes, BrowserRouter, Outlet, Navigate, useNavigate} from 'react-router-dom'


import Navbar from '../components/NavBar/NavBar';
import Login from './NewAuthPage/Login';
import Register from './NewAuthPage/Register';
import Profile from './NewAuthPage/Profile';
import Dashboard from './Dashboard';
import GoogleDork from './Dorking/Google/GoogleDork';
import GithubDork from './Dorking/Github/GithubDork';
import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import ShodanDork from './Dorking/Shodan/ShodanDork';
import AiGenerator from './AIReportGenerator/AiGenerator';
import Form from '../components/Form';
import AboutUs from '../components/About-us';
import { ToastContainer, toast } from 'react-toastify';
import LoaderScreen from './LoaderScreen';

const Layout = () => {

  const {isAuthenticated} = useSelector(state => state.authReducer)
  const userDetails = useSelector(state => state.userDetailsReducer);
  const loaderDetails = useSelector(state => state.loaderStateReducer)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type:'LOAD_USER_STATE_FROM_LOCAL'})
  }, [dispatch])
  
  const toaster = useSelector(state => state.ToastReducer);
  console.log('In Layout toaster ', toaster)

  useEffect(() => {
    if(toaster.message){
      console.log('hERE IN USEEFF')
      toaster.error ? toast.error(toaster.message, {position:toast.POSITION.BOTTOM_CENTER}):
      toast.success(toaster.message, {position:toast.POSITION.BOTTOM_CENTER});
      dispatch({type:'TOASTER_OFF'});
    }
  }, [toaster])
 
  useEffect(()=>{
    if(loaderDetails.showLoader)
      return <LoaderScreen />
  },[loaderDetails.showLoader])
  


  const PrivateRoutes = () => {
    console.log('user ' , isAuthenticated)
    return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
  }
  return (
   <>
       <Navbar userDetails={userDetails}/>
    <div className="App">
      <div className="max-w-[100%] md:max-w-[100%] mx-auto">
        <Routes>
          <Route element={<Login isAuthenticated={isAuthenticated}/>} path="/login"/>
          <Route element={<Register isAuthenticated={isAuthenticated}/>} path="/register"/>
          <Route element={<Form />} path='/request-a-feature'/>
          <Route element={<AboutUs />} path='/about-us'/>
          <Route element={<PrivateRoutes/>} >
          <Route element={<Dashboard />} path="/"/>
          <Route element={<Profile userDetails={userDetails}/>} path="/profile" />
          <Route element={<Dashboard />} path='/dashboard' />
          <Route element={<GoogleDork />} path='/dorks/google'/>
          <Route element={<GithubDork />} path='/dorks/github'/>
          <Route element={<ShodanDork />} path='/dorks/shodan'/>
          <Route element={<AiGenerator />} path='/ai-report'/>
            </Route>
          
        </Routes>
      </div>
      <ToastContainer />
    </div>
    {/* <div className='App'>
    <Layout/>
    </div> */}</>
  )
}

export default Layout