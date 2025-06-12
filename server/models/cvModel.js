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

};





module.exports = cv;
