const db = require('../config/db');

const cvUpdate = {
    updatePersonalDetails: (userId, personalDetails) => {
        return new Promise((resolve, reject) => {
            db.query(
                `UPDATE personal_info SET first_name = ?, last_name = ?, email = ?, phone = ?, address = ? WHERE user_id = ?`,
                [personalDetails.firstName, personalDetails.lastName, personalDetails.email, personalDetails.phone, personalDetails.address, userId],
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

    updateEducation: (userId, educations) => {
        return new Promise((resolve, reject) => {
            db.query(
                `UPDATE education SET institution = ?, degree = ?, field_of_study = ?, percentage = ?, start_date = ?, end_date = ? WHERE user_id = ? AND id = ?`,
                [educations.institution, educations.degree, educations.field, educations.percentage, educations.startDate, educations.endDate, userId, educations.id],
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

    updateExperience: (userId, experiences) => {
        return new Promise((resolve, reject) => {
            db.query(
                `UPDATE experience SET company = ?, position = ?, description = ?, start_date = ?, end_date = ? WHERE user_id = ? AND id = ?`,
                [experiences.company, experiences.position, experiences.description, experiences.startDate, experiences.endDate, userId, experiences.id],
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

    updateSkill: (userId, skill) => {
        return new Promise((resolve, reject) => {
            db.query(
                `UPDATE skills SET skill = ? WHERE user_id = ? AND id = ?`,
                [skill.skill, userId, skill.id],
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

    updateProject: (userId, project) => {
        return new Promise((resolve, reject) => {
            db.query(
                `UPDATE projects SET title = ?, description = ?, link = ? WHERE user_id = ? AND id = ?`,
                [project.title, project.description, project.link, userId, project.id],
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


    updateCertification: (userId, certification) => {
        return new Promise((resolve, reject) => {
            db.query(
                `UPDATE certifications SET title = ?, description = ?, link = ? WHERE user_id = ? AND id = ?`,
                [certification.title, certification.description, certification.link, userId, certification.id],
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

    updateAchievement: (userId, achievement) => {
        return new Promise((resolve, reject) => {
            db.query(
                `UPDATE achievements SET title = ?, description = ?, link = ? WHERE user_id = ? AND id = ?`,
                [achievement.title, achievement.description, achievement.link, userId, achievement.id],
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

    updateExtracurricularActivity: (userId, extracurricularActivity) => {
        return new Promise((resolve, reject) => {
            db.query(
                `UPDATE extracurricular_activities SET title = ?, description = ?, link = ? WHERE user_id = ? AND id = ?`,
                [extracurricularActivity.title, extracurricularActivity.description, extracurricularActivity.link, userId, extracurricularActivity.id],
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

    updateRefference: (userId, refference) => {
        return new Promise((resolve, reject) => {
            db.query(
                `UPDATE refference_info SET name = ?, position = ?, company = ?, email = ?, phone = ? WHERE user_id = ? AND id = ?`,
                [refference.name, refference.position, refference.company, refference.email, refference.phone, userId, refference.id],
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

    updateHobby: (userId, hobby) => {
        return new Promise((resolve, reject) => {
            db.query(
                `UPDATE hobbies SET hobby = ? WHERE user_id = ? AND id = ?`,
                [hobby.hobby, userId, hobby.id],
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
}

module.exports = cvUpdate;