import axiosInstance from "./axiosInstance";


export const addPersonalDetails = async (userId, personalDetails) => {
  try {
    const response = await axiosInstance.post(`/cv/personal/${userId}`, personalDetails);
    return response.data;
  } catch (error) {
    console.error(
      "Register Error:",
      error.response?.data?.message || error.message
    );
    throw error.response?.data || error;
  }
};

export const addEducationDetails = async (userId, educationDetails) => {
  try {
    const response = await axiosInstance.post(`/cv/education/${userId}`, educationDetails);
    return response.data;
  } catch (error) {
    console.error(
      "Education Error:",
      error.response?.data?.message || error.message
    );
    throw error.response?.data || error;
  }
};


export const addExperienceDetails = async (userId, experienceDetails) => {
  try {
    const response = await axiosInstance.post(`/cv/experience/${userId}`, experienceDetails);
    return response.data;
  } catch (error) {
    console.error(
      "Experience Error:",
      error.response?.data?.message || error.message
    );
    throw error.response?.data || error;
  }
};


export const addSkillsDetails = async (userId, skillsDetails) => {
  try {
    const response = await axiosInstance.post(`/cv/skills/${userId}`, skillsDetails);
    return response.data;
  } catch (error) {
    console.error(
      "Skills Error:",
      error.response?.data?.message || error.message
    );
    throw error.response?.data || error;
  }
};

export const addProjectsDetails = async (userId, projectsDetails) => {
  try {
    const response = await axiosInstance.post(`/cv/projects/${userId}`, projectsDetails);
    return response.data;
  } catch (error) {
    console.error(
      "Projects Error:",
      error.response?.data?.message || error.message
    );
    throw error.response?.data || error;
  }
};

export const addCertificationDetails = async (userId, certificationsDetails) => {
  try {
    const response = await axiosInstance.post(`/cv/certifications/${userId}`, certificationsDetails);
    return response.data;
  } catch (error) {
    console.error(
      "Certifications Error:",
      error.response?.data?.message || error.message
    );
    throw error.response?.data || error;
  }
}

export const addAchievementDetails = async (userId, achievementsDetails) => {
  try {
    const response = await axiosInstance.post(`/cv/achievements/${userId}`, achievementsDetails);
    return response.data;
  } catch (error) {
    console.error(
      "Achievements Error:",
      error.response?.data?.message || error.message
    );
    throw error.response?.data || error;
  }
}

export const addExtracurricularActivitiesDetails = async (userId, activitiesDetails) => {
  try {
    const response = await axiosInstance.post(`/cv/activities/${userId}`, activitiesDetails);
    return response.data;
  } catch (error) {
    console.error(
      "Activities Error:",
      error.response?.data?.message || error.message
    );
    throw error.response?.data || error;
  }
}

export const addRefferencesInfoDetails = async (userId, referencesDetails) => {
  try {
    const response = await axiosInstance.post(`/cv/references/${userId}`, referencesDetails);
    return response.data;
  } catch (error) {
    console.error(
      "References Error:",
      error.response?.data?.message || error.message
    );
    throw error.response?.data || error;
  }
}

export const addHobbies = async (userId, hobbiesDetails) => {
  try {
    const response = await axiosInstance.post(`/cv/hobbies/${userId}`, hobbiesDetails);
    return response.data;
  } catch (error) {
    console.error(
      "Hobbies Error:",
      error.response?.data?.message || error.message
    );
    throw error.response?.data || error;
  }
}

export const getCVDetails = async (userId) => {
  try {
    const response = await axiosInstance.get(`/cv/${userId}`);
    console.log("CV Details Response:", response.data);
    
    return response.data;
  } catch (error) {
    console.error(
      "Get CV Details Error:",
      error.response?.data?.message || error.message
    );
    throw error.response?.data || error;
  }
};

export const getCVProgress = async (userId) => {
  try {
    const response = await axiosInstance.get(`/cv/progress/${userId}`);
    return response.data;
  } catch (error) {
    console.error(
      "Get CV Progress Error:",
      error.response?.data?.message || error.message
    );
    throw error.response?.data || error;
  }
}