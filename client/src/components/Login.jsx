import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import "../style/Log.scss"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
function Login({setLoggedIn, setLoading , loggedIn}) {
  const navigate = useNavigate();
  const [type, setType]=useState('password');
  const [icon, setIcon]=useState(eyeOff);
  const login = require("../logos/login.PNG");
const [email , setEmail] = useState(false)
const [activeEmail , setActiveEmail] = useState("choice")
const [activeUsername , setaActiveUsername] = useState("choice active")

const toastOptions = {
  position: "top-right",
  autoClose: 1000,
  theme: "light",
  pauseOnHover: true,
  draggable: true,
};
useEffect(() => {
  if(loggedIn){
    navigate("/");
  }
},[loggedIn]);
  const handleToggle=()=>{    
    if(type==='password'){
      setIcon(eye);      
      setType('text');
    }
    else{
      setIcon(eyeOff);     
      setType('password');
    }
  }
  //user input values
  let [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  //handel input change
  const changeHandler = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };


//authenticate the user and passing his data to the local storage
  const submitHandler = async (event) => {
    event.preventDefault();
    if(!email){
      const { username, password } = values;
      await axios
      .post("http://localhost:3636/user/login", {
        username,
        password,
      })
      .then(({ data }) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          navigate("/");
          setLoggedIn(true);
        } else {
          toast.error(data.message , toastOptions)
          Array.from(event.target).forEach((e) => (e.value = ""));

         }
      });}
      else{
        const { email, password } = values;
        await axios
        .post("http://localhost:3636/user/login/email", {
          email,
          password,
        })
        .then(({ data }) => {
          if (data.token) {
            localStorage.setItem("token", data.token);
            navigate("/");
            setLoggedIn(true);
          } else {
            toast.error(data.message , toastOptions)
           Array.from(event.target).forEach((e) => (e.value = ""));

          }
        });}
      
  };

  function changeToEmail(){
    setEmail(true)
    setaActiveUsername("choice")
    setActiveEmail("choice active")
  }
  function changeToUsername(){
    setEmail(false)
    setActiveEmail("choice")
    setaActiveUsername("choice active")

  }
  

    
  return (
    <>
    <div className="log" >
    <div>
      <img src={login} alt="" />
    </div>
      <div className="login-form-container">
        <form
          action=""
          className="login-form-field"
          onSubmit={(e) => submitHandler(e)}
        >
          <div className="login-form-div">
            <h1 className="login-form-header">Login</h1>
            <div className="pick"> <span className= {activeUsername} onClick={changeToUsername} >User</span> <span className= {activeEmail} onClick={changeToEmail} > Email</span> </div>
          </div>
          <div className="login-inputs-container">
            {!email ? <>
              <label>Username</label>
            <input
              type="text"
              placeholder="user"
              name="username"
              className="inputs"
              onChange={(e) => changeHandler(e)}
              required
            /></> :<>
            <label>Email</label>
            <input
            type="text"
            placeholder="email"
            className="inputs"
            name="email"
            onChange={(e) => changeHandler(e)}
            required
          /> </> }
           
            <div className="eye">
            <label>Password</label>
            <input
          type={type}
          placeholder={<Icon icon={icon} size={25}/>}
          className="inputs"
              name="password"
              onChange={(e) => changeHandler(e)}
              required
            />
           
        <span onClick={handleToggle}><Icon icon={icon} size={25}/></span>
            </div>
           
            <button className="conf">Login</button>
           
          </div>
        </form>
      </div>
      <ToastContainer/>
      </div>
       <div className="contact">
      <div className="q-cont"><img src={login} alt="question-illustration" /></div>
    <StyledContactForm id="contact">
      <form onSubmit={(e) => submitHandler(e)}>
        <label> <span className= {activeUsername} onClick={changeToUsername} >User</span> <span className= {activeEmail} onClick={changeToEmail} > Email</span></label>
        {!email ? 
            <input
              type="text"
              placeholder="user"
              name="username"
              className="inputs"
              onChange={(e) => changeHandler(e)}
              required
            /> : <input
            type="text"
            placeholder="email"
            className="inputs"
            name="email"
            onChange={(e) => changeHandler(e)}
            required
          />}
        <label>Password</label>
        <div className="eye">
        <input
          type={type}
              name="password"
              onChange={(e) => changeHandler(e)}
              required
            />
                    <span onClick={handleToggle}><Icon icon={icon} size={25}/></span>
                    </div>
                   
            <button className="conf">Login</button>

      </form>
    </StyledContactForm>
    </div>
    </>
  );
}

export default Login;
const StyledContactForm = styled.div`
  width: 400px;
  margin-left:  auto;
  margin-right: auto;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 400px;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    button {
      margin-top: 2rem;
      cursor: pointer;
      background: #37517e;
      color: white;
      border: none;
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
    }
  }
`