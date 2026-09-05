const express = require("express")
const { addStundent, getStudents } = require('../controllers/studentController.js')

const router = express.Router()

router.post("/add-student", addStundent);
router.get("/", getStudents);

module.exports = router;