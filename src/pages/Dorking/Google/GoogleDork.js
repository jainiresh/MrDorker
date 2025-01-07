import React, { useState, useEffect } from 'react';
import LeftPane from '../../../components/LeftPane/LeftPane';
import DorkList from '../../../components/DorkList/DorkList';
import { GOOGLE_DORKS_JSON } from '../../../constants/constants';
import DashboardLeftPane from '../../../components/LeftPane/DashboardLeftPane/DashboardLeftPane';

const GoogleDork = () => {
  const [selectedTarget, setSelectedTarget] = useState('xss-dorks');
  const [dorks, setDorks] = useState([]);
  const [website, setWebsite] = useState('');

  useEffect(() => {
    const fetchDorks = async () => {
      try {
        const response = await fetch('/dorks.json');
        const data = await response.json();
        setDorks(data[selectedTarget] || []);
      } catch (error) {
        console.error('Error fetching dorks:', error);
      }
    };

    fetchDorks();
  }, [selectedTarget]);

  const handleWebsiteChange = (event) => {
    setWebsite(event.target.value);
  };

  const handleDorkClick = (dork) => {
    window.open('https://www.google.com/search?q=' + dork, '_blank')
  }
  return (
    <div className="flex " style={{ display: 'flex', flexDirection: 'row', height:'94vh' }}>
      {/* Left Pane */}
      <div style={{ display: 'flex', width: '30vw' }}>
        <div style={{flex:1}}>
          <DashboardLeftPane name={"Google Dork"}/>
        </div>
        <div style={{borderLeft:'1px solid #3D3D3D', flex:1, overflowY:'scroll'}} className='bg-gray-900'>

          <LeftPane selectedTarget={selectedTarget} dorksJson={GOOGLE_DORKS_JSON} setSelectedTarget={setSelectedTarget} />
        </div>
      </div>
      {/* Right Main Content Area */}
      <div id='rightContainer' className="w-[50vw] bg-gray-700 flex-1 p-6 overflow-y-hidden h-94vh flex-grow">
        <h2 className="text-white text-2xl font-semibold mb-2">
          Enter your target (sub)domain here :
        </h2>
        <input
          type="text"
          placeholder="Enter Your target domain"
          value={website}
          onChange={handleWebsiteChange}
          className="bg-gray-700 text-white px-4 py-2 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />
        <DorkList keyHolder={'site'} dorks={dorks} handleDorkClick={handleDorkClick} website={website} errorMessage={"Enter your target domain"}/>
      </div>
    </div>
  );
};

export default GoogleDork;