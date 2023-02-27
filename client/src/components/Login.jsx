import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import "../style/Log.scss"
function Login({setLoggedIn, setLoading }) {
  const navigate = useNavigate();
  const [type, setType]=useState('password');
  const [icon, setIcon]=useState(eyeOff);
  const login = require("../logos/login.PNG");
const [email , setEmail] = useState(false)
const [activeEmail , setActiveEmail] = useState("choice")
const [activeUsername , setaActiveUsername] = useState("choice active")

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
        console.log(data);
        if (data.token) {
          localStorage.setItem("token", data.token);
          navigate("/");
          setLoggedIn(true);
        } else {
         alert(data.message)
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
          console.log(data);
          if (data.token) {
            localStorage.setItem("token", data.token);
            navigate("/");
            setLoggedIn(true);
          } else {
           alert(data.message)
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
            {!email ? 
            <input
              type="text"
              placeholder="user"
              name="username"
              onChange={(e) => changeHandler(e)}
              required
            /> : <input
            type="text"
            placeholder="email"
            name="email"
            onChange={(e) => changeHandler(e)}
            required
          />}
           
            <div className="eye">
            <input
          type={type}
          placeholder="password"
              name="password"
              onChange={(e) => changeHandler(e)}
              required
            />
           
        <span onClick={handleToggle}><Icon icon={icon} size={25}/></span>
            </div>
           
            <button className="conf">Login</button>
            {/* <span>
             I don't have an account ?<Link to="/signup"> Signup</Link>
            </span> */}
          </div>
        </form>
      </div>
      </div>
    </>
  );
}

export default Login;
