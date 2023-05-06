import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../style/Survey.scss";

export default function App({ answers, setAnswers }) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

 
  const onSubmit = async (data) => {
    let res = 0;
    for (let key in data) {
      if (data[key] === "Yes" || data[key] === "Strong") {
        res += 2;
      } else if (data[key] === "Not fully" || data[key] === "Average") {
        res++;
      }
    }

    setAnswers({
        industry: data.industry,
        location: data.location,
        staff: data.staff,
        currentStructure: data.current,
        bestStructure: data.best,
        q1: data.q1,
        q2: data.q2,
        q3: data.q3,
        q4: data.q4,
        q5: data.q5,
        q6: data.q6,
        q7: data.q7,
        q8: data.q8,
        q9: data.q9,
        q10: data.q10,
        comments: data.comment,
        result: res,
      })


    axios
      .post(
        "https://api.apispreadsheets.com/data/asdSmeB6gpVgUnql/",
        data
      )
    
    navigate("/answers");
  };

  return (
    <div className="backround">
      <div className="survey">
        <h2>Remote Management Readiness </h2>
        <br></br>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="industry">
            <label className="category">
              {" "}
              <h5>Company info</h5>
            </label>
            <hr></hr>

            <Form.Label>
              Please indicate the industry of your organization
            </Form.Label>
            <Form.Control
              type="text"
              {...register("industry", {
                required: "Please write your industry",
              })}
            />
            {errors.industry && (
              <p className="errorMsg">{errors.industry.message}</p>
            )}
          </Form.Group>
          <br></br>
          <Form.Group className="mb-3" controlId="location">
            <Form.Label>
              Please indicate the location of your organization
            </Form.Label>
            <Form.Control
              type="text"
              {...register("location", {
                required: "Please write the location",
              })}
            />
            {errors.location && (
              <p className="errorMsg">{errors.location.message}</p>
            )}
          </Form.Group>
          <br></br>
          <Form.Group className="mb-3" controlId="staff">
            <Form.Label>
              Please indicate the staff number of your organization
            </Form.Label>
            <Form.Check
              type="radio"
              label="1-5"
              value="1-5"
              {...register("staff", {
                required: "Please select your staff number",
              })}
            />
            <Form.Check
              type="radio"
              label="5-10"
              value="5-10"
              {...register("staff")}
            />
            <Form.Check
              type="radio"
              label="10-20"
              value="10-20"
              {...register("staff")}
            />
            <Form.Check
              type="radio"
              label="20+"
              value="20+"
              {...register("staff")}
            />
            {errors.staff && <p className="errorMsg">{errors.staff.message}</p>}
          </Form.Group>
          <br></br>
          <Form.Group className="mb-3" controlId="current">
            <Form.Label>
              What is the current type of team structure of your company?
            </Form.Label>
            <Form.Check
              type="radio"
              label="Physical / No remote"
              value="Physical / No remote"
              {...register("current", {
                required: "Please select your current structure",
              })}
            />
            <Form.Check
              type="radio"
              label="Hybrid"
              value="Hybrid"
              {...register("current")}
            />
            <Form.Check
              type="radio"
              label="Remote allowed"
              value="Remote allowed"
              {...register("current")}
            />
            <Form.Check
              type="radio"
              label="Remote first"
              value="Remote first"
              {...register("current")}
            />
            <Form.Check
              type="radio"
              label="Remote only"
              value="Remote only"
              {...register("current")}
            />
            {errors.current && (
              <p className="errorMsg">{errors.current.message}</p>
            )}
          </Form.Group>
          <br></br>
          <Form.Group className="mb-3" controlId="best">
            <Form.Label>
              What type of team structure do you believe would be best for your
              company?
            </Form.Label>
            <Form.Check
              type="radio"
              label="Physical / No remote"
              value="Physical / No remote"
              {...register("best", {
                required: "Please select what you believe is the best",
              })}
            />
            <Form.Check
              type="radio"
              label="Hybrid"
              value="Hybrid"
              {...register("best")}
            />
            <Form.Check
              type="radio"
              label="Remote allowed"
              value="Remote allowed"
              {...register("best")}
            />
            <Form.Check
              type="radio"
              label="Remote first"
              value="Remote first"
              {...register("best")}
            />
            <Form.Check
              type="radio"
              label="Remote only"
              value="Remote only"
              {...register("best")}
            />
            {errors.best && <p className="errorMsg">{errors.best.message}</p>}
          </Form.Group>
          <br></br>
          <label className="category">
            {" "}
            <h5>
              How would you characterize your organization in terms of its
              Cultural Readiness for Remote Work?
            </h5>
          </label>
          <hr></hr>
          <Form.Group className="mb-3" controlId="q1">
            <Form.Label>
              Transparency of management/ownership with their team
            </Form.Label>
            <Form.Check
              type="radio"
              label="Weak"
              value="Weak"
              {...register("q1", {
                required: "Please select your answer",
              })}
            />
            <Form.Check
              type="radio"
              label="Average"
              value="Average"
              {...register("q1")}
            />
            <Form.Check
              type="radio"
              label="Strong"
              value="Strong"
              {...register("q1")}
            />

            {errors.q1 && <p className="errorMsg">{errors.q1.message}</p>}
          </Form.Group>
          <br></br>
          <Form.Group className="mb-3" controlId="q2">
            <Form.Label>Environment of Trust</Form.Label>
            <Form.Check
              type="radio"
              label="Weak"
              value="Weak"
              {...register("q2", {
                required: "Please select your answer",
              })}
            />
            <Form.Check
              type="radio"
              label="Average"
              value="Average"
              {...register("q2")}
            />
            <Form.Check
              type="radio"
              label="Strong"
              value="Strong"
              {...register("q2")}
            />

            {errors.q2 && <p className="errorMsg">{errors.q2.message}</p>}
          </Form.Group>
          <br></br>
          <Form.Group className="mb-3" controlId="q3">
            <Form.Label>
              Transparency in communication and documentation
            </Form.Label>
            <Form.Check
              type="radio"
              label="Weak"
              value="Weak"
              {...register("q3", {
                required: "Please select your answer",
              })}
            />
            <Form.Check
              type="radio"
              label="Average"
              value="Average"
              {...register("q3")}
            />
            <Form.Check
              type="radio"
              label="Strong"
              value="Strong"
              {...register("q3")}
            />

            {errors.q3 && <p className="errorMsg">{errors.q3.message}</p>}
          </Form.Group>
          <br></br>
          <Form.Group className="mb-3" controlId="q4">
            <Form.Label>
              Willingness of Management/ownership to gather feedback from the
              remote workers regarding their needs{" "}
            </Form.Label>
            <Form.Check
              type="radio"
              label="Weak"
              value="Weak"
              {...register("q4", {
                required: "Please select your answer",
              })}
            />
            <Form.Check
              type="radio"
              label="Average"
              value="Average"
              {...register("q4")}
            />
            <Form.Check
              type="radio"
              label="Strong"
              value="Strong"
              {...register("q4")}
            />

            {errors.q4 && <p className="errorMsg">{errors.q4.message}</p>}
          </Form.Group>
          <br></br>
          <Form.Group className="mb-3" controlId="q5">
            <Form.Label>Documentation of company processes</Form.Label>
            <Form.Check
              type="radio"
              label="Weak"
              value="Weak"
              {...register("q5", {
                required: "Please select your answer",
              })}
            />
            <Form.Check
              type="radio"
              label="Average"
              value="Average"
              {...register("q5")}
            />
            <Form.Check
              type="radio"
              label="Strong"
              value="Strong"
              {...register("q5")}
            />
            {errors.q5 && <p className="errorMsg">{errors.q5.message}</p>}
          </Form.Group>
          <br></br>
          <label className="category">
            {" "}
            <h5>
              How would you characterize your organization in terms of its
              Technical Readiness for Remote Work?
            </h5>
          </label>
          <hr></hr>
          <Form.Group className="mb-3" controlId="q6">
            <Form.Label>Digital communication tools</Form.Label>
            <Form.Check
              type="radio"
              label="Weak"
              value="Weak"
              {...register("q6", {
                required: "Please select your answer",
              })}
            />
            <Form.Check
              type="radio"
              label="Average"
              value="Average"
              {...register("q6")}
            />
            <Form.Check
              type="radio"
              label="Strong"
              value="Strong"
              {...register("q6")}
            />

            {errors.q6 && <p className="errorMsg">{errors.q6.message}</p>}
          </Form.Group>
          <br></br>
          <Form.Group className="mb-3" controlId="q7">
            <Form.Label>
              Secure access of sensitive information (e.g. VPN)
            </Form.Label>
            <Form.Check
              type="radio"
              label="Weak"
              value="Weak"
              {...register("q7", {
                required: "Please select your answer",
              })}
            />
            <Form.Check
              type="radio"
              label="Average"
              value="Average"
              {...register("q7")}
            />
            <Form.Check
              type="radio"
              label="Strong"
              value="Strong"
              {...register("q7")}
            />

            {errors.q7 && <p className="errorMsg">{errors.q7.message}</p>}
          </Form.Group>
          <br></br>
          <Form.Group className="mb-3" controlId="q8">
            <Form.Label>
              Remote IT infrastructure to enable remote work (IT
              protocols/tools/laptops)
            </Form.Label>
            <Form.Check
              type="radio"
              label="Weak"
              value="Weak"
              {...register("q8", {
                required: "Please select your answer",
              })}
            />
            <Form.Check
              type="radio"
              label="Average"
              value="Average"
              {...register("q8")}
            />
            <Form.Check
              type="radio"
              label="Strong"
              value="Strong"
              {...register("q8")}
            />

            {errors.q8 && <p className="errorMsg">{errors.q8.message}</p>}
          </Form.Group>
          <br></br>
          <Form.Group className="mb-3" controlId="q9">
            <label className="category">
              {" "}
              <h5>Existing Practices</h5>
            </label>
            <hr></hr>
            <Form.Label>
              Have you created documented procedures about remote working in
              your company?
            </Form.Label>
            <Form.Check
              type="radio"
              label="No"
              value="No"
              {...register("q9", {
                required: "Please select your answer",
              })}
            />
            <Form.Check
              type="radio"
              label="Not fully"
              value="Not fully"
              {...register("q9")}
            />
            <Form.Check
              type="radio"
              label="Yes"
              value="Yes"
              {...register("q9")}
            />

            {errors.q9 && <p className="errorMsg">{errors.q9.message}</p>}
          </Form.Group>
          <br></br>
          <Form.Group className="mb-3" controlId="q10">
            <Form.Label>
              Do you use any project management platforms for remote working in
              your company?
            </Form.Label>
            <Form.Check
              type="radio"
              label="No"
              value="No"
              {...register("q10", {
                required: "Please select your answer",
              })}
            />
            <Form.Check
              type="radio"
              label="Not fully"
              value="Not fully"
              {...register("q10")}
            />
            <Form.Check
              type="radio"
              label="Yes"
              value="Yes"
              {...register("q10")}
            />

            {errors.q10 && <p className="errorMsg">{errors.q10.message}</p>}
          </Form.Group>
          <br></br>
          <Form.Group className="mb-3" controlId="comment">
            <Form.Label>
              How would you equip and educate your team members?
            </Form.Label>
            <Form.Control
              type="text"
              {...register("comment", {
                required: "Please write your comment",
              })}
            />
            {errors.comment && (
              <p className="errorMsg">{errors.comment.message}</p>
            )}
          </Form.Group>
          <br></br>
          <p>
            1. The European Commission support for the production of this
            publication does not constitute an endorsement of the contents which
            reflects the views only of the authors, and the Commission cannot be
            held responsible for any use which may be made of the information
            contained therein.
          </p>
          <input
            type="checkbox"
            name="agreementEU"
            className="agreement"
            required
          />{" "}
          <span className="terms">I accept the terms 1 </span>
          <br></br> <br></br>
          <p>
            2. The survey will be used by ReMa Team in whichever way they want.
          </p>
          <input
            type="checkbox"
            name="agreementReMa"
            className="agreement"
            required
          />{" "}
          <span className="terms">I accept the terms 2 </span>
          <br></br>
          <br></br>
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
