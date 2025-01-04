import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { LOGIN_URL } from '../../constants/constants';
import { useNavigate } from 'react-router-dom';

const Button = styled.button`
  background-color: #4285f4; /* Google Blue */
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #357ae8; /* Darker blue on hover */
  }

  &:focus {
    outline: 2px solid #fbbc05; /* Google Yellow */
    outline-offset: 2px;
  }

  .icon {
    margin-right: 8px;
  }
`;

const GoogleSignInButton = () => {
  const navigate = useNavigate();
  const googleLogin = () => {
    // window.location.href = LOGIN_URL;
    navigate('/dorker')
  }

  return (
    <Button onClick={googleLogin}>
      <FontAwesomeIcon icon={faGoogle} className="icon" />
      Sign in with Google
    </Button>
  );
};

export default GoogleSignInButton;
