import React from 'react';

import DashboardLeftPane from '../components/LeftPane/DashboardLeftPane/DashboardLeftPane';


const Dashboard = () => {
  return (
    <div className="flex " style={{display:'flex', flexDirection:'row', height:'94vh'}}>
      <div style={{width:'100vw'}}>
      <DashboardLeftPane />
      </div>

      {/* Right Main Content Area */}
      <div className="bg-gray-700 flex-1">
        {/* Content will go here */}
      </div>
    </div>
  );
};

export default Dashboard;
