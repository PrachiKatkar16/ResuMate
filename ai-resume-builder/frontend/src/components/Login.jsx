import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";


const Login = ({ setCurrentPage }) => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate(); // 🔹 Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {  // 🔹 Adjust the backend URL
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Token:", data.token); // 🔹 Print token to console
        console.log("Message:", data.msg); // 🔹 Print success message
        localStorage.setItem("token", data.token); // 🔹 Store token in localStorage
        setCurrentPage("home"); // 🔹 Redirect to HomePage
      } else {
        console.error("Error:", data.msg);
        alert(data.msg); // 🔹 Show error message if login fails
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-2">Login to ResuMate</h2>
        <p className="text-gray-500 text-center mb-4">
          Enter your credentials to access your account
        </p>

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
            placeholder="Enter your password"
            className="w-full p-2 border rounded-md focus:outline-blue-500"
            onChange={(e) => setPassword(e.target.value)}
          />
          <a href="#" className="text-blue-500 text-sm float-right mt-1">
            Forgot password?
          </a>
        </div>

        <button 
          onClick={handleSubmit} 
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
        >
          Login
        </button>

        <p className="text-sm text-center mt-3">
          Don't have an account?{" "}
          <span onClick={() => setCurrentPage("signup")} className="text-blue-600 cursor-pointer">Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
