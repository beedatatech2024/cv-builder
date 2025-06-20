const db = require('../config/db');
const bcrypt = require('bcryptjs');

const cv = { 
    addPersonalDetails: (userId, personalDetails) => {
        const { fullName, phone, address, summary, linkedin, github, portfolio, declaration } = personalDetails;
        return new Promise((resolve, reject) => {
            db.query(
                `INSERT INTO personal_info (user_id, full_name, phone, address, summary, linkedin, github, portfolio, declaration)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [userId, fullName, phone, address, summary, linkedin, github, portfolio, declaration],
                (err, result) => {
                    if (err) reject(err);
                    resolve(result);
                }
            );
        });
    },
    addEducation: (userId, educations) => {
        return new Promise((resolve, reject) => {
            const values = educations.map(edu => [
                userId, edu.institution, edu.degree, edu.field, edu.percentage, edu.startDate, edu.endDate
            ]);

            db.query(
                `INSERT INTO education (user_id, institution, degree, field_of_study, percentage, start_date, end_date)
                 VALUES ?`,
                [values],
                (err, result) => {
                    if (err) reject(err);
                    resolve(result);
                }
            );
        });
    },
    addExperience: (userId, experiences) => {
        return new Promise((resolve, reject) => {
            const values = experiences.map(exp => [
                userId, exp.companyName, exp.jobTitle, exp.startDate, exp.endDate, exp.description
            ]);
            db.query(
                `INSERT INTO experience (user_id, company_name, job_title, start_date, end_date, description)
                 VALUES ?`,
                [values],
                (err, result) => {
                    if (err) reject(err);
                    resolve(result);
                }
            );
        });
    },

    addSkills: (userId, skills) => {
        return new Promise((resolve, reject) => {
            const values = skills.map(skill => [userId, skill.skill_name, skill.level]);
            db.query(
                `INSERT INTO skills (user_id, skill_name, level) VALUES ?`,
                [values],
                (err, result) => {
                    if (err) reject(err);
                    resolve(result);
                }
            );
        });
    },

    addProjects: (userId, projects) => {
        return new Promise((resolve, reject) => {
            const values = projects.map(project => [
                userId, project.projectTitle, project.description, project.link
            ]);
            db.query(
                `INSERT INTO projects (user_id, project_title, description, link)
                 VALUES ?`,
                [values],
                (err, result) => {
                    if (err) reject(err);
                    resolve(result);
                }
            );
        });
    },

    addCertifications: (userId, certifications) => {
        return new Promise((resolve, reject) => {
            const values = certifications.map(certification => [
                userId, certification.courseName, certification.issuingOrganization, certification.dateOfCompletion, certification.certificateLink
            ]);
            db.query(
                `INSERT INTO certifications (user_id, course_name, issuing_organization, date_of_completion, certificate_link)
                 VALUES ?`,
                [values],
                (err, result) => {
                    if (err) reject(err);
                    resolve(result);
                }
            );
        });
    },

    addAchievements: (userId, achievements) => {
        return new Promise((resolve, reject) => {
            const values = achievements.map(achievement => [
                userId, achievement.title, achievement.description, achievement.type, achievement.achievementDate, achievement.link
            ]);
            db.query(
                `INSERT INTO achievements (user_id, title, description, type, achievement_date, link)
                 VALUES ?`,
                [values],
                (err, result) => {
                    if (err) reject(err);
                    resolve(result);
                }
            );
        });
    },

    addExtracurricularActivities: (userId, extracurricularActivities) => {
        return new Promise((resolve, reject) => {
            const values = extracurricularActivities.map(activity => [
                userId, activity.organizationName, activity.role, activity.startDate, activity.endDate, activity.activitiesPerformed
            ]);
            db.query(
                `INSERT INTO extracurricular_activities (user_id, organization_name, role, start_date, end_date, activities_performed)
                 VALUES ?`,
                [values],
                (err, result) => {
                    if (err) reject(err);
                    resolve(result);
                }
            );
        });
        
    },

    addRefferencesInfo: (userId, refferencesInfo) => {
        return new Promise((resolve, reject) => {
            const values = refferencesInfo.map(reference => [
                userId, reference.name, reference.relationship, reference.contactInfo, reference.designation
            ]);
            db.query(
                `INSERT INTO refferences_info (user_id, name, relationship, contact_info, designation)
                 VALUES ?`,
                [values],
                (err, result) => {
                    if (err) reject(err);
                    resolve(result);
                }
            );
        });
        
    },

    addHobbies: (userId, hobbies) => {
        return new Promise((resolve, reject) => {
            const values = hobbies.map(hobby => [
                userId, hobby.hobbyName, hobby.description
            ]);
            db.query(
                `INSERT INTO hobbies (user_id, hobby_name, description)
                 VALUES ?`,
                [values],
                (err, result) => {
                    if (err) reject(err);
                    resolve(result);
                }
            );
        });
    },


    
    findPersonalDetailsByUserId: (userId) => {
        return new Promise((resolve, reject) => {
            db.query(
                `SELECT * FROM personal_info WHERE user_id = ?`,
                [userId],
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else if (result.length === 0) {
                        resolve(null);
                    } else {
                        resolve(result[0]);
                    }
                }
            );
        });
    },
    getPersonalDetails: (userId) => {
        return new Promise((resolve, reject) => {
            db.query(
                `SELECT * FROM personal_info WHERE user_id = ?`,
                [userId],
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else if (result.length === 0) {
                        resolve(null);
                    } else {
                        resolve(result[0]);
                    }
                }
            );
        });
    },
    getEducation: (userId) => {
        return new Promise((resolve, reject) => {
            db.query(
                `SELECT * FROM education WHERE user_id = ?`,
                [userId],
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                }
            );
        });
    },
    getExperience: (userId) => {
        return new Promise((resolve, reject) => {
            db.query(
                `SELECT * FROM experience WHERE user_id = ?`,
                [userId],
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                }
            );
        });
    },
    getSkills: (userId) => {
        return new Promise((resolve, reject) => {
            db.query(
                `SELECT * FROM skills WHERE user_id = ?`,
                [userId],
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                }
            );
        });
    },
    getProjects: (userId) => {
        return new Promise((resolve, reject) => {
            db.query(
                `SELECT * FROM projects WHERE user_id = ?`,
                [userId],
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                }
            );
        });
    },
    getCertifications: (userId) => {
        return new Promise((resolve, reject) => {
            db.query(
                `SELECT * FROM certifications WHERE user_id = ?`,
                [userId],
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                }
            );
        });
    },

    getAchievements: (userId) => {
        return new Promise((resolve, reject) => {
            db.query(
                `SELECT * FROM achievements WHERE user_id = ?`,
                [userId],
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                }
            );
        });
    },

    getExtracurricularActivities: (userId) => {
        return new Promise((resolve, reject) => {
            db.query(
                `SELECT * FROM extracurricular_activities WHERE user_id = ?`,
                [userId],
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                }
            );
        });
    },
    getRefferencesInfo: (userId) => {
        return new Promise((resolve, reject) => {
            db.query(
                `SELECT * FROM references_info WHERE user_id = ?`,
                [userId],
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                }
            );
        });
    },
    getHobbies: (userId) => {
        return new Promise((resolve, reject) => {
            db.query(
                `SELECT * FROM hobbies WHERE user_id = ?`,
                [userId],
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                }
            );
        });
    },




    deletePersonalDetails: (userId) => {
        return new Promise((resolve, reject) => {
            db.query(
                `DELETE FROM personal_info WHERE user_id = ?`,
                [userId],
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                }
            );
        });
    },

    deleteEducation: (userId) => {
        return new Promise((resolve, reject) => {
            db.query(
                `DELETE FROM education WHERE user_id = ?`,
                [userId],
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                }
            );
        });
    },

    deleteSkill: (userId) => {
        return new Promise((resolve, reject) => {
            db.query(
                `DELETE FROM skills WHERE user_id = ?`,
                [userId],
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                }
            );
        });
    },

    deleteProject: (userId) => {
        return new Promise((resolve, reject) => {
            db.query(
                `DELETE FROM projects WHERE user_id = ?`,
                [userId],
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                }
            );
        });
    },

    deleteCertification: (userId) => {
        return new Promise((resolve, reject) => {
            db.query(
                `DELETE FROM certifications WHERE user_id = ?`,
                [userId],
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                }
            );
        });
    },

    deleteAchievement: (userId) => {
        return new Promise((resolve, reject) => {
            db.query(
                `DELETE FROM achievements WHERE user_id = ?`,
                [userId],
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                }
            );
        });
    },

    deleteExtracurricularActivity: (userId) => {
        return new Promise((resolve, reject) => {
            db.query(
                `DELETE FROM extracurricular_activities WHERE user_id = ?`,
                [userId],
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                }
            );
        });
    },

    deleteRefference: (userId) => {
        return new Promise((resolve, reject) => {
            db.query(
                `DELETE FROM references_info WHERE user_id = ?`,
                [userId],
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                }
            );
        });
    },

    deleteHobby: (userId) => {
        return new Promise((resolve, reject) => {
            db.query(
                `DELETE FROM hobbies WHERE user_id = ?`,
                [userId],
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                }
            );
        });
    },
};





module.exports = cv;
