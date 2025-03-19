import React from "react";

const MyResumes = ({ setCurrentPage }) => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">My Resumes</h1>

      <div className="bg-gray-100 p-10 rounded-lg text-center">
        <h2 className="text-xl font-semibold mb-2">No resumes yet</h2>
        <p className="text-gray-600 mb-4">
          Create your first resume to get started with ResuMate
        </p>
        <button 
          className="px-6 py-3 bg-blue-600 text-white rounded-md"
          onClick={() => setCurrentPage("create-resume")}
        >
         ➕ Create New Resume
        </button>
      </div>
    </div>
  );
};

export default MyResumes;
