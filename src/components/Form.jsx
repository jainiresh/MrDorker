import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { store } from '../redux/store'
import { useDispatch, useSelector } from 'react-redux';
import constants from '../constants/constants'
import { Link, useNavigate } from 'react-router-dom';
import { jsonFormat } from '../utils/jsonUtils';
import Alert from './Alerts/Alert';


const Form = ({
  formName = 'Request A feature',
  tagData = "~ I might feature you on the Honors page, in case i end up adding your idea.",
  loginData, 
  setLoginData
}) => {

  const [data, setData] = useState({ email: '', content: '' })
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorData, setErrorData] = useState(false);
  const [alertMessage, setAlertMessage] = useState('Default msg from Usestate');

  const isRequestForm = formName == 'Request A feature'
  const isLoginForm = formName == 'login'
  const isRegistrationForm = !isLoginForm && !isRequestForm
  // console.log(" form dataa " + isRequestForm + " " + isLoginForm + " " + isRegistrationForm)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function setFormData() {
    setData({ email: '', content: '' });
  }

  const onChangeHandlerForLoginReg = (e) => {
    if (e.target.id == 'username')
      setLoginData((prevState) => ({
        ...prevState, username: e.target.value
      }))
    else if (e.target.id == 'password')
      setLoginData((prevState) => ({
        ...prevState, password: e.target.value
      }))
    else if (e.target.id = 'email')
      setLoginData((prevState) => ({
    ...prevState, email: e.target.value}))
  }

  const onChangeHandler = (e) => {
    if (e.target.id == 'emailInput')
      setData((prevState) => ({
        ...prevState, email: e.target.value
      }))
    else if (e.target.id == 'contentInput')
      setData((prevState) => ({
        ...prevState, content: e.target.value
      }))
  }

  const sendBackendDataRequest = async () => {
    const response = await axios.post(constants.BACKEND_URL + "/loggingService/requestForm", data);
    if (response.data.status == 1) {
      setFormSubmitted(true);
      setAlertMessage(`Thanks for your contribution !`);
      refreshStates();
    }
    else {
      setErrorData(true);
      setAlertMessage(`Your message did not go through !`);
      refreshStates();
    }

  }

  const refreshStates = () => {
    setTimeout(() => {
      setErrorData(false);
      setFormSubmitted(false);
    }, 3000)

  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Data to be sent : " + data.email + " " + data.content)
    await sendBackendDataRequest();
  }


  const handleLoginOrRegistration = (e) => {
    console.info("From Form Before login: " + jsonFormat(store.getState()));
    e.preventDefault();
    dispatch({ type: isRegistrationForm ? 'USER_REGISTER_REQUEST' : 'USER_LOGIN_REQUEST', payload: loginData })
  }


  return (
    <div className='container-md vh-100 d-flex align-items-center' style={{ backgroundColor: 'whitesmoke' }}>

      <div className='container-fluid'>
        {formSubmitted && <Alert success={true} message={alertMessage} />}
        {errorData && <div id='alert-box' className='offset-3 col-6 alert alert-danger'>Something went wrong!</div>}
        <form className='col-6 offset-3' onSubmit={isRequestForm ? handleSubmit : handleLoginOrRegistration}>
          <p className='text-primary text-capitalize display-5 mb-5 text-black'>{isRequestForm ? 'Request a Bug bounty tool to be added here' : formName}</p>
          <p style={{ fontStyle: 'italic' }}>{tagData}</p>
          {isRequestForm ?
            <><div className='mb-5 mt-5'>
              <label htmlFor="input1" className='form-label float-start'>Email address <span style={{ fontStyle: 'italic', fontSize: '0.8rem' }}>- for contact purpose, in case your feature is added</span></label>
              <input type="email" onChange={onChangeHandler} className='form-control' id='emailInput' placeholder='Enter your email address here' />
             </div>
              <div className='mb-5'>
                <label htmlFor="input2" className='form-label float-start'>Request a feature to be added.</label>
                <textarea type="text" onChange={onChangeHandler} className='form-control' id='contentInput' required placeholder='Give a brief on the feature that you think will do good in this applicaiton.' />
              </div>
            </> :
            <>
             <div className='mb-5'>
                <label htmlFor="input1" className='form-label float-start'>Username</label>
                <input type="text" onChange={onChangeHandlerForLoginReg} className='form-control' id='username' placeholder='Enter your username here' />
              </div>

              { isRegistrationForm && <div className='mb-5'>
                <label htmlFor="input1" className='form-label float-start'>Email</label>
                <input type="email" onChange={onChangeHandlerForLoginReg} className='form-control' id='email' placeholder='Enter your emailId here' />
              </div> }

              <div className='mb-5'>
                <label htmlFor="input2" className='form-label float-start'>Password</label>
                <input type="password" onChange={onChangeHandlerForLoginReg} className='form-control' id='password' required placeholder='Your password goes here' />
              </div>
            </>
          }
          <div className='mb-5 d-flex' style={{flexDirection:'row', justifyContent:'space-between'}}>
             <div>
            {isLoginForm && <span>Create an account <Link to={'/register'}>Here</Link> </span>}
            {isRegistrationForm && <span>Already register for Mr.Dorker ? Then login <Link to={'/login'}>Here</Link> </span>}
            </div>
            <button type='submit' className='btn btn-success float-end'>Send</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form