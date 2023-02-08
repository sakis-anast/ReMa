const mongoose = require("mongoose");

const SurveySchema = new mongoose.Schema(
  {  
    industry : String,
    location :String,
    size :String,
    currentStructure: String,
    bestStructure: String,
    Q1: String,
    Q2: String,
    Q3: String,
    Q4: String,
    Q5: String,
    Q6: String,
    Q7: String,
    Q8: String,
    Q9: String,
    Q10: String,
    comments : String,
    Result: String,
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Survey = mongoose.model("Survey", SurveySchema);

module.exports = Survey;
