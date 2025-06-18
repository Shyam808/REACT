import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-yellow-100 flex items-center justify-center px-6 py-12">
      <div className="max-w-5xl w-full flex flex-col lg:flex-row items-center gap-12">
        {/* LEFT: EMPTY instead of image */}
        <div className="hidden lg:block w-1/2 h-80 bg-gray-200 rounded-2xl shadow-inner flex items-center justify-center text-gray-400 text-xl font-semibold">
        </div>

        <div className="text-left space-y-6 w-full lg:w-1/2">
          <h1 className="text-5xl font-extrabold leading-tight">
            <span className="text-brown-700">Welcome</span><br />
            <span className="text-blue-600">To Ultimate</span>
          </h1>
          <h2 className="text-2xl font-bold text-pink-700">
            Food Delivery App — Parul-Zomato
          </h2>
          <p className="text-md font-medium text-gray-700 italic">
            “Good Food with Good Mindset” 🧾
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-md shadow-md transition duration-300">
            Explore Now 🚀
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
