const cv = require("../models/cvModel");
require("dotenv").config();

const addPersonalDetails = async (req, res) => {
  try {
    const { fullName, phone, address, summary, linkedin, github } = req.body;
    const userId = req.params.userId;

    if (!fullName || !phone || !address || !summary) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingDetails = await cv.findPersonalDetailsByUserId(userId);
    if (existingDetails) {
      return res
        .status(400)
        .json({ message: "Personal details already exist for this user" });
    }

    await cv.addPersonalDetails(userId, {
      fullName,
      phone,
      address,
      summary,
      linkedin,
      github,
      email: "",
      declaration: "",
    });

    res.status(200).json({ message: "Personal details updated successfully" });
  } catch (error) {
    console.error("Error updating personal details:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const addEducationDetails = async (req, res) => {
  try {
    const educations = req.body;
    const userId = req.params.userId;

    if (!educations || educations.length === 0) {
      return res
        .status(400)
        .json({ message: "Education details are required" });
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
    const experiences = req.body;
    const userId = req.params.userId;
    if (!experiences || experiences.length === 0) {
      return res
        .status(400)
        .json({ message: "Experience details are required" });
    }
    await cv.addExperience(userId, experiences);
    res
      .status(200)
      .json({ message: "Experience details updated successfully" });
  } catch (error) {
    console.error("Error updating experience details:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const addSkillsDetails = async (req, res) => {
  try {
    const skills = req.body;
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
};

const addProjectsDetails = async (req, res) => {
  try {
    const projects = req.body;
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
};


const addCertificationDetails = async (req, res) => {
  try {
    const certifications = req.body;
    const userId = req.params.userId;
    if (!certifications || certifications.length === 0) {
      return res
        .status(400)
        .json({ message: "Certifications details are required" });
    }
    await cv.addCertifications(userId, certifications);
    res
      .status(200)
      .json({ message: "Certifications details updated successfully" });
  } catch (error) {
    console.error("Error updating certifications details:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


const addAchievementDetails = async (req, res) => {
  try {
    const achievements = req.body;
    const userId = req.params.userId;
    if (!achievements || achievements.length === 0) {
      return res
        .status(400)
        .json({ message: "Achievements details are required" });
    }
    await cv.addAchievements(userId, achievements);
    res
      .status(200)
      .json({ message: "Achievements details updated successfully" });
  } catch (error) {
    console.error("Error updating achievements details:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
}


const addExtracurricularActivitiesDetails = async (req, res) => {
  try {
    const extracurricularActivities = req.body;
    const userId = req.params.userId;
    if (!extracurricularActivities || extracurricularActivities.length === 0) {
      return res
        .status(400)
        .json({ message: "Extracurricular activities details are required" });
    }
    await cv.addExtracurricularActivities(userId, extracurricularActivities);
    res
      .status(200)
      .json({ message: "Extracurricular activities details updated successfully" });
  } catch (error) {
    console.error("Error updating extracurricular activities details:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
}

const addRefferencesInfoDetails = async (req, res) => {
  try {
    const refferencesInfo = req.body;
    const userId = req.params.userId;
    if (!refferencesInfo || refferencesInfo.length === 0) {
      return res
        .status(400)
        .json({ message: "Refferences info details are required" });
    }
    await cv.addRefferencesInfo(userId, refferencesInfo);
    res
      .status(200)
      .json({ message: "Refferences info details updated successfully" });
  } catch (error) {
    console.error("Error updating refferences info details:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
}


const addHobbiesDetails = async (req, res) => {
  try {
    const hobbies = req.body;
    const userId = req.params.userId;
    if (!hobbies || hobbies.length === 0) {
      return res.status(400).json({ message: "Hobbies details are required" });
    }
    await cv.addHobbies(userId, hobbies);
    res.status(200).json({ message: "Hobbies details updated successfully" });
  } catch (error) {
    console.error("Error updating hobbies details:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
}



module.exports = {
  addPersonalDetails,
  addEducationDetails,
  addExperienceDetails,
  addSkillsDetails,
  addProjectsDetails,
  addCertificationDetails,
  addAchievementDetails,
  addExtracurricularActivitiesDetails,
  addRefferencesInfoDetails,
  addHobbiesDetails,
};
