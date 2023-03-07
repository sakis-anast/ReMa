import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import RemoteOnly from "./RemoteOnly";
import RemoteFirst from "./RemoteFirst";
import RemoteAllowed from "./RemoteAllowed";
import Hybrid from "./Hybrid";
import Physical from "./Physical";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import LoadingSpinner from "./LoadingSpinner";
import "../style/Answers.scss";

function Answers({ loggedIn, answers, user, setAnswers, loading, setLoading }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!loggedIn) {
      navigate("/");
    } else {
      getAnswers();
    }
  }, []);

  async function getAnswers() {
    setLoading(true);
    await axios
      .post("http://localhost:3636/survey/get", { owner: user._id })
      .then(({ data }) => {
        setAnswers(data);
        setLoading(false);
      });
  }
  async function remove(id) {
    await axios.delete("http://localhost:3636/survey/" + id);
    getAnswers();
  }
  const useToggle = (initialState = false) => {
    const [state, setState] = useState(initialState);
    const toggle = useCallback(() => setState((state) => !state), []);
    return [state, toggle];
  };

  const [toggle, setToggle] = useToggle();

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="background-answers">
          {answers.length ? (
            <div className="dis-ans">
              <button onClick={setToggle}>
                {!toggle ? "Show answers" : "Hide answers"}
              </button>
            </div>
          ) : (
            <div className="no-answers">
              <h1>No answered survey yet</h1>{" "}
            </div>
          )}
          <div className={!toggle ? "grid-answers" : "grid-answers display"}>
            {answers &&
              answers.map((answer) => {
                return (
                  <div className="answers" key={answer._id}>
                    <h5>Created At: {answer.date}</h5>
                    <br></br>

                    {toggle && (
                      <div>
                        <h5>Company info</h5>
                        <div>
                          Industry of the organization : {answer.industry}
                        </div>
                        <div>
                          Location of the organization : {answer.location}
                        </div>
                        <div>
                          Staff number of the organization : {answer.size}
                        </div>
                        <div>Current structure: {answer.currentStructure}</div>
                        <div>Optimal structure : {answer.bestStructure}</div>
                        <h5>
                          How would you characterize your organization in terms
                          of its Cultural Readiness for Remote Work?
                        </h5>
                        <div>
                          Transparency of management/ownership with their team:{" "}
                          {answer.q1}
                        </div>
                        <div>Environment of Trust: {answer.q2}</div>
                        <div>
                          Transparency in communication and documentation:{" "}
                          {answer.q3}
                        </div>
                        <div>
                          Willingness of Management/ownership to gather feedback
                          from the remote workers regarding their needs :{" "}
                          {answer.q4}
                        </div>
                        <div>
                          Documentation of company processes: {answer.q5}
                        </div>
                        <h5>
                          How would you characterize your organization in terms
                          of its Technical Readiness for Remote Work?
                        </h5>
                        <div>Digital communication tools : {answer.q6}</div>
                        <div>
                          Secure access of sensitive information (e.g. VPN) :{" "}
                          {answer.q7}
                        </div>
                        <div>
                          Remote IT infrastructure to enable remote work (IT
                          protocols/tools/laptops) : {answer.q8}
                        </div>
                        <h5>Existing Practices</h5>
                        <div>
                          Have you created documented procedures about remote
                          working in your company? : {answer.q9}
                        </div>
                        <div>
                          Do you use any project management platforms for remote
                          working in your company? : {answer.q10}
                        </div>
                        <div>
                          How would you equip and educate your team members?:{" "}
                          {answer.comments}
                        </div>
                      </div>
                    )}

                    <div>
                      <div className="hid2">
                        {answer.result > 16 && <RemoteOnly />}
                        {answer.result > 12 && answer.result <= 16 && (
                          <RemoteFirst />
                        )}
                        {answer.result > 8 && answer.result <= 12 && (
                          <RemoteAllowed />
                        )}
                        {answer.result > 4 && answer.result <= 8 && <Hybrid />}
                        {answer.result <= 4 && <Physical />}
                      </div>
                    </div>
                    <a
                      onClick={() => {
                        remove(answer._id);
                      }}
                    >
                      {" "}
                      Delete answers{" "}
                      <FontAwesomeIcon className="trash" icon={faTrash} />
                    </a>
                    <hr></hr>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
}

export default Answers;
