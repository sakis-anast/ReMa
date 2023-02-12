import {  useNavigate } from "react-router-dom";
import React , {useState , useEffect} from "react";

function Answers({loggedIn}) {
  const navigate = useNavigate();
  useEffect(() => {
    if(!loggedIn){
      navigate("/");
    }
  },[]);
    return (
      <>
        <div>
       Answers
        </div>
      </>
    );
  }
  
  export default Answers;