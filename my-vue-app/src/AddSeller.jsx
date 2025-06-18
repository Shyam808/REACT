import React from 'react';

const AddSeller = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 p-6">
      <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-8 w-full max-w-xl shadow-lg">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          📦 Add New Seller
        </h2>
        <form className="space-y-4">
          {/* Seller Name */}
          <div>
            <label className="block text-white mb-1">Seller Name</label>
            <input
              type="text"
              placeholder="e.g. Rahul Traders"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-white mb-1">Email Address</label>
            <input
              type="email"
              placeholder="seller@email.com"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Shop Name */}
          <div>
            <label className="block text-white mb-1">Shop Name</label>
            <input
              type="text"
              placeholder="e.g. Rahul Kirana Store"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Phone and Address */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-white mb-1">Phone Number</label>
              <input
                type="text"
                placeholder="9876543210"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div className="flex-1">
              <label className="block text-white mb-1">Shop Address</label>
              <input
                type="text"
                placeholder="City, Street, Pincode"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-6">
            <button
              type="submit"
              className="bg-green-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-green-600 transition duration-300"
            >
              ✅ Add Seller
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSeller;
