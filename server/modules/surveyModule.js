const mongoose = require("mongoose");

const SurveySchema = new mongoose.Schema(
  {  
    industry : String,
    location :String,
    size :String,
    currentStructure: String,
    bestStructure: String,
    q1: String,
    q2: String,
    q3: String,
    q4: String,
    q5: String,
    q6: String,
    q7: String,
    q8: String,
    q9: String,
    q10: String,
    comments : String,
    result: String,
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    date:  String  
    ,
  },
  
  
  
  
);

const Survey = mongoose.model("Survey", SurveySchema);

module.exports = Survey;
