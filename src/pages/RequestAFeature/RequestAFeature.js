import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Make sure to import the styles

const RequestAFeature = ({}) => {
  const [email, setEmail] = useState('');
  const [suggestion, setSuggestion] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      email: email,
      data: suggestion,
    };

    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/contact/requestAFeature`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit feature request');
      }

      // Display success toast
      toast.success('Feature Request Submitted Successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // Optionally reset the form after successful submission
      setEmail('');
      setSuggestion('');
    } catch (error) {
      // Display error toast
      toast.error('Error submitting feature request. Please try again.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.error('Error:', error);
    }
  };

  return (
    <div className="bg-purple-900 text-white h-screen flex flex-col items-center justify-center py-12 px-6">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-indigo-400 mb-6">Request A Bug Bounty Tool To Be Added Here</h1>
      <p className="text-lg text-gray-300 mb-6 text-center">
        ~ I might feature you on the Honors page, in case I end up adding your idea.
      </p>

      {/* Form Section */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-purple-700 p-8 rounded-xl shadow-lg"
      >
        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg mb-2 text-gray-300">
            Email Address (For contact purpose):
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="user@email.com"
            className="w-full p-3 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Suggestion Input */}
        <div className="mb-4">
          <label htmlFor="suggestion" className="block text-lg mb-2 text-gray-300">
            Request a feature to be added:
          </label>
          <textarea
            id="suggestion"
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            required
            placeholder="A community page for hackers to share thoughts could be great!"
            rows="4"
            className="w-full p-3 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3 px-6 rounded-md transition duration-300"
        >
          Submit Feature Request
        </button>
      </form>

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
};

export default RequestAFeature;
