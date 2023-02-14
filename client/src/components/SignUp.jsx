import { useState , useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
function SignUp({loggedIn}) {
  const navigate = useNavigate();
  const [verify, setVerify] = useState(false);
  const [type, setType]=useState('password');
  const [icon, setIcon]=useState(eyeOff);
  const [type2, setType2]=useState('password');
  const [icon2, setIcon2]=useState(eyeOff);
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
  const handleToggle2=()=>{    
    if(type2==='password'){
      setIcon2(eye);      
      setType2('text');
    }
    else{
      setIcon2(eyeOff);     
      setType2('password');
    }
  }

  //user input values
  let [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //handel input change
  const changeHandler = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

// create new account
  const submitHandler = async (event) => {
    event.preventDefault();
    
      const { username, email, password ,confirmPassword } = values;
      if (confirmPassword===password){
      await axios
        .post("http://localhost:3636/user/signup", {
          username,
          email,
          password,
        })
        .then(({ data }) => {
          if (data.message === "New User Created") {
            navigate("/login");
            alert(data.message)
          } else {
            alert(data.message);
          }
        });  }
        else {
          alert("passwords don't match")
        }
  };
//recaptcha function
function onChange(value) {
  setVerify(true);
}
// let recaptchaInstance;
// useEffect(() => {
//   recaptchaInstance.reset();
// },[]);
// create a reset function

  return (
    <>
   
      <div className="signup-form-container">
        <form
          action=""
          className="signup-form-field"
          onSubmit={(e) => submitHandler(e)}
        >
          <div className="signup-form-div">
            <h1 className="signup-form-header">Sign up</h1>
          </div>
          <div className="signup-inputs-container">
            <input
              type="text"
              placeholder="username"
              name="username"
              onChange={(e) => changeHandler(e)}
              required
            />
            <input
              type="email"
              placeholder="email"
              name="email"
              onChange={(e) => changeHandler(e)}
              required
            />
         
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
            <div className="eye">
            <input
          type={type2}
          placeholder="confirm password"
              name="confirmPassword"
              onChange={(e) => changeHandler(e)}
              required
            />
           
        <span onClick={handleToggle2}><Icon icon={icon2} size={25}/></span>
            </div>
                <ReCAPTCHA
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          onChange={onChange}
        />
            <button disabled={!verify}>Create User</button>
            {/* <span>
              I already have an account? <Link to="/login"> Login</Link>
            </span> */}
          </div>
        </form>
      </div>
    </>
  );
}
export default SignUp;
