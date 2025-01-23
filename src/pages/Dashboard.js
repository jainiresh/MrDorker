import React from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { TbCircleLetterS, TbReport, TbReportSearch } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { RiAiGenerate } from "react-icons/ri";
import { IoBookSharp } from "react-icons/io5";
import { MdLogout, MdSettings } from 'react-icons/md';
import { logout } from '../firebase';
import { useDispatch } from 'react-redux';
import Sparkles from 'react-sparkle'
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
  {
    name: "Mastery Courses",
    icon: <IoBookSharp />,
    path: "/courses" 
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
    <div
      className="flex min-h-screen"
      style={{
        backgroundImage: "url('/dashboard_wallpaper_1.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
        }}
      >
        {/* Dynamic heading with responsive text size */}
        <h1
          className="text-white text-center"
          style={{
            fontSize: "clamp(2rem, 4vw, 4rem)", // Scales with zoom levels and screen sizes
            lineHeight: "1.2",
            marginBottom: "1rem",
            fontWeight: "bold",
            marginTop:'10vh'
          }}
        >
          Explore our tools
        </h1>
        <div style={{ width: "50vw", height: "50vh" }}>
          <div className="w-[100%] h-[100%] p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {toolsData.map((tool) => (
              <Link
                key={tool.name}
                to={tool.path}
                className={`block rounded-lg shadow-xl text-xl opacity-[0.8] transition-colors duration-300 no-underline relative overflow-hidden ${
                  tool.name === "Mastery Courses"
                    ? "bg-yellow-500 hover:bg-yellow-600 sparkle-container"
                    : "bg-gray-800 hover:bg-[#00b4bb]"
                }`}
                style={{ display: "flex", justifyContent: "center" }}
              >
                {/* Dynamic text inside tool cards */}
                <div
                  style={{
                    ...iconStyles,
                    fontSize: "clamp(1rem, 1.5vw, 1.5rem)", // Scales tool name size dynamically
                  }}
                >
                  {tool.icon}
                  <span>{tool.name}</span>
                </div>
                {tool.name === "Mastery Courses" && (
                  <div
                    id="sparkle"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Sparkles
                      color="white"
                      count={10}
                      minSize={12}
                      maxSize={32}
                      overflowPx={80}
                      fadeOutSpeed={5}
                      flicker={false}
                    />
                  </div>
                )}
              </Link>
            ))}
          </div>
          {/* Dynamic "More tools coming soon!" text */}
          <div
            className="text-white text-center"
            style={{
              fontWeight: "bold",
              marginTop: "1.5rem",
              fontSize: "clamp(1rem, 2vw, 1.5rem)", // Scales text size dynamically
            }}
          >
            More tools coming soon!
          </div>
          <div
            style={{ display: "flex", width: "100%" }}
            className="w-[100%] p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {appData.map((tool) =>
              tool.path ? (
                <Link
                  key={tool.name}
                  to={tool.path}
                  className="bg-gray-800 block rounded-lg shadow-xl text-white text-xl hover:bg-blue-600 opacity-[0.8] hover:opacity-[1] transition-colors duration-300 no-underline"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "1rem",
                  }}
                >
                  {/* Dynamic text inside app cards */}
                  <div
                    style={{
                      ...iconStyles,
                      fontSize: "clamp(1rem, 1.5vw, 1.5rem)", // Scales dynamically
                    }}
                  >
                    {tool.icon}
                    <span>{tool.name}</span>
                  </div>
                </Link>
              ) : (
                <button
                  key={tool.name}
                  className="bg-gray-800 block rounded-lg shadow-xl text-white text-xl hover:bg-blue-600 opacity-[0.8] hover:opacity-[1] transition-colors duration-300 no-underline"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "1rem",
                  }}
                  onClick={() => handleLogout()}
                >
                  {/* Dynamic text inside logout button */}
                  <div
                    style={{
                      ...iconStyles,
                      fontSize: "clamp(1rem, 1.5vw, 1.5rem)", // Scales dynamically
                    }}
                  >
                    {tool.icon}
                    <span>{tool.name}</span>
                  </div>
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  </>
  
  );
  
};

export default Dashboard;
