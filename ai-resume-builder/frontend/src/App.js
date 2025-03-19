import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Homepage from "./components/HomePage";
import Footer from "./components/Footer";
import Login from './components/Login'
import SignUp from "./components/SignUp";
import MyResumes from "./components/MyResume";
import CreateResume from "./components/CreateResume";

function App() {
  const [currentPage, setCurrentPage] = useState("home"); // Tracks current page

  return (
    <div>
      <Navbar setCurrentPage={setCurrentPage} />
      {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
      {currentPage === "signup" && <SignUp setCurrentPage={setCurrentPage} />}
      {currentPage === "resumes" && <MyResumes setCurrentPage={setCurrentPage} />}
      {currentPage === "create-resume" && <CreateResume setCurrentPage={setCurrentPage} />}
      {currentPage === "home" && (
        <>
          <Homepage setCurrentPage={setCurrentPage} />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;