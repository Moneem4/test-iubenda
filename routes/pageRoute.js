const express = require("express");
const router = express.Router();
const {
    termsAndconditionsOfPage
} = require("../controllers/pageController");
//create team invitation : member wants to join Team
router.post('/termsAndconditionsOfPage', termsAndconditionsOfPage);
module.exports = router;