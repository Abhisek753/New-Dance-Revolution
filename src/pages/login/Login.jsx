// src/pages/LoginPage.js
import React from 'react';
import danceImage from "../../assets/dance1.png"
const LoginPage = () => {
  const handleGoogleLogin = () => {
    // Handle Google login functionality
    console.log("Logging in with Google...");
  };

  return (
    <div className='w-full h-[90vh] py-12 '    style={{ backgroundImage:`url(${danceImage})`,
    backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }}>
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your email" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
          <input type="password" id="password" name="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your password" required />
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="border-b border-gray-400 w-1/4"></div>
          <div className="text-gray-600 text-sm">Or</div>
          <div className="border-b border-gray-400 w-1/4"></div>
        </div>
        <button type="button" onClick={handleGoogleLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Login with Google
        </button>
      </form>
    </div>
    </div>
  );
};

export default LoginPage;
