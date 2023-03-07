const surveyController = require("../controllers/surveyController");

const router = require("express").Router();

router.post("/", surveyController.addSurvey);
router.post("/get", surveyController.getSurvey);
router.delete("/:id", surveyController.deleteSurvey);
module.exports = router;
