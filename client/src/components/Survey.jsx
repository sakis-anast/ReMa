import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Survey() {
  const navigate = useNavigate();

  //user input values
  let [values, setValues] = useState({
    username: "",
    password: "",
  });

  //handel input change
  const changeHandler = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

// if the user already log in go to the chat area 
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/chat");
    }
  }, );
//authenticate the user and passing his data to the local storage
  const submitHandler = async (event) => {
    event.preventDefault();
      const { username, password } = values;
      await axios
        .post("http://localhost:3001/users/login", { username, password })
        .then(({ data }) => {
          if (data.message === true) {
            localStorage.setItem("user", JSON.stringify(data.user));
            navigate("/chat");
          } else {
            alert(data.message);
          }
        });
  };

  return (
    <>
      <div className="login-form-container">
        <form
          action=""
          className="login-form-field"
          onSubmit={(e) => submitHandler(e)}
        >
          <div className="login-form-div">
            {/* <img src={logo} alt="" className="login-form-img" /> */}
            <h1 className="login-form-header">Login</h1>
          </div>
          <div className="login-inputs-container">
            <input
              type="text"
              placeholder="username"
              name="username"
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
            <button>Login</button>
            <span>
              don't have an account ?<Link to="/signup"> Signup</Link>
            </span>
          </div>
        </form>
      </div>
    </>
  );
}

export default Survey;
