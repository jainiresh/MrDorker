import React from 'react';
import { FaGithub, FaMedium, FaEnvelope } from 'react-icons/fa'; // Importing icons from react-icons
import { ImPacman } from 'react-icons/im'; // Importing Pacman icon
import { aboutUsDescription } from '../constants/constants';

// Define the social links data in JSON format
const socialLinks = [
  {
    id: 1,
    url: 'https://topmate.io/jai_niresh_j',
    icon: <ImPacman />,
    label: 'TopMate',
  },
  {
    id: 2,
    url: 'https://github.com/jainiresh',
    icon: <FaGithub className="text-2xl" />,
    label: 'GitHub',
  },
  {
    id: 3,
    url: 'https://medium.com/@nireshpandian19',
    icon: <FaMedium className="text-2xl" />,
    label: 'Medium Profile',
  },
  {
    id: 4,
    url: 'mailto:nireshpandian191@gmail.com',
    icon: <FaEnvelope className="text-2xl" />,
    label: 'Contact Me',
  },
];

const AboutUs = () => {
  return (
    <div className="bg-black text-white h-[94vh] flex flex-col items-center py-12">
      {/* Container for the content */}
      <div className="w-full max-w-5xl px-6 lg:px-0">

        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-600">About Us</h1>
          <p className="text-lg text-gray-400 mt-2">Meet the team behind the project</p>
        </div>

        {/* Profile and Info Section */}
        <div className="flex flex-col md:flex-row lg:flex-col items-center justify-between mb-16 px-4 py-8 bg-gray-800 rounded-xl shadow-lg">
          {/* Profile Image and Name */}
          <div className="flex flex-col items-center flex-shrink-0 mb-6 md:mb-0">
            <img
              src="/profile.JPG"
              alt="Profile"
              className="w-32 h-32 rounded-full shadow-md border-4 border-indigo-600 mb-3"
            />
            <div className="ml-6">
              <h2 className="text-3xl font-semibold text-white">JAI NIRESH J</h2>
              <p className="text-lg text-gray-400 mt-2">Full Stack Developer / Ethical Hacker</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col lg:flex-row items-center md:items-end space-y-4 mt-6 md:mt-0">
            {socialLinks.map(({ id, url, icon, label }) => (
              <a
                key={id}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginRight: '2rem', textDecoration: 'none' }}
                className="flex items-center text-indigo-500 hover:text-indigo-300 text-xl space-x-2"
              >
                {icon}
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Vision Section */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
          <h3 className="text-3xl font-bold text-indigo-600 mb-4">Few Words</h3>
          <p className="text-lg text-gray-300">
            <span dangerouslySetInnerHTML={{__html:aboutUsDescription}} ></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
