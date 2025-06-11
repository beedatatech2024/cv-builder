const cv = require("../models/cvModel");
require("dotenv").config();


const addPersonalDetails = async (req, res) => {
 try {
    const { fullName, phone, address, summary, linkedin, github } = req.body;
    const userId = req.params.userId;

    if (!fullName || !phone || !address || !summary || !linkedin || !github) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingDetails = await cv.findPersonalDetailsByUserId(userId);
    if (existingDetails) {
      return res.status(400).json({ message: "Personal details already exist for this user" });
    }

    await cv.addPersonalDetails(userId, { 
      fullName,
      phone,
      address,
      summary,
      linkedin,
      github
    });

    res.status(200).json({ message: "Personal details updated successfully" });
  }
  catch (error) {
    console.error("Error updating personal details:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
}

const addEducationDetails = async (req, res) => {
    try {
        const educations = req.body;
        const userId = req.params.userId;
        
        if (!educations || educations.length === 0) {
            return res.status(400).json({ message: "Education details are required" });
        }
        await cv.addEducation(userId, educations);
        res.status(200).json({ message: "Education details updated successfully" });
    } catch (error) {
        console.error("Error updating education details:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

const addExperienceDetails = async (req, res) => {
    try {
        const { experiences } = req.body;
        const userId = req.params.userId;
        if (!experiences || experiences.length === 0) {
            return res.status(400).json({ message: "Experience details are required" });
        }
        await cv.addExperience(userId, experiences);
        res.status(200).json({ message: "Experience details updated successfully" });
    } catch (error) {
        console.error("Error updating experience details:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

const addSkillsDetails = async (req, res) => {
    try {
        const { skills } = req.body;
        const userId = req.params.userId;
        if (!skills || skills.length === 0) {
            return res.status(400).json({ message: "Skills details are required" });
        }
        await cv.addSkills(userId, skills);
        res.status(200).json({ message: "Skills details updated successfully" });
    } catch (error) {
        console.error("Error updating skills details:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

const addProjectsDetails = async (req, res) => {
    try {
        const { projects } = req.body;
        const userId = req.params.userId;
        if (!projects || projects.length === 0) {
            return res.status(400).json({ message: "Projects details are required" });
        }
        await cv.addProjects(userId, projects);
        res.status(200).json({ message: "Projects details updated successfully" });
    } catch (error) {
        console.error("Error updating projects details:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
}


module.exports = {
  addPersonalDetails,
  addEducationDetails,
  addExperienceDetails,
  addSkillsDetails,
  addProjectsDetails
};
