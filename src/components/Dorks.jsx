import React, { useEffect, useState } from 'react';
import dorkJson from '../dorkFiles/dorks.json';
import axios from 'axios';

const Dorks = ({ domain }) => {
  const [dorks, setDorks] = useState([]);
  const [dorkHeader, setDorkHeader] = useState('Open Redirection'); // Default header
  const [headerAnimation, setHeaderAnimation] = useState(false); // State for header animation

  useEffect(() => {
    // Initial fetch of dorks
    fetchDorks('open-redirection', 'Open Redirection');
  }, []);

  const logToServer = (logData) => {
    axios.get(`${process.env.REACT_APP_MY_DOMAIN}/api/logs/fetchResultsFor/${logData}`)
      .then(response => {
        console.log('Log sent successfully:', logData);
      })
      .catch(error => {
        console.error('Failed to send log:', error);
      });
  };

  const fetchDorks = (dorkName, headerText) => {
    setDorks(dorkJson[dorkName]);
    setDorkHeader(headerText);
    setHeaderAnimation(true);
    logToServer(domain); 
  };

  const handleDorkClick = (dork) => {
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(dork)}`;
    window.open(searchUrl, '_blank');
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="text-center mb-4">
            <h1 className={`text-primary mb-4 ${headerAnimation ? 'animate__animated animate__bounceInLeft' : ''}`}>
              Dorking on {domain}
            </h1>
            <h4 className="text-white mb-2 animate__animated animate__fadeInUp">
              Nah, Feeling too lazy, just click on the dorks.
            </h4>
          </div>
          <div className="d-flex flex-column">
            <button onClick={() => fetchDorks('db-files', 'Database related Files')} className="btn btn-warning mb-2 animate__animated animate__fadeInLeft">Database related Files</button>
            <button onClick={() => fetchDorks('excel-files', 'Sensitive excel files')} className="btn btn-warning mb-2 animate__animated animate__fadeInLeft">Sensitive excel files</button>
            <button onClick={() => fetchDorks('open-redirection', 'Find Open redirections')} className="btn btn-warning mb-2 animate__animated animate__fadeInLeft">Find Open redirections</button>
            <button onClick={() => fetchDorks('s3-files', 'Find S3 bucket related files')} className="btn btn-warning mb-2 animate__animated animate__fadeInLeft">Find S3 bucket related files</button>
            <button onClick={() => fetchDorks('xss-dorks', 'Search for that XSS')} className="btn btn-warning mb-2 animate__animated animate__fadeInLeft">Search for that XSS</button>
            <button onClick={() => fetchDorks('sql-dorks', 'Injection alert, find SQLI')} className="btn btn-warning mb-2 animate__animated animate__fadeInLeft">Injection alert, find SQLI</button>
            <button onClick={() => fetchDorks('login-dorks', 'Get Login forms')} className="btn btn-warning mb-2 animate__animated animate__fadeInLeft">Get Login forms</button>
            <button onClick={() => fetchDorks('git-dorks', 'Source code disclosure check')} className="btn btn-warning mb-2 animate__animated animate__fadeInLeft">Source code disclosure check</button>
            <button onClick={() => fetchDorks('backup-files', 'Back up files')} className="btn btn-warning mb-2 animate__animated animate__fadeInLeft">Back up files</button>
            {/* Add more buttons as needed */}
          </div>
        </div>
        <div className="col-md-8">
          <div className="text-left text-white mb-2 animate__animated animate__fadeInUp">
            <h4>Dorks for finding: {dorkHeader.toUpperCase()}</h4>
          </div>
          <div className="list-group" style={{ maxHeight: '800px', overflowY: 'auto' }}>
            {dorks.map((dork, index) => (
              <a
                key={index}
                href="#"
                className="list-group-item list-group-item-action bg-dark text-white border-primary animate__animated animate__fadeIn"
                onClick={() => handleDorkClick(`site:${domain} AND ${dork}`)}
              >
                {`site:${domain} AND ${dork}`}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dorks;
