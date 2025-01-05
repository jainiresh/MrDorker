import React from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { TbCircleLetterS, TbReportSearch } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { RiAiGenerate } from "react-icons/ri";

// import DashboardLeftPane from '../components/LeftPane/DashboardLeftPane/DashboardLeftPane';

const iconStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  fontSize:'2rem'
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
  // {
  //   name: "Payloads",
  //   icon: <HiWrenchScrewdriver />,
  //   path: "/payloads"
  // },
  // {
  //   name: "Reports Tracker",
  //   icon: <TbReportSearch />,
  //   path: "/reports" 
  // },
  {
    name: "AI Report Generator",
    icon: <RiAiGenerate />,
    path: "/ai-report" 
  }
];

const Dashboard = () => {
  return (
    <div className="flex " style={{display:'flex', flexDirection:'row', height:'94vh'}}>
      <div style={{width:'100vw'}}>
      <div className="bg-gray-900 w-[100%] h-[100%] p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
    {toolsData.map((tool) => (
      <Link
        key={tool.name}
        to={tool.path}
        className="block rounded-lg shadow-xl text-white text-xl hover:bg-blue-600 transition-colors duration-300 no-underline"
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
      </div>
    </div>
  );
};

export default Dashboard;
