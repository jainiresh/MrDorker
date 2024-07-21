import axios from 'axios';
import React, { useState } from 'react'
const constants = require('../constants/constants')

const Form = ({ formName = 'Request A feature' }) => {

  const [data, setData] = useState({ email: '', content: '' })
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorData, setErrorData] = useState(false);

  function setFormData() {
    setData({ email: '', content: '' });
  }

  const onChangeHandler = (e) => {
    if(e.target.id == 'emailInput')
      setData((prevState) => ({
    ...prevState, email:e.target.value}))
    else if(e.target.id == 'contentInput')
      setData((prevState) => ({
    ...prevState, content:e.target.value}))
  }

  const sendBackendDataRequest = async () => {
    const response = await axios.post(constants.BACKEND_URL+"/loggingService/requestForm", data);
    if(response.data.status == 1){
      setFormSubmitted(true);
      refreshStates();
    }
    else{
      setErrorData(true);
      refreshStates();
    }
    
  }

  const refreshStates = () => {
    setTimeout(() => {
      setErrorData(false);
      setFormSubmitted(false);
    },3000)
    
  }
  const handleSubmit = async (e) => {
    //fire api request with data
    e.preventDefault();
    console.log("Data to be sent : " + data.email + " " + data.content)
    await sendBackendDataRequest();
  }

  return (
    <div className='container-md vh-100 d-flex align-items-center' style={{ backgroundColor: 'whitesmoke' }}>
      
      <div className='container-fluid'>
      {formSubmitted && <div id='alert-box' className='offset-3 col-6 alert alert-success'>Your request is sent successfully !</div>}
      {errorData && <div id='alert-box' className='offset-3 col-6 alert alert-danger'>Something went wrong!</div>}
        <form className='col-6 offset-3' onSubmit={handleSubmit}>
          <p className='text-primary text-capitalize display-5 mb-5 text-black'>{formName}</p>
          <p style={{ fontStyle: 'italic' }}>~ I might feature you on the Honors page, in case i end up adding your idea.</p>
          <div className='mb-5 mt-5'>
            <label htmlFor="input1" className='form-label float-start'>Email address <span style={{ fontStyle: 'italic', fontSize: '0.8rem' }}> - for contact purpose, in case your feature is added</span></label>
            <input type="email" onChange={onChangeHandler} className='form-control' id='emailInput' placeholder='Enter your email address here' />
          </div>
          <div className='mb-5'>
            <label htmlFor="input2" className='form-label float-start'>Request a feature to be added.</label>
            <textarea type="text" onChange={onChangeHandler} className='form-control' id='contentInput' required placeholder='Give a brief on the feature that you think will do good in this applicaiton.' />
          </div>
          <div className='mb-5'>
            <button type='submit' className='btn btn-success float-end'>Send</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form