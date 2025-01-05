import React, { useState, useEffect } from 'react';
import LeftPane from '../../../components/LeftPane/LeftPane';
import DorkList from '../../../components/DorkList/DorkList';
import { ToastContainer, toast } from 'react-toastify';
import { GITHUB_DORKS_JSON } from '../../../constants/constants';
import DashboardLeftPane from '../../../components/LeftPane/DashboardLeftPane/DashboardLeftPane';

const GithubDork = () => {
  const [selectedTarget, setSelectedTarget] = useState('github');
  const [dorks, setDorks] = useState([]);
  const [website, setWebsite] = useState('');

  useEffect(() => {
    const fetchDorks = async () => {
      try {
        const response = await fetch('/gitDorks.json');
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

  const handleDorkClick = (dork, organization) => {
    window.open(`https://github.com/search?q=${dork}&type=code`,'_blank')
  }

  const githubChecker = async (organization) => {
    try {
      const response = await fetch(`https://github.com/${organization}`, {
        mode: 'no-cors'
      });
      
      // console.log('Response ', response)
      // Check for successful response (status code in the 200s)
      if (response.status == 200) {
        toast.success("The organization exists");
        console.log('Organization likely exists on GitHub!'); // Adjust message as needed
      } else {
        toast.error("The organization Does not exists");
        console.log(`Error: Status code ${response.status}`);
      }
    } catch (error) {
      console.error('Error fetching organization:', error);
    }
  };
  return (
    <div className="flex " style={{ display: 'flex', flexDirection: 'row', height:'94vh' }}>
      {/* Left Pane */}
      <div style={{ display:'flex', width: '30vw' }}>
        <div style={{flex:1}}>
          <DashboardLeftPane name={"Github Dork"}/>
        </div>
        <div style={{borderLeft:'1px solid #3D3D3D', flex:1}}>
        <LeftPane dorksJson={GITHUB_DORKS_JSON} setSelectedTarget={setSelectedTarget}/>
        </div>
      </div>
      

      {/* Right Main Content Area */}
      <div id='rightContainer' className="bg-gray-700 flex-1 p-6 overflow-y-hidden h-94vh flex-grow"> 
      <h2 className="text-white text-2xl font-semibold mb-2">
            Enter your organization name here and check, if a valid repo is present or not ? :
          </h2>
          
          <input
            type="text"
            placeholder="Enter Your organization name"
            value={website}
            onChange={handleWebsiteChange}
            className="bg-gray-700 text-white px-4 py-2 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          />
          <button onClick={() => githubChecker(website)}
  className="bg-yellow-600 hover:bg-gray-600 text-gray-900 font-bold py-2 px-4 mx-4 rounded-full"
>
  Check
</button>
        <DorkList keyHolder={'org'} dorks={dorks} handleDorkClick={handleDorkClick} website={website}/>
      </div>
      <ToastContainer />
    </div>
  );
};

export default GithubDork;