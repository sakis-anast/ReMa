import { useState , useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
function SignUp({loggedIn}) {
  const navigate = useNavigate();
  const [verify, setVerify] = useState(false);


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

// create new account
  const submitHandler = async (event) => {
    event.preventDefault();
      const { username, email, password } = values;
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
        });  
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
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={(e) => changeHandler(e)}
              required
            />
                <ReCAPTCHA
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          onChange={onChange}
        />
            <button disabled={!verify}>Create User</button>
            <span>
              I already have an account? <Link to="/login"> Login</Link>
            </span>
          </div>
        </form>
      </div>
    </>
  );
}
export default SignUp;
