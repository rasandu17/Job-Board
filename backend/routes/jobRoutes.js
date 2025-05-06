const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

router.post("/", async (req, res) => {
  try {
    const newJob = new Job({
      title: req.body.title,
      company: req.body.company,
      description: req.body.description,
      location: req.body.location,
    });

    const saveJob = await newJob.save();
    res.status(201).json(saveJob);
  } catch(err) {
    console.error("Error saving job:", err);
    res.status(500).json({ error: "Failed to crate job" });
  }
});
module.exports = router;

