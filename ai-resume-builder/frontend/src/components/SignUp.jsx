import React from "react";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const SignUp = ({ setCurrentPage }) => {
  const { signup } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(name, email, password);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-lg w-96">
      <h2 className="text-2xl font-bold text-center mb-2">Create an Account</h2>
      <p className="text-gray-500 text-center mb-4">
      Sign up to start creating professional resumes
      </p>

      <div className="mb-4">
        <label className="block text-gray-700">Full Name</label>
        <input
          type="name"
          placeholder="Enter Full Name"
          className="w-full p-2 border rounded-md focus:outline-blue-500"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-2 border rounded-md focus:outline-blue-500"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Password</label>
        <input
          type="password"
          placeholder="Craete your password"
          className="w-full p-2 border rounded-md focus:outline-blue-500"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm your password"
          className="w-full p-2 border rounded-md focus:outline-blue-500"
        />
      </div>

      <button className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition">
        Sign Up
      </button>
        <p className="text-sm text-center">
          Already have an account?{" "}
          <span onClick={() => setCurrentPage("login")} className="text-blue-600 cursor-pointer">Login</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
