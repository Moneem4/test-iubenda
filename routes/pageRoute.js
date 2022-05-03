const express = require("express");
const router = express.Router();
const {
    termsAndconditionsPage
} = require("../controllers/pageController");
//create team invitation : member wants to join Team
router.post('/terms&conditions', termsAndconditionsPage);
module.exports = router;