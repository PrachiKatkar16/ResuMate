import React, { useState } from "react";

const CreateResume = ({ setCurrentPage }) => {
  const [resumeTitle, setResumeTitle] = useState("");
  const [showTemplates, setShowTemplates] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <button 
        className="text-blue-600 hover:text-blue-800 mb-6 flex items-center gap-1"
        onClick={() => showTemplates ? setShowTemplates(false) : setCurrentPage("resumes")}
      >
        ← Back to {showTemplates ? "Options" : "Dashboard"}
      </button>

      <h1 className="text-3xl font-bold mb-8">Create New Resume</h1>

      <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
        {/* Resume Title Section */}
        <div className="mb-10">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Resume Title
          </label>
          <input
            type="text"
            placeholder="e.g., Software Developer Resume"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={resumeTitle}
            onChange={(e) => setResumeTitle(e.target.value)}
          />
          <p className="mt-2 text-sm text-gray-500">
            This is for your reference only and won't appear on your resume
          </p>
        </div>

        {!showTemplates ? (
          /* Initial Options */
          <>
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div 
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 cursor-pointer"
                onClick={() => setShowTemplates(false)}
              >
                <h3 className="text-lg font-semibold mb-3">Start from Scratch</h3>
                <p className="text-gray-600 text-sm">
                  Create your resume from scratch with our easy-to-use editor
                </p>
              </div>
              
              <div 
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 cursor-pointer"
                onClick={() => setShowTemplates(true)}
              >
                <h3 className="text-lg font-semibold mb-3">Use a Template</h3>
                <p className="text-gray-600 text-sm">
                  Choose from our professional templates to start with
                </p>
              </div>
            </div>

            <div className="relative mb-10">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-gray-50 px-4 text-sm text-gray-500">OR</span>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-xl font-semibold mb-4">Start with a Blank Resume</h2>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                Create your resume from scratch with our easy-to-use editor
              </p>
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                Create Resume
              </button>
            </div>
          </>
        ) : (
          /* Template Selection */
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div 
                className={`bg-white p-6 rounded-xl border-2 cursor-pointer transition-all ${
                  selectedTemplate === 'modern' 
                    ? 'border-blue-500' 
                    : 'border-gray-200 hover:border-blue-300'
                }`}
                onClick={() => setSelectedTemplate('modern')}
              >
                <h3 className="text-lg font-semibold mb-3">Modern Template</h3>
                <p className="text-gray-600 text-sm">
                  Clean, contemporary design with modern typography
                </p>
              </div>
              
              <div 
                className={`bg-white p-6 rounded-xl border-2 cursor-pointer transition-all ${
                  selectedTemplate === 'professional' 
                    ? 'border-blue-500' 
                    : 'border-gray-200 hover:border-blue-300'
                }`}
                onClick={() => setSelectedTemplate('professional')}
              >
                <h3 className="text-lg font-semibold mb-3">Professional Template</h3>
                <p className="text-gray-600 text-sm">
                  Traditional layout optimized for ATS systems
                </p>
              </div>
            </div>

            <div className="text-center pt-6">
              <button 
                className={`px-8 py-3 text-white rounded-lg font-medium transition-colors ${
                  selectedTemplate 
                    ? 'bg-blue-600 hover:bg-blue-700' 
                    : 'bg-gray-400 cursor-not-allowed'
                }`}
                disabled={!selectedTemplate}
              >
                Use Selected Template
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateResume;