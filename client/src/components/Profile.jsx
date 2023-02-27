import {  useNavigate } from "react-router-dom";
import React , {useState , useEffect} from "react";
function Profile({loggedIn , user}) {
  const navigate = useNavigate();
  useEffect(() => {
    if(!loggedIn){
      navigate("/");
    }
  },[]);
    return (
      <>
            <div>
       Name : {user.username}
        </div>
        <div>
          Email: {user.email}
        </div>
        <button>delete profile</button>
      </>
    );
  }
  
  export default Profile;