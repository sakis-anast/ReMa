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

function Answers({  answers }) {



  return (
    <>
    
                {answers.empty !== true  ?
        <div className="background-answers">

          
          <div className= "grid-answers display">
           
                  <div className="answers" >
                      <div>
                        <h5>Company info</h5>
                        <div>
                          Industry of the organization : {answers.industry}
                        </div>
                        <div>
                          Location of the organization : {answers.location}
                        </div>
                        <div>
                          Staff number of the organization : {answers.size}
                        </div>
                        <div>Current structure: {answers.currentStructure}</div>
                        <div>Optimal structure : {answers.bestStructure}</div>
                        <br></br>
                        <h5>
                          How would you characterize your organization in terms
                          of its Cultural Readiness for Remote Work?
                        </h5>
                        <div>
                          Transparency of management/ownership with their team:{" "}
                          {answers.q1}
                        </div>
                        <div>Environment of Trust: {answers.q2}</div>
                        <div>
                          Transparency in communication and documentation:{" "}
                          {answers.q3}
                        </div>
                        <div>
                          Willingness of Management/ownership to gather feedback
                          from the remote workers regarding their needs :{" "}
                          {answers.q4}
                        </div>
                        <div>
                          Documentation of company processes: {answers.q5}
                        </div>
                        <br></br>
                        <h5>
                          How would you characterize your organization in terms
                          of its Technical Readiness for Remote Work?
                        </h5>
                        <div>Digital communication tools : {answers.q6}</div>
                        <div>
                          Secure access of sensitive information (e.g. VPN) :{" "}
                          {answers.q7}
                        </div>
                        <div>
                          Remote IT infrastructure to enable remote work (IT
                          protocols/tools/laptops) : {answers.q8}
                        </div>
                        <br></br>
                        <h5>Existing Practices</h5>
                        <div>
                          Have you created documented procedures about remote
                          working in your company? : {answers.q9}
                        </div>
                        <div>
                          Do you use any project management platforms for remote
                          working in your company? : {answers.q10}
                        </div>
                        <div>
                          How would you equip and educate your team members?:{" "}
                          {answers.comments}
                        </div>
                      </div>

                    <div>
                      <div className="hid2">
                        {answers.result > 16 && <RemoteOnly />}
                        {answers.result > 12 && answers.result <= 16 && (
                          <RemoteFirst />
                        )}
                        {answers.result > 8 && answers.result <= 12 && (
                          <RemoteAllowed />
                        )}
                        {answers.result > 4 && answers.result <= 8 && <Hybrid />}
                        {answers.result <= 4 && <Physical />}
                      </div>
                    </div>
                    <hr></hr>
                  </div>
                  </div>
                  </div> : 
        <div className="no-answers">
        <h1>No answered survey yet</h1>{" "}
      </div>}
     
       
      
   
    </>
  );
}

export default Answers;
