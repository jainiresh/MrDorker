import React, { useEffect, useState } from 'react';
import Dorks from './Dorks';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Dorker = () => {
  const [domain, setDomain] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const isLoggedinData = useSelector(state => state);
  const navigate = useNavigate();

  useEffect(()=>{
    let searchParams = new URL(window.location.href).search;
    searchParams =  new URLSearchParams(searchParams);
    // if(!searchParams.has('email') || !searchParams.has('id'))
    //   navigate('/login')
  },
[])

  const handleSubmit = (event) => {
    event.preventDefault(); 
    setSubmitted(true); 
  };

  const handleDomainChange = (event) => {
    setDomain(event.target.value);
  };

  return (
    <div>
      {/* Main content */}
      <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-dark">
        {!submitted ? (
          <div className="col-md-4">
            <div className="card border-primary rounded-lg">
              <div className="card-body">
                <h2 className="text-center text-primary mb-4">Mr.Dorker</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="domainInput" className="sr-only">
                      The only dorker you need.
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg rounded-pill mt-1"
                      id="domainInput"
                      placeholder="Enter your program's main scope domain (redacted.com)"
                      autoComplete='off'
                      value={domain}
                      onChange={handleDomainChange}
                      required
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-primary btn-block rounded-pill">
                    Let's Go
                  </button>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <Dorks domain={domain} />
        )}
      </div>
    </div>
  );
};

export default Dorker;
