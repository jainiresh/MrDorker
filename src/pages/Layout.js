import React, { useEffect } from 'react'
import {BrowserRouter as Router, Route, Routes, BrowserRouter, Outlet, Navigate, useNavigate, useLocation} from 'react-router-dom'


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
import Pricing from './Payment/Pricing';
import DevCycleProvider from '@devcycle/openfeature-web-provider';
import { OpenFeature, useBooleanFlagValue } from '@openfeature/react-sdk';

const user = { user_id: 'user_id' }; 
const devcycleProvider = new DevCycleProvider(process.env.REACT_APP_DEVCYCLE_SDK_CLIENT_KEY, {});
async function setupOpenFeature() {
  await OpenFeature.setContext(user);
  await OpenFeature.setProviderAndWait(devcycleProvider);
}
setupOpenFeature();

const Layout = () => {

  const {isAuthenticated} = useSelector(state => state.authReducer)
  const {subscriptionPlan} = useSelector(state => state.SubscriptionReducer);
  const userDetails = useSelector(state => state.userDetailsReducer);
  const loaderDetails = useSelector(state => state.loaderStateReducer)
  const isSubscriptionModelOn = useBooleanFlagValue('subscription-model', false);

  console.log('Dev feature ', isSubscriptionModelOn)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type:'LOAD_USER_STATE_FROM_LOCAL'})
  }, [dispatch])
  
  const toaster = useSelector(state => state.ToastReducer);
  console.log('In Layout toaster ', toaster)

  useEffect(() => {
    if(toaster.message){
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
    const location = useLocation();
    return isAuthenticated ? isSubscriptionModelOn ? (subscriptionPlan != "FREE" || (location.pathname == '/profile') ? <Outlet /> : <Pricing />) : <Outlet />: <Navigate to={'/login'} />
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

          //Private Routes
          <Route element={<PrivateRoutes/>} >

          <Route element={<Profile userDetails={userDetails}/>} path="/profile" />
            <Route element={<Pricing />} path="/complete-onboarding"/>
            <Route element={<Dashboard />} path="/"/>
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