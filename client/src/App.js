import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/Navbar";
//importing components
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

  return (
    <BrowserRouter>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/survey" element={<Survey />}></Route>
        <Route
          path="/login"
          element={<Login setLoggedIn={setLoggedIn}/>}
        ></Route>
        <Route path="/ecte" element={<Ecte />}></Route>
        <Route path="/ldi" element={<Ldi />}></Route>
        <Route path="/Metalaxis" element={<Metalaxis />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/answers" element={<Answers />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
