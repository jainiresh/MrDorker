import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { TbCircleLetterS, TbReportSearch } from "react-icons/tb";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { RiAiGenerate } from "react-icons/ri";

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

function DashboardLeftPane({name}) {
  const iconStyles = { display: 'flex', alignContent: 'center', justifyContent: 'center', alignItems: 'center', gap: '1rem' };

  return (
    <div className="bg-gray-900 w-[100%] h-[100%] p-6 ">
      <h1 className="text-white text-3xl font-bold mb-8">Tools</h1>

      <div className="space-y-6">
        {toolsData.map((tool) => (
          <Link 
            key={tool.name} 
            to={tool.path} 
            className={tool.name == name ? "block p-4 rounded-lg shadow-xl text-white text-xl bg-blue-600 transition-colors duration-300 no-underline" : "block bg-gray-800 p-4 rounded-lg shadow-xl text-white text-xl hover:bg-blue-600 transition-colors duration-300 no-underline"}
          >
            <div style={iconStyles}>
              {tool.icon} <span>{tool.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default DashboardLeftPane;