const db = require('../config/db');
const bcrypt = require('bcryptjs');

const User = { 
    createUser: async (name, email, password) => {
        const hashedPassword = await bcrypt.hash(password, 10);

        return new Promise((resolve, reject) => {
            db.query(
                `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`,
                [name, email, hashedPassword],
                (err, result) => {
                    if (err) reject(err);
                    resolve(result);
                }
            );
        });
    },

    findByEmail: (email) => {
        return new Promise((resolve, reject) => {
            db.query(
                `SELECT * FROM USERS WHERE email = ?`, 
                [email], 
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

    findEmailById: (userId) => {
        return new Promise((resolve, reject) => {
            db.query(
                `SELECT email FROM users WHERE id = ?`, 
                [userId], 
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else if (result.length === 0) {
                        resolve(null);
                    } else {
                        resolve(result[0].email);
                    }
                }
            );
        });
    },

    findById: (userId) => {
        return new Promise((resolve, reject) => {
            db.query(
                `SELECT * FROM users
                 WHERE id = ?`, 
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
    
    updateUserPassword: (email, newPassword) => {
        const hashedPassword = bcrypt.hashSync(newPassword, 10);
        return new Promise((resolve, reject) => {
            db.query(
                `UPDATE users SET password = ? WHERE email = ?`,
                [hashedPassword, email],
                (err, result) => {
                    if (err) reject(err);
                    resolve(result);
                }
            );
        });
    },
    findAllUsers: () => {
        return new Promise((resolve, reject) => {
            db.query(
                `SELECT users.*, roles.name as role FROM users 
                 JOIN roles ON users.role_id = roles.id`, 
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else if (result.length === 0) {
                        resolve(null);
                    } else {
                        resolve(result);
                    }
                }
            );
        });
    },

};

module.exports = User;
