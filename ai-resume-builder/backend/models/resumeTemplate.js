const mongoose = require("mongoose");

const resumeTemplateSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Template name
  previewImage: { type: String, required: true }, // Image URL for preview
  fields: [{ type: String, required: true }], // List of fields needed (e.g., name, email, skills)
  htmlStructure: { type: String, required: true }, // HTML template with placeholders
  cssStyles: { type: String, required: true }, 
  jsStructure :{ type: String, required: true },// CSS styles for the template
});

const ResumeTemplate = mongoose.model("ResumeTemplate", resumeTemplateSchema);
module.exports = ResumeTemplate;
