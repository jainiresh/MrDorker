import React, { useState } from 'react';
import Dorks from './Dorks';

const HomePage = () => {
  const [domain, setDomain] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
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
          <a className="navbar-brand" href="/">Mr.Dorker</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
            </ul>
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
                    <br />
                    <input
                      type="text"
                      className="form-control form-control-lg rounded-pill mt-1"
                      id="domainInput"
                      placeholder="Enter your program's main scope domain"
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
