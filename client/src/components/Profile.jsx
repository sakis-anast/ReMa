import {  useNavigate } from "react-router-dom";
import React , {useState , useEffect} from "react";

function Profile({loggedIn}) {
  const navigate = useNavigate();
  useEffect(() => {
    if(!loggedIn){
      navigate("/");
    }
  },[]);
    return (
      <>
        <div>
       Profile
        </div>
      </>
    );
  }
  
  export default Profile;