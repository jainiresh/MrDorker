import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const userDetails = useSelector(state => state.userDetailsReducer);

  return (
    <div className="flex flex-col items-center justify-center h-[94vh] bg-gradient-to-br from-gray-900 to-black text-white"> 
      <h1 className="text-4xl font-bold mb-10 text-center text-white">Account Details</h1>
      <div className=" bg-gray-800 p-8 rounded-xl shadow-2xl"> 
        <div className="flex flex-col space-y-6 w-[100%]">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-300">Email:</span>
            <span className="text-blue-400 text-lg">{userDetails.email}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-300">UID:</span>
            <span className="text-blue-400 text-lg" style={{paddingLeft:'1rem'}}>dorker-{userDetails.userId}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-300">Full Name:</span>
            <span className="text-blue-400 text-lg">{userDetails.displayName}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-300">Plan Type:</span>
            <span className="text-blue-400 text-lg">Free</span> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;