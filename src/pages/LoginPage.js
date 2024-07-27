import React, { useEffect, useState } from 'react'
import Form from '../components/Form'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { jsonFormat } from '../utils/jsonUtils';

const LoginPage = ({formName}) => {
  const [loginData, setLoginData] = useState({ username: '', password: '', email: '' })

  const isLoggedinData = useSelector(state => state);
  const navigate = useNavigate();

  useEffect(() => {
    // console.log("Use effect : " + jsonFormat(isLoggedinData))
    if (isLoggedinData.error) {
      // console.log("Not logged in !")
    }
    else {
      // console.log("Logged in")
      navigate('/dorker')

    }
  }, [isLoggedinData])
  return (
    <div><Form
      formName={formName}
      tagData='~ Upskill your bug bounty game !'
      loginData={loginData}
      setLoginData={setLoginData} /></div>
  )
}

export default LoginPage