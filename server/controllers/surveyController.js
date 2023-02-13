const Survey = require("../modules/surveyModule");

const getSurvey = async (req, res) => {
  try{
  let survey = await Survey.find({ owner: req.body.owner });
  if (survey){
  res.send(survey);}
}catch{
  res.send({message : "no survey"})
}

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
