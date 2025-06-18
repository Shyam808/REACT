import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logged in as: ${email}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500 px-4">
      <div className="bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-xl shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold text-white text-center mb-6">🔐 Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-white mb-1">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div>
            <label className="block text-white mb-1">Password</label>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-300"
            >
              ✅ Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
