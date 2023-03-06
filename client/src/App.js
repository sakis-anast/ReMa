import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState , useEffect} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/Navbar";
//importing components
import SignUp from "./components/SignUp";
import Survey from "./components/Survey";
import Login from "./components/Login";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import Partners from "./components/Partners";
import Contact from "./components/Contact";
// import Profile from "./components/Profile";
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


 
  return (
    <BrowserRouter>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} setAnswers={setAnswers} setUser={setUser} />
      <ScrollTop/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<SignUp   loggedIn={loggedIn}/> }></Route>
        <Route path="/survey" element={<Survey  loggedIn={loggedIn} user ={user} setLoggedIn={setLoggedIn}/>}></Route>
        <Route
          path="/login"
          element={<Login setLoggedIn={setLoggedIn}   loggedIn={loggedIn} />}
        ></Route>
        <Route path="/partners" element={<Partners />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        {/* <Route path="/profile" element={<Profile  loggedIn={loggedIn}  user ={user}/>}></Route> */}
        <Route path="/answers" element={<Answers  loggedIn={loggedIn}  user ={user} answers={answers} setAnswers={setAnswers} loading={loading} setLoading={setLoading} />}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
