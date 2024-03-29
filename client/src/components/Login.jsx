import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import "../style/Log.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login({ setLoggedIn, setLoading, loggedIn }) {
  const navigate = useNavigate();
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eye);
  const login = require("../logos/login.PNG");
  const [email, setEmail] = useState(false);
  const [activeEmail, setActiveEmail] = useState("choice");
  const [activeUsername, setaActiveUsername] = useState("choice active");

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
      setIcon(eyeOff);
      setType("text");
    } else {
      setIcon(eye);
      setType("password");
    }
  };
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
    if (!email) {
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
            toast.error(data.message, toastOptions);
            Array.from(event.target).forEach((e) => (e.value = ""));
          }
        });
    } else {
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
            toast.error(data.message, toastOptions);
            Array.from(event.target).forEach((e) => (e.value = ""));
          }
        });
    }
  };

  function changeToEmail() {
    setEmail(true);
    setaActiveUsername("choice");
    setActiveEmail("choice active");
  }
  function changeToUsername() {
    setEmail(false);
    setActiveEmail("choice");
    setaActiveUsername("choice active");
  }

  return (
    <>
      <div className="log">
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
              <div className="pick">
                {" "}
                <span className={activeUsername} onClick={changeToUsername}>
                  User
                </span>{" "}
                <span className={activeEmail} onClick={changeToEmail}>
                  {" "}
                  Email
                </span>{" "}
              </div>
            </div>
            <div className="login-inputs-container">
              {!email ? (
                <>
                  <label>Username</label>
                  <input
                    type="text"
                    name="username"
                    className="inputs"
                    onChange={(e) => changeHandler(e)}
                    required
                  />
                </>
              ) : (
                <>
                  <label>Email</label>
                  <input
                    type="text"
                    className="inputs"
                    name="email"
                    onChange={(e) => changeHandler(e)}
                    required
                  />{" "}
                </>
              )}

              <div className="eye">
                <label>Password</label>
                <input
                  type={type}
                  className="inputs"
                  name="password"
                  onChange={(e) => changeHandler(e)}
                  required
                />

                <span onClick={handleToggle}>
                  <Icon icon={icon} size={25} />
                </span>
              </div>

              <button className="conf">Login</button>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default Login;
