const db = require('../config/db');

const cvDelete = {
    deletePersonalDetails: (userId) => {
        return new Promise((resolve, reject) => {
            db.query(
                `DELETE FROM personal_info WHERE id = ?`,
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

    deleteEducation: (educationId) => {
        return new Promise((resolve, reject) => {
            db.query(
                `DELETE FROM education WHERE id = ?`,
                [educationId],
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

    deleteSkill: (skillId) => {
        return new Promise((resolve, reject) => {
            db.query(
                `DELETE FROM skills WHERE id = ?`,
                [skillId],
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

    deleteProject: (projectId) => {
        return new Promise((resolve, reject) => {
            db.query(
                `DELETE FROM projects WHERE id = ?`,
                [projectId],
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

    deleteCertification: (certificationId) => {
        return new Promise((resolve, reject) => {
            db.query(
                `DELETE FROM certifications WHERE id = ?`,
                [certificationId],
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

    deleteAchievement: (achievementId) => {
        return new Promise((resolve, reject) => {
            db.query(
                `DELETE FROM achievements WHERE id = ?`,
                [achievementId],
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

    deleteExtracurricularActivity: (activitiyId) => {
        return new Promise((resolve, reject) => {
            db.query(
                `DELETE FROM extracurricular_activities WHERE id = ?`,
                [activitiyId],
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

    deleteRefference: (refferenceId) => {
        return new Promise((resolve, reject) => {
            db.query(
                `DELETE FROM refference_info WHERE id = ?`,
                [refferenceId],
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

    deleteHobby: (hobbyId) => {
        return new Promise((resolve, reject) => {
            db.query(
                `DELETE FROM hobbies WHERE id = ?`,
                [hobbyId],
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

module.exports = cvDelete;