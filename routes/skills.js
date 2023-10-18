var express = require('express');
var router = express.Router();
var skillsCtrl = require("../Controllers/skills")

// Get / skills
router.get("/", skillsCtrl.index)
    

// Get / skills/:id
router.get("/:id", skillsCtrl.show)

module.exports = router;