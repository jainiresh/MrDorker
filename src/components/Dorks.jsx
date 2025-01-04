import React, { useEffect, useState } from 'react';
import dorkJson from '../dorkFiles/dorks.json';

const Dorks = ({ domain }) => {
  const [dorks, setDorks] = useState([]);
  const [dorkHeader, setDorkHeader] = useState('Open Redirection'); // Default header
  const [headerAnimation, setHeaderAnimation] = useState(false); // State for header animation
  const [prefix, setPrefix] = useState('site');

  useEffect(() => {
    fetchDorks('open-redirection', 'Open Redirection');
  }, []);

  const logToServer = (logData) => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/loggingService/log/fetchResults?domain=${logData}`)
      .then(response => {
        // console.log('Log sent successfully:', logData);
      })
      .catch(error => {
        // console.error('Failed to send log:', error);
      });
  };

  const fetchDorks = (dorkName, headerText) => {
    setDorks(dorkJson[dorkName]);
    setDorkHeader(headerText);
    if(dorkName == 'company-files')
      setPrefix('inurl');
    else
      setPrefix('site');
    setHeaderAnimation(true);
    logToServer(domain); 
  };

  const handleDorkClick = (urlToOpen) => {
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(urlToOpen)}`;
    window.open(searchUrl, '_blank');
  };

  function openAllDorksNow(){
    dorks.forEach(dork => {
      handleDorkClick(`${prefix}:${domain} AND ${dork}`);
    })
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 col-sm-6">
          <div className="text-center mb-4">
            <h1 className={`text-primary mb-4 ${headerAnimation ? 'animate__animated animate__bounceInLeft' : ''}`}>
              Dorking on {domain}
            </h1>
            <h4 className="text-white mb-2 animate__animated animate__fadeInUp">
              Nah, Feeling too lazy, just click on the dorks.
            </h4>
          </div>
          <div className="d-flex flex-column" style={{height:'1 rem'}} id='buttonsColumn'>
            <button onClick={() => fetchDorks('db-files', 'Database related Files')} className="btn btn-warning mb-2 animate__animated animate__fadeInLeft">Database related Files</button>
            <button onClick={() => fetchDorks('excel-files', 'Sensitive excel files')} className="btn btn-warning mb-2 animate__animated animate__fadeInLeft">Sensitive excel files</button>
            <button onClick={() => fetchDorks('open-redirection', 'Find Open redirections')} className="btn btn-warning mb-2 animate__animated animate__fadeInLeft">Find Open redirections</button>
            <button onClick={() => fetchDorks('s3-files', 'Find S3 bucket related files')} className="btn btn-warning mb-2 animate__animated animate__fadeInLeft">Find S3 bucket related files</button>
            <button onClick={() => fetchDorks('xss-dorks', 'Search for that XSS')} className="btn btn-warning mb-2 animate__animated animate__fadeInLeft">Search for that XSS</button>
            <button onClick={() => fetchDorks('sql-dorks', 'Injection alert, find SQLI')} className="btn btn-warning mb-2 animate__animated animate__fadeInLeft">Injection alert, find SQLI</button>
            <button onClick={() => fetchDorks('login-dorks', 'Get Login forms')} className="btn btn-warning mb-2 animate__animated animate__fadeInLeft">Get Login forms</button>
            <button onClick={() => fetchDorks('git-dorks', 'Source code disclosure check')} className="btn btn-warning mb-2 animate__animated animate__fadeInLeft">Source code disclosure check</button>
            <button onClick={() => fetchDorks('backup-files', 'Back up files')} className="btn btn-warning mb-2 animate__animated animate__fadeInLeft">Back up files</button>
            <button onClick={() => fetchDorks('log-files', 'Log Files')} className="btn btn-warning mb-2 animate__animated animate__fadeInLeft">Look Up for logs</button>
            <button onClick={() => fetchDorks('grafana-files', 'Grafana Panel information')} className="btn btn-warning mb-2 animate__animated animate__fadeInLeft">Does your domain has grafana panels exposed?</button>
            <button onClick={() => fetchDorks('stat-files', 'Stat files')} className="btn btn-warning mb-2 animate__animated animate__fadeInLeft">Surf up stats</button>
            <button onClick={() => fetchDorks('server-files', 'Server information')} className="btn btn-warning mb-2 animate__animated animate__fadeInLeft">Server related information</button>
            <button onClick={() => fetchDorks('config-files', 'Config files')} className="btn btn-warning mb-2 animate__animated animate__fadeInLeft">Scrape exposed config files</button>
            <button onClick={() => fetchDorks('company-files', 'Company related info')} className="btn btn-warning mb-2 animate__animated animate__fadeInLeft">Company related information</button>

            {/* Add more buttons as needed */}
          </div>
        </div>
        <div className="col-sm-6 col-md-8">
          <div className="text-left text-white mb-2 animate__animated animate__fadeInUp" style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <h4>Dorks for finding: {dorkHeader.toUpperCase()}</h4>
            <button className='btn btn-primary' onClick={() => openAllDorksNow()}>Open All Dorks</button>
          </div>
          <div className="list-group" style={{ maxHeight: '800px', overflowY: 'auto' }}>
            {dorks.map((dork, index) => (
              <a
                key={index}
                href="#"
                className="list-group-item list-group-item-action bg-dark text-white border-primary animate__animated animate__fadeIn"
                onClick={() => handleDorkClick(`${prefix}:${domain} AND ${dork}`)}
              >
                {`${prefix}:${domain} AND ${dork}`}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dorks;
