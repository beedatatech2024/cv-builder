const db = require('../config/db');
const bcrypt = require('bcryptjs');

const cv = { 

    addPersonalDetails: (userId, personalDetails) => {
        const { fullName, phone, address, summary, linkedin, github } = personalDetails;
        return new Promise((resolve, reject) => {
            db.query(
                `INSERT INTO personal_info (user_id, full_name, phone, address, summary, linkedin, github)
                 VALUES (?, ?, ?, ?, ?, ?, ?)`,
                [userId, fullName, phone, address, summary, linkedin, github],
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
                userId, edu.institution, edu.degree, edu.field, edu.percentage, edu.start_date, edu.end_date
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
                userId, exp.company, exp.position, exp.start_date, exp.end_date, exp.description
            ]);
            db.query(
                `INSERT INTO experience (user_id, company, position, start_date, end_date, description)
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
                userId, project.title, project.description, project.link
            ]);
            db.query(
                `INSERT INTO projects (user_id, title, description, link)
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
    }
};





module.exports = cv;
