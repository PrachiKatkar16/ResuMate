const express = require("express");
const router = express.Router();
const ResumeTemplate = require("../models/resumeTemplate");

// Get all templates
router.get("/", async (req, res) => {
  try {
    const templates = await ResumeTemplate.find();
    res.json(templates);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Get a single template by ID
router.get("/:id", async (req, res) => {
  try {
    const template = await ResumeTemplate.findById(req.params.id);
    if (!template) {
      return res.status(404).json({ error: "Template not found" });
    }
    res.json(template);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
