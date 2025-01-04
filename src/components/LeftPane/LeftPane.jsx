import React from 'react';
import LeftPaneButtons from './LeftPaneButtons/LeftPaneButtons'; // Import the button component

const LeftPane = ({ setSelectedTarget, dorksJson, selectedTarget }) => {
 

  return (
    <div className="bg-gray-900 w-[100%] h-[100%] p-6" style={{marginBottom:'2rem'}}>
      <h1 className="text-white text-3xl font-bold mb-8" >Targets</h1>

      <div className="space-y-6 mb-8" >
        {dorksJson.map((target) => (
          <LeftPaneButtons 
            key={target.id} 
            setSelectedTarget={setSelectedTarget} 
            selectedTarget={selectedTarget}
            name={target.name} 
            id={target.id} 
          />
        ))}
      </div>
    </div>
  );
};

export default LeftPane;