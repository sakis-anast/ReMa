import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function SignUp({loggedIn}) {
  const navigate = useNavigate();


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
