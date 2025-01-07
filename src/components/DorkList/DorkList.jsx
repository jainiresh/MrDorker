import React from 'react';
import { toast } from 'react-toastify';
import './DorkList.css'

function DorkList({ dorks, handleDorkClick, website, keyHolder, errorMessage }) {
  return (
    <div className="dork-list-container bg-gray-800 p-4 rounded-lg mb-4 h-[82vh] overflow-y-scroll">
      <div className="dork-list-header flex">
        <h3 className="text-white text-xl font-bold">Click Dorks to Fire Them at ease</h3>
      </div>

      <ul className="dork-list pl-0">
        {dorks.map((dork, index) => (
          <li
            key={index}
            className="dork-list-item text-lg hover:text-xl cursor-pointer transition hover:bg-gray-600 mb-[0.5rem]"
            onClick={() => {!website || website.length == 0 ? toast.error(errorMessage) : handleDorkClick(`${keyHolder}:${website} ${dork}`, website)}}
          >
            {website ? (
              <span className="dork-website" style={{color:'gold', fontWeight:'bold'}}>{`${keyHolder}:${website}`}</span>
            ) : null}
            <span className="text-white dork-text">{decodeURIComponent(dork)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DorkList;