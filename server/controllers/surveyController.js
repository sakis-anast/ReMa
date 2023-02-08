const Survey = require("../modules/surveyModule");

const getSurvey = async (req, res) => {
  let survey = await Survey.find({ owner: req.body.owner });
  res.send(survey);
};
const addSurvey = async (req, res) => {
  let newSurvey = new Survey(
    req.body
  );
  await newSurvey.save();
  res.send({ newSurvey });
};
const deleteSurvey = async (req, res) => {
  await Survey.findOneAndDelete({ _id: req.params.id });
  res.send({ message: "Survey Deleted" });
};

module.exports = {
  addSurvey,
  getSurvey,
  deleteSurvey,
};
