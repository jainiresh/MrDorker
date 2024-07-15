import React, { useEffect, useState } from 'react';
import dorkJson from '../dorkFiles/dorks.json';

const Dorks = ({ domain }) => {
  const [dorks, setDorks] = useState([]);

  useEffect(() => {
    setDorks(dorkJson['open-redirection']); // Replace with your JSON data
  }, []);

  const handleDorkClick = (dork) => {
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(dork)}`;
    window.open(searchUrl, '_blank');
  };

  const dorkPopulator = (dorkName) => {
    setDorks(dorkJson[`${dorkName}`]);
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary mb-4">Google Dorks for {domain}</h1>
      <div className="list-group" style={{ maxHeight: '800px', overflowY: 'auto' }}>
        {dorks.map((dork, index) => (
          <a
            key={index}
            href="#"
            className="list-group-item list-group-item-action bg-dark text-white border-primary"
            onClick={() => handleDorkClick(`site:${domain} AND ${dork}`)}
          >
            {`site:${domain} AND ${dork}`}
          </a>
        ))}
      </div>
      <button onClick={() => dorkPopulator(`db-files`)}>Database related Files</button>
      <button onClick={() => dorkPopulator(`excel-files`)}>Sensitive excel files</button>
      <button onClick={() => dorkPopulator(`open-redirection`)}>Find Open redirections</button>
      <button onClick={() => dorkPopulator(`s3-files`)}>Find S3 bucket related files</button>
      
    </div>
  );
};

export default Dorks;
