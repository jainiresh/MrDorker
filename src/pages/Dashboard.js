import React from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { TbCircleLetterS, TbReport, TbReportSearch } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { RiAiGenerate } from "react-icons/ri";
import { HiWrenchScrewdriver } from 'react-icons/hi2';
import { MdLogout, MdSettings } from 'react-icons/md';
import { logout } from '../firebase';
import { useDispatch } from 'react-redux';

// import DashboardLeftPane from '../components/LeftPane/DashboardLeftPane/DashboardLeftPane';

const iconStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  fontSize:'2rem',
  color:'whitesmoke',
};
const toolsData = [
  {
    name: "Google Dork",
    icon: <FaGoogle />,
    path: "/dorks/google"
  },
  {
    name: "Github Dork",
    icon: <FaGithub />,
    path: "/dorks/github"
  },
  {
    name: "Shodan Dork",
    icon: <TbCircleLetterS />,
    path: "/dorks/shodan"
  },
  {
    name: "AI Report Generator",
    icon: <RiAiGenerate />,
    path: "/ai-report" 
  },
  ,
];
const appData = [
  {
    name: "Account",
    icon: <MdSettings />,
    path: "/profile"
  },
  {
    name: "Logout",
    icon: <MdLogout />,
  }
  ,
];

const Dashboard = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    logout();
    dispatch({type:'USER_LOGOUT_SAGA'})
  }
  
  return (
    <>
    <div className="flex bg-gradient-to-br from-gray-900 to-black" style={{height:'94vh' }}>
      <div style={{justifyContent:'center', alignItems:'center', display:'flex', width:'100%', height:'100%', flexDirection:'column'}}>
        <h1 className='text-white' style={{fontSize:'4rem'}}>Explore our tools</h1>
      <div style={{width:'50vw', height:'50vh'}}>
      <div className=" w-[100%] h-[100%] p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
    {toolsData.map((tool) => (
      <Link
        key={tool.name}
        to={tool.path}
        className=" bg-gray-800 block rounded-lg shadow-xl text-white text-xl hover:bg-blue-600 opacity-[0.8] hover:opacity-[1] transition-colors duration-300 no-underline"
        style={{display:'flex', justifyContent:'center'}}
        // style={{ backgroundColor: tool.name === tool.name ? 'blue-600' : 'gray-800' }}
      >
        <div style={iconStyles}>
          {tool.icon}
          <span>{tool.name}</span>
        </div>
      </Link> 
    ))}
  </div>
  <div style={{display:'flex', width:'100%'}} className="w-[100%] p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {appData.map((tool) => (
    tool.path ? (
      <Link
        key={tool.name}
        to={tool.path}
        className="bg-gray-800 block rounded-lg shadow-xl text-white text-xl hover:bg-blue-600 opacity-[0.8] hover:opacity-[1] transition-colors duration-300 no-underline"
        style={{display:'flex', justifyContent:'center', padding:'1rem'}}
      >
        <div style={iconStyles}>
          {tool.icon}
          <span>{tool.name}</span>
        </div>
      </Link>
    ) : (
      <button
        key={tool.name}
        className="bg-gray-800 block rounded-lg shadow-xl text-white text-xl hover:bg-blue-600 opacity-[0.8] hover:opacity-[1] transition-colors duration-300 no-underline"
        style={{display:'flex', justifyContent:'center', alignItems:'center', padding:'1rem'}}
        onClick={() => handleLogout()}
      >
        <div style={iconStyles}>
          {tool.icon}
          <span>{tool.name}</span>
        </div>
      </button>
    )
  ))}
</div>
  </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
