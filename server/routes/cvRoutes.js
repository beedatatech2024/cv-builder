const express = require('express');
const { protect, authorize } = require('../middlewares/authMiddleware');
const { addPersonalDetails, addEducationDetails, addExperienceDetails, addSkillsDetails, addProjectsDetails } = require('../controllers/cvController');

const router = express.Router();

router.post('/cv/personal/:userId', addPersonalDetails);
router.post('/cv/education/:userId', addEducationDetails);
router.post('/cv/experience/:userId', addExperienceDetails);
router.post('/cv/skills/:userId', addSkillsDetails);
router.post('/cv/projects/:userId', addProjectsDetails);




module.exports = router;