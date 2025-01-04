import React from 'react'

function DorkList({dorks, handleDorkClick, website, keyHolder}) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg mb-4 h-[82vh] overflow-y-scroll"> 
          
         
          <ul className="space-y-2 pl-0">
            {dorks.map((dork, index) => (
              <li 
                key={index} 
                className="text-white text-lg hover:text-xl cursor-pointer transition hover:bg-gray-600"
                onClick={() => handleDorkClick(`${keyHolder}:${website} ${dork}`, website)}
              >
                {website ? `${keyHolder}:${website} ${decodeURIComponent(dork)}` : dork} 
              </li>
            ))}
          </ul>
        </div>
  )
}

export default DorkList