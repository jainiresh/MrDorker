import React from "react";
import PaypalCheckout from "../../components/Payment/PaypalCheckout";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-4xl w-full p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-semibold text-center mb-8 text-gray-800">
          Mr.Dorker
        </h1>
        <p className="text-xl text-gray-700 text-center mb-8">
          Effortlessly click and dork through all the vulnerabilities in your target. Generate reports by just a few clicks, with our High tech AI Powered Engines.
        </p>

        {/* Pricing Plans */}
        <div >
          <div className="bg-indigo-600 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Basic Plan</h2>
            <p className="text-lg mb-4">There is no free meal, but there is one for 2 rupees !</p>
            <div className="text-4xl font-bold mb-4">$1.99 / month</div>
            <ul className="mb-6">
            <li className="mb-2">The least subscription amount ever for a bug hunting tool</li>
              <li className="mb-2">✔ Access to all features</li>
              <li className="mb-2">✔ 24/7 email support</li>
            </ul>
            <PaypalCheckout />
          </div>

          
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-xl text-gray-700 mb-4">
            Start your journey with us today and unlock all the tools you need to succeed!
          </p>
          <button className="bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-lg text-lg hover:bg-indigo-700 transition-all duration-300">
            Contact Us for Queries / Bug Reporting
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
