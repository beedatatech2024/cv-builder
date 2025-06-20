const cvDelete = require("../models/cvDeleteModel");
require("dotenv").config();


const deletePersonalDetails = async (req, res) => {
    try {
        const userId = req.params.userId;
        await cvDelete.deletePersonalDetails(userId);
        res.status(200).json({ message: "Personal details deleted successfully" });
    } catch (error) {
        console.error("Error deleting personal details:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

const deleteEducation = async (req, res) => {
    try {
        const educationId = req.params.educationId;
        await cvDelete.deleteEducation(educationId);
        res.status(200).json({ message: "Education deleted successfully" });
    } catch (error) {
        console.error("Error deleting education:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

const deleteExperience = async (req, res) => {
    try {
        const experienceId = req.params.experienceId;
        await cvDelete.deleteExperience(experienceId);
        res.status(200).json({ message: "Experience deleted successfully" });
    } catch (error) {
        console.error("Error deleting experience:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

const deleteSkill = async (req, res) => {
    try {
        const skillId = req.params.skillId;
        await cvDelete.deleteSkill(skillId);
        res.status(200).json({ message: "Skill deleted successfully" });
    } catch (error) {
        console.error("Error deleting skill:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

const deleteProject = async (req, res) => {
    try {
        const projectId = req.params.projectId;
        await cvDelete.deleteProject(projectId);
        res.status(200).json({ message: "Project deleted successfully" });
    } catch (error) {
        console.error("Error deleting project:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

const deleteCertification = async (req, res) => {
    try {
        const certificationId = req.params.certificationId;
        await cvDelete.deleteCertification(certificationId);
        res.status(200).json({ message: "Certification deleted successfully" });
    } catch (error) {
        console.error("Error deleting certification:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

const deleteAchievement = async (req, res) => {
    try {
        const achievementId = req.params.achievementId;
        await cvDelete.deleteAchievement(achievementId);
        res.status(200).json({ message: "Achievement deleted successfully" });
    } catch (error) {
        console.error("Error deleting achievement:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};


const extraCurricularActivity = async (req, res) => {
    try {
        const extracurricularActivityId = req.params.extracurricularActivityId;
        await cvDelete.extraCurricularActivity(extracurricularActivityId);
        res.status(200).json({ message: "Extracurricular activity deleted successfully" });
    } catch (error) {
        console.error("Error deleting extracurricular activity:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};


const deleteRefference = async (req, res) => {
    try {
        const refferenceId = req.params.refferenceId;
        await cvDelete.deleteRefference(refferenceId);
        res.status(200).json({ message: "Refference deleted successfully" });
    } catch (error) {
        console.error("Error deleting refference:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

const deleteHobby = async (req, res) => {
    try {
        const hobbyId = req.params.hobbyId;
        await cvDelete.deleteHobby(hobbyId);
        res.status(200).json({ message: "Hobby deleted successfully" });
    } catch (error) {
        console.error("Error deleting hobby:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

module.exports = {
    deleteEducation,
    deleteExperience,
    deleteSkill,
    deleteProject,
    deleteCertification,
    deleteAchievement,
    extraCurricularActivity,
    deleteRefference,
    deleteHobby,
};