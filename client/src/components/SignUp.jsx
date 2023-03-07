import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import "../style/Log.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function SignUp({ loggedIn }) {
  const navigate = useNavigate();
  const [verify, setVerify] = useState(false);
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const [type2, setType2] = useState("password");
  const [icon2, setIcon2] = useState(eyeOff);
  const login = require("../logos/login.PNG");
  const toastOptions = {
    position: "top-right",
    autoClose: 1000,
    theme: "light",
    pauseOnHover: true,
    draggable: true,
  };
  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  }, [loggedIn]);
  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };
  const handleToggle2 = () => {
    if (type2 === "password") {
      setIcon2(eye);
      setType2("text");
    } else {
      setIcon2(eyeOff);
      setType2("password");
    }
  };

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

    const { username, email, password, confirmPassword } = values;
    if (confirmPassword === password) {
      await axios
        .post("http://localhost:3636/user/signup", {
          username,
          email,
          password,
        })
        .then(({ data }) => {
          if (data.message === "New User Created") {
            navigate("/login");
          } else {
            toast.error(data.message, toastOptions);
          }
        });
    } else {
      toast.error("Passwords don't match", toastOptions);
    }
  };
  //recaptcha function
  function onChange(value) {
    setVerify(true);
  }

  return (
    <>
      <div className="log">
        <div>
          <img src={login} alt="" />
        </div>
        <div className="signup-form-container">
          <form
            action=""
            className="signup-form-field"
            onSubmit={(e) => submitHandler(e)}
          >
            <div className="signup-form-div">
              <h1 className="signup-form-header">SignUp</h1>
            </div>
            <div className="signup-inputs-container">
              <label>Username</label>
              <input
                type="text"
                name="username"
                onChange={(e) => changeHandler(e)}
                required
              />
              <label>Email</label>
              <input
                type="email"
                name="email"
                onChange={(e) => changeHandler(e)}
                required
              />

              <div className="eye">
                <label>Password</label>
                <input
                  type={type}
                  name="password"
                  onChange={(e) => changeHandler(e)}
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                  required
                />

                <span onClick={handleToggle}>
                  <Icon icon={icon} size={25} />
                </span>
              </div>
              <div className="eye">
                <label> Confirm Password</label>

                <input
                  type={type2}
                  name="confirmPassword"
                  onChange={(e) => changeHandler(e)}
                  required
                />

                <span onClick={handleToggle2}>
                  <Icon icon={icon2} size={25} />
                </span>
              </div>
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={onChange}
                className="reCaptcha"
              />

              <button disabled={!verify} className="conf">
                Create User
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
export default SignUp;
