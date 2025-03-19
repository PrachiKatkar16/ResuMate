import React from "react";

const Navbar = ({ setCurrentPage }) => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">ResuMate</h1>
      <div className="space-x-6">
        <a href="#" onClick={() => setCurrentPage("home")} className="text-gray-700 hover:text-blue-600">
          Home
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-600">Templates</a>
        <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
      </div>
      <div className="space-x-4">
        <button onClick={() => setCurrentPage("login")} className="px-4 py-2 border rounded-md">
          Login
        </button>
        <button onClick={() => setCurrentPage("signup")} className="px-4 py-2 bg-blue-600 text-white rounded-md">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
