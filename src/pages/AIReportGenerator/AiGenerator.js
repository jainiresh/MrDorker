import React, { useState } from 'react';
import { AI_REPORT_HEADINGS, AI_REPORT_VULNS } from '../../constants/constants';
import { PiMagicWand } from "react-icons/pi";

const AiGenerator = () => {
  const [selectedHeadings, setSelectedHeadings] = useState([]);
  const [selectedVulnerability, setSelectedVulnerability] = useState(null); 

  const handleHeadingToggle = (headingValue) => {
    if (selectedHeadings.includes(headingValue)) {
      setSelectedHeadings(selectedHeadings.filter((h) => h !== headingValue));
    } else {
      setSelectedHeadings([...selectedHeadings, headingValue]);
    }
  };

  const handleVulnerabilitySelect = (heading) => {
    setSelectedVulnerability(heading.value); 
  };

  return (
    <div className="flex justify-center items-center  h-[94vh] bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white p-10 rounded-lg shadow-lg" style={{maxWidth:'75vw'}}>
        <div className='mb-[7rem]'>
        <h1 className="text-3xl font-bold ">Generate Your Reports Effortlessly.</h1>
        <h4 className='text-[1rem]'>- With the power of AI</h4>
        </div>

        <div className="mb-14">
          <h2 className="text-lg font-semibold">Choose Vulnerability type :</h2>
          <div className="flex flex-wrap gap-2"  style={{justifyContent:'center'}}>
            {AI_REPORT_VULNS.map((heading) => (
              <button
                key={heading.value}
                onClick={() => handleVulnerabilitySelect(heading)}
                className={`border border-gray-300 rounded-md px-3 py-1 text-sm  ${selectedVulnerability === heading.value ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
              >
                {heading.label}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-14">
          <h2 className="text-lg font-semibold">Choose Headings</h2>
          <div className="flex flex-wrap gap-2"  style={{justifyContent:'center'}}>
            {AI_REPORT_HEADINGS.map((heading) => (
              <button 
                key={heading.value} 
                onClick={() => handleHeadingToggle(heading.value)} 
                className={`border border-gray-300 rounded-md px-3 py-1 text-sm  ${selectedHeadings.includes(heading.value) ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
              >
                {heading.label}
              </button>
            ))}
          </div>
        </div>

        
        {selectedHeadings.length != 0 && <div className="mb-14">
          <h2 className="text-lg font-semibold">Selected Headings:</h2>
          <ul className="flex flex-wrap gap-2" style={{justifyContent:'center'}}>
            {selectedHeadings.map((heading) => (
              <li 
                key={heading} 
                className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md"
              >
                {heading}
              </li>
            ))}
          </ul>
        </div>}

        <div className="mb-4">
          <label htmlFor="input" className="block text-lg font-semibold font-medium text-gray-700">
           Describe your finding briefly:
          </label>
          <textarea
            id="input"
            rows="4"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          ></textarea>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="button"
        >
            <div style={{display:'flex', alignItems:'center', gap:'1rem'}}>
          Generate Report <div style={{scale:'1.3'}}><PiMagicWand /></div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AiGenerator;