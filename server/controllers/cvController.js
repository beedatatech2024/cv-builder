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
      portfolio: "",
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
    console.log(experiences);

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
    console.log(projects);

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

const getCVDetails = async (req, res) => {
    
  try {
    const userId = req.params.userId;

    const personalRaw = await cv.getPersonalDetails(userId);
    const educationRaw = await cv.getEducation(userId);
    const skillsRaw = await cv.getSkills(userId);
    const experienceRaw = await cv.getExperience(userId);
    const projectsRaw = await cv.getProjects(userId);

    const personal = {
      fullName: personalRaw?.full_name,
      phone: personalRaw?.phone,
      address: personalRaw?.address,
      summary: personalRaw?.summary,
      linkedin: personalRaw?.linkedin,
      github: personalRaw?.github,
      portfolio: personalRaw?.portfolio || "",
      declaration: personalRaw?.declaration || "",
    };

    const education = educationRaw.map((item) => ({
      institution: item.institution,
      degree: item.degree,
      field: item.field,
      percentage: item.percentage,
      startDate: item.start_date,
      endDate: item.end_date,
    }));

    const skills = skillsRaw.map((item) => ({
      skill_name: item.skill_name,
      level: item.level,
    }));

    const experience = experienceRaw.map((item) => ({
      company_name: item.company_name,
      job_title: item.job_title,
      start_date: item.start_date,
      end_date: item.end_date,
      description: item.description,
    }));

    const projects = projectsRaw.map((item) => ({
      project_title: item.project_title,
      description: item.description,
      link: item.link,
    }));

    const cvDetails = { personal, education, skills, experience, projects };

    res.status(200).json(cvDetails);
  } catch (error) {
    console.error("Error fetching CV details:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getCVProgress = async (req, res) => {
  try {
    const userId = req.params.userId;

    const personalDetails = await cv.getPersonalDetails(userId);
    const projects = await cv.getProjects(userId);
    const skills = await cv.getSkills(userId);
    const experience = await cv.getExperience(userId);
    const education = await cv.getEducation(userId);

    let personalDetailsProgress = 0;
    let educationDetailsProgress = 0;
    let experienceDetailsProgress = 0;
    let skillsDetailsProgress = 0;
    let projectsDetailsProgress = 0;

    // ✅ Personal Details (6 fields)
    if (personalDetails) {
      const fields = [
        "full_name",
        "phone",
        "address",
        "summary",
        "linkedin",
        "github",
        "portfolio",
        "declaration",
      ];
      const filled = fields.filter(
        (field) => personalDetails[field]?.trim() !== ""
      ).length;
      personalDetailsProgress = Math.round((filled / fields.length) * 100);
    }

    // ✅ Education (up to 3 fully filled entries)
    if (education?.length) {
      const requiredFields = [
        "institution",
        "degree",
        "field_of_study",
        "percentage",
        "start_date",
        "end_date",
      ];

      const validEntries = education.slice(0, 3).filter((edu) =>
        requiredFields.every((field) => {
          const val = edu[field];
          if (typeof val === "string") return val.trim() !== "";
          return val !== null && val !== undefined;
        })
      );

      educationDetailsProgress = Math.round((validEntries.length / 3) * 100);
    }

    // ✅ Experience (at least 1 complete)
    if (experience?.length) {
      const requiredFields = [
        "company_name",
        "job_title",
        "start_date",
        "end_date",
        "description",
      ];

      const isComplete = experience.some((exp) =>
        requiredFields.every((field) => {
          const val = exp[field];
          if (typeof val === "string") return val.trim() !== "";
          return val !== null && val !== undefined;
        })
      );

      experienceDetailsProgress = isComplete ? 100 : 0;
    }
    // ✅ Skills (at least 5 valid entries)
    if (skills?.length) {
      const validSkills = skills.filter(
        (skill) => skill.skill_name?.trim() !== "" && skill.level?.trim() !== ""
      );
      skillsDetailsProgress = Math.min(
        100,
        Math.round((validSkills.length / 5) * 100)
      );
    }

    // ✅ Projects (up to 2 fully filled)
    if (projects?.length) {
      const requiredFields = ["project_title", "description", "link"];
      const validProjects = projects
        .slice(0, 2)
        .filter((proj) =>
          requiredFields.every((field) => proj[field]?.trim() !== "")
        );
      projectsDetailsProgress = Math.round((validProjects.length / 2) * 100);
    }

    const progress = {
      personalDetails: personalDetailsProgress,
      education: educationDetailsProgress,
      experience: experienceDetailsProgress,
      skills: skillsDetailsProgress,
      projects: projectsDetailsProgress,
    };

    res.status(200).json({ progress });
  } catch (error) {
    console.error("Error fetching CV progress:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  addPersonalDetails,
  addEducationDetails,
  addExperienceDetails,
  addSkillsDetails,
  addProjectsDetails,
  getCVDetails,
  getCVProgress,
};
