import React, { useEffect } from 'react';
import {GoogleLogin} from '@react-oauth/google'
import { LOGIN_URL } from '../../constants/constants';

const GoogleSignInButton = () => {
  console.log(LOGIN_URL)
  const googleLogin = () => {
    console.log(LOGIN_URL)
    
    window.location.href = LOGIN_URL
  }

  return (
    <button onClick={() => googleLogin()}>Sign in with Google 🚀 </button>
  );
};

export default GoogleSignInButton;
