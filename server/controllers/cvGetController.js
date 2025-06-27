const cv = require("../models/cvModel");
require("dotenv").config();


const getCVDetails = async (req, res) => {
    
  try {
    const userId = req.params.userId;

    const personalRaw = await cv.getPersonalDetails(userId);
    const educationRaw = await cv.getEducation(userId);
    const skillsRaw = await cv.getSkills(userId);
    const experienceRaw = await cv.getExperience(userId);
    const projectsRaw = await cv.getProjects(userId);
    const certificationsRaw = await cv.getCertifications(userId);
    const achievementsRaw = await cv.getAchievements(userId);
    const extracurricularRaw = await cv.getExtracurricularActivities(userId);
    const hobbiesRaw = await cv.getHobbies(userId);
    const referencesRaw = await cv.getRefferencesInfo(userId);

    const personal = {
      fullName: personalRaw?.full_name,
      phone: personalRaw?.phone,
      address: personalRaw?.address,
      summary: personalRaw?.summary,
      linkedin: personalRaw?.linkedin,
      github: personalRaw?.github,
      email: personalRaw?.email || "",
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

    const certifications = certificationsRaw.map((item) => ({
      course_name: item.course_name,
      issuing_organization: item.issuing_organization,
      date_of_completion: item.date_of_completion,
      certificate_link: item.certificate_link,
    }));

    const achievements = achievementsRaw.map((item) => ({
      title: item.title,
      description: item.description,
    }));

    const extracurricular = extracurricularRaw.map((item) => ({
      organization: item.organization_name,
      role: item.role,
      performance: item.activities_performed,
    }));

    const hobbies = hobbiesRaw.map((item) => ({
      hobby_name: item.hobby_name,
      description: item.description,
    }));

    const references = referencesRaw.map((item) => ({
      name: item.name,
      relationship: item.relationship,
      contact_info: item.contact_info,
    }));

    const cvDetails = { personal, education, skills, experience, projects, certifications, achievements, extracurricular, hobbies, references };

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
    const certifications = await cv.getCertifications(userId);
    const achievements = await cv.getAchievements(userId);
    const hobbies = await cv.getHobbies(userId);
    const extraCurricularActivities = await cv.getExtracurricularActivities(userId);
    const getRefferencesInfo = await cv.getRefferencesInfo(userId);


    let personalDetailsProgress = 0;
    let educationDetailsProgress = 0;
    let experienceDetailsProgress = 0;
    let skillsDetailsProgress = 0;
    let projectsDetailsProgress = 0;
    let certificationsDetailsProgress = 0;
    let achievementsDetailsProgress = 0;
    let hobbiesDetailsProgress = 0;
    let extraCurricularActivitiesDetailsProgress = 0;
    let refferencesInfoDetailsProgress = 0;

    // ✅ Personal Details (6 fields)
    if (personalDetails) {
      const fields = [
        "full_name",
        "phone",
        "address",
        "summary",
        "linkedin",
        "github",
        "email",
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

    // ✅ Certifications (up to 2 fully filled)
    if (certifications?.length) {
      const requiredFields = ["certification_name", "issuer", "issue_date"];
      const validProjects = certifications
        .slice(0, 2)
        .filter((proj) =>
          requiredFields.every((field) => proj[field]?.trim() !== "")
        );
      certificationsDetailsProgress = Math.round((validProjects.length / 2) * 100);
    }



    // ✅ Achievements (up to 2 fully filled)
    if (achievements?.length) {
      const requiredFields = ["achievement_name", "date"];
      const validProjects = achievements
        .slice(0, 2)
        .filter((proj) =>
          requiredFields.every((field) => proj[field]?.trim() !== "")
        );
      achievementsDetailsProgress = Math.round((validProjects.length / 2) * 100);
    }

    if (hobbies?.length) {
        const requiredFields = ["hobby_name"];
        const validProjects = hobbies
          .slice(0, 2)
          .filter((proj) =>
            requiredFields.every((field) => proj[field]?.trim() !== "")
          );
        hobbiesDetailsProgress = Math.round((validProjects.length / 2) * 100);
      }

    if (extraCurricularActivities?.length) {
        const requiredFields = ["activity_name", "year"];
        const validProjects = extraCurricularActivities
          .slice(0, 2)
          .filter((proj) =>
            requiredFields.every((field) => proj[field]?.trim() !== "")
          );
        extraCurricularActivitiesDetailsProgress = Math.round((validProjects.length / 2) * 100);
      }


    const progress = {
      personalDetails: personalDetailsProgress,
      education: educationDetailsProgress,
      experience: experienceDetailsProgress,
      skills: skillsDetailsProgress,
      projects: projectsDetailsProgress,
      certifications: certificationsDetailsProgress,
      achievements: achievementsDetailsProgress,
      hobbies: hobbiesDetailsProgress,
      extraCurricularActivities: extraCurricularActivitiesDetailsProgress,
    };

    res.status(200).json({ progress });
  } catch (error) {
    console.error("Error fetching CV progress:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


module.exports = {
  getCVProgress,
  getCVDetails
};