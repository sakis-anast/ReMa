import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState , useEffect} from "react";
import axios from "axios";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/Navbar";
//importing components
import  "./style/Style.scss";
import SignUp from "./components/SignUp";
import Survey from "./components/Survey";
import Login from "./components/Login";
import Home from "./components/Home";
import Ldi from "./components/Ldi";
import Ecte from "./components/Ecte";
import Metalaxis from "./components/Metalaxis";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import Answers from "./components/Answers";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [answers, setAnswers] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(localStorage.getItem("token")){
      if (localStorage.getItem("token")) {
        axios
          .post("http://localhost:3636/user/verify", {
            token: localStorage.getItem("token"),
          })
          .then(({ data }) => {
            setUser(data);
            setLoggedIn(true)
           
          })
          .catch((err) => console.error("Error:", err));
      }
    }
  },[loggedIn]);

  // console.log(answers)

 
  return (
    <BrowserRouter>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} setAnswers={setAnswers} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/survey" element={<Survey  loggedIn={loggedIn} user ={user} setLoggedIn={setLoggedIn}/>}></Route>
        <Route
          path="/login"
          element={<Login setLoggedIn={setLoggedIn} setLoading={setLoading}/>}
        ></Route>
        <Route path="/ecte" element={<Ecte />}></Route>
        <Route path="/ldi" element={<Ldi />}></Route>
        <Route path="/Metalaxis" element={<Metalaxis />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/profile" element={<Profile  loggedIn={loggedIn}  user ={user}/>}></Route>
        <Route path="/answers" element={<Answers  loggedIn={loggedIn}  user ={user} answers={answers} setAnswers={setAnswers} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
