import React from 'react'

function LeftPaneButtons({id, name, setSelectedTarget, selectedTarget}) {
  return (
     (id == selectedTarget) ? 
      <button className="block  p-4 rounded-lg shadow-xl text-white text-xl bg-blue-600 transition-colors duration-300 no-underline">
      {name}</button> :
    <button
            onClick={() => setSelectedTarget(id)}
            className="block bg-gray-800 p-4 rounded-lg shadow-xl text-white text-xl hover:bg-blue-600 transition-colors duration-300 no-underline"
          >
            {name}
          </button>
    
  )
}

export default LeftPaneButtons