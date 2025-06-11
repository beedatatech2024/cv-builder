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