import React, { useState } from 'react';
import Dorks from './Dorks';
import {ReactComponent as Icon} from '../icons/linkedin-svgrepo-com.svg'
import {ReactComponent as InfoIcon} from '../icons/pacman-game-gaming-svgrepo-com.svg'

const HomePage = () => {
  const [domain, setDomain] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    setSubmitted(true); // Flag to indicate form submission
  };

  const handleDomainChange = (event) => {
    setDomain(event.target.value);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">i love you</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" style={{display: 'flex', justifyContent: 'space-between'}} id="navbarSupportedContent">
            <div className='ml-auto' id='inital'>
            <ul className="navbar-nav "> {/* Use mr-auto to push items to the right */}
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
            </ul>
            </div>
            <div className='mr-auto'  id='end'>
            <ul className="navbar-nav ">
              {/* LinkedIn Icon */}
              <li className="nav-item">
                <a className="nav-link" href="https://www.linkedin.com/in/jainireshj" target='_blank'>
                  <Icon style={{ width: '24px', height: '24px', marginRight: '10px' }} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.topmate.io/jai_niresh_j" target='_blank'>
                  <InfoIcon style={{ width: '24px', height: '24px', marginRight: '10px', marginTop: '5px' }} />
                </a>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </nav>

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

export default HomePage;
