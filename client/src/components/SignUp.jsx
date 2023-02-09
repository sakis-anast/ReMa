import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function SignUp() {
  const navigate = useNavigate();
// if the user already log in go to the chat area 
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  });

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
        .post("http://localhost:3001/users/signup", {
          username,
          email,
          password,
        })
        .then(({ data }) => {
          if (data.message === true) {
            navigate("/login");
          } else {
            alert(data.message);
          }
        });  
  };

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
            <button>Create User</button>
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
