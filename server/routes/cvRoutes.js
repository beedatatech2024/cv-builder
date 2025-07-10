const express = require('express');
const { protect, authorize } = require('../middlewares/authMiddleware');
const {getCVDetails, getCVProgress} = require('../controllers/cvGetController');
const { addPersonalDetails, addEducationDetails, addExperienceDetails, addSkillsDetails, addProjectsDetails, addCertificationDetails, addAchievementDetails, addExtracurricularActivitiesDetails, addHobbiesDetails, addRefferencesInfoDetails } = require('../controllers/cvPostController');

const router = express.Router();

// POST REQUESTS
router.post('/cv/personal/:userId', addPersonalDetails);
router.post('/cv/education/:userId', addEducationDetails);
router.post('/cv/experience/:userId', addExperienceDetails);
router.post('/cv/skills/:userId', addSkillsDetails);
router.post('/cv/projects/:userId', addProjectsDetails);
router.post('/cv/certifications/:userId', addCertificationDetails);
router.post('/cv/achievements/:userId', addAchievementDetails);
router.post('/cv/activities/:userId', addExtracurricularActivitiesDetails);
router.post('/cv/references/:userId', addRefferencesInfoDetails);
router.post('/cv/hobbies/:userId', addHobbiesDetails);

//GET REQUESTS
router.get('/cv/:userId', getCVDetails);
router.get('/cv/progress/:userId', protect, getCVProgress);




module.exports = router;