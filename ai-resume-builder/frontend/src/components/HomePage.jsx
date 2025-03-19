import React from "react";



const Homepage = ({ setCurrentPage }) => {
  if (!setCurrentPage) {
    console.error("❌ setCurrentPage is undefined in MyResumes!");
  }

  return (
    <section className="text-center py-20 bg-gray-100">
      <h2 className="text-4xl font-bold mb-4">Create Professional Resumes with AI</h2>
      <p className="text-gray-600 mb-6">
        ResuMate helps you build impressive resumes with AI-powered suggestions, multiple templates, and easy PDF export.
      </p>
      <div className="space-x-4">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-md" onClick={() => setCurrentPage("resumes")} >Get Started →</button>
        <button className="px-6 py-3 border rounded-md">View Templates 📄</button>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold mb-2">📄 Multiple Templates</h3>
          <p className="text-gray-600">Choose from a variety of professional templates to make your resume stand out.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold mb-2">✨ AI-Powered Suggestions</h3>
          <p className="text-gray-600">Get intelligent recommendations to improve your resume content.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold mb-2">📥 Easy PDF Export</h3>
          <p className="text-gray-600">Download your resume as a professionally formatted PDF.</p>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
