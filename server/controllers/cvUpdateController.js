const cvUpdate = require("../models/cvUpdateModel");
require("dotenv").config();

const updatePersonalDetails = async (req, res) => {
  try {
    const userId = req.params.userId;
    const personalDetails = req.body;
    await cvUpdate.updatePersonalDetails(userId, personalDetails);
    res.status(200).json({ message: "Personal details updated successfully" });
  } catch (error) {
    console.error("Error updating personal details:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const updateEducation = async (req, res) => {
  try {
    const userId = req.params.userId;
    const education = req.body;
    await cvUpdate.updateEducation(userId, education);
    res.status(200).json({ message: "Education updated successfully" });
  } catch (error) {
    console.error("Error updating education:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const updateWorkExperience = async (req, res) => {
  try {
    const userId = req.params.userId;
    const workExperience = req.body;
    await cvUpdate.updateWorkExperience(userId, workExperience);
    res.status(200).json({ message: "Work experience updated successfully" });
  } catch (error) {
    console.error("Error updating work experience:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const updateSkill = async (req, res) => {
  try {
    const userId = req.params.userId;
    const skill = req.body;
    await cvUpdate.updateSkill(userId, skill);
    res.status(200).json({ message: "Skill updated successfully" });
  } catch (error) {
    console.error("Error updating skill:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const updateProject = async (req, res) => {
  try {
    const userId = req.params.userId;
    const project = req.body;
    await cvUpdate.updateProject(userId, project);
    res.status(200).json({ message: "Project updated successfully" });
  } catch (error) {
    console.error("Error updating project:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const updateCertification = async (req, res) => {
  try {
    const userId = req.params.userId;
    const certification = req.body;
    await cvUpdate.updateCertification(userId, certification);
    res.status(200).json({ message: "Certification updated successfully" });
  } catch (error) {
    console.error("Error updating certification:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const updateAchievement = async (req, res) => {
  try {
    const userId = req.params.userId;
    const achievement = req.body;
    await cvUpdate.updateAchievement(userId, achievement);
    res.status(200).json({ message: "Achievement updated successfully" });
  } catch (error) {
    console.error("Error updating achievement:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const updateExtracurricularActivity = async (req, res) => {
  try {
    const userId = req.params.userId;
    const extracurricularActivity = req.body;
    await cvUpdate.updateExtracurricularActivity(
      userId,
      extracurricularActivity
    );
    res
      .status(200)
      .json({ message: "Extracurricular activity updated successfully" });
  } catch (error) {
    console.error("Error updating extracurricular activity:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const updateRefference = async (req, res) => {
  try {
    const userId = req.params.userId;
    const refference = req.body;
    await cvUpdate.updateRefference(userId, refference);
    res.status(200).json({ message: "Refference updated successfully" });
  } catch (error) {
    console.error("Error updating refference:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const updateHobby = async (req, res) => {
  try {
    const userId = req.params.userId;
    const hobby = req.body;
    await cvUpdate.updateHobby(userId, hobby);
    res.status(200).json({ message: "Hobby updated successfully" });
  } catch (error) {
    console.error("Error updating hobby:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  updatePersonalDetails,
  updateEducation,
  updateWorkExperience,
  updateSkill,
  updateProject,
  updateCertification,
  updateAchievement,
  updateExtracurricularActivity,
  updateRefference,
  updateHobby,
};
