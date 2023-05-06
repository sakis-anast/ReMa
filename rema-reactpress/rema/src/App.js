import {  Routes, Route } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/Navbar";
//importing components
import Home from "./components/Home";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import Survey from "./components/Survey";

import Answers from "./components/Answers";
function App() {
  const [answers, setAnswers] = useState({empty:true});
  const [loading, setLoading] = useState(false);

  
  return (
<>   <Navbar
      />
      <ScrollTop />
      <Routes>
        <Route   path="/" element={<Home />}></Route>
        <Route
           path="/survey"
          element={
            <Survey   
            answers={answers}
            setAnswers={setAnswers} />
          }
        ></Route>
      
        <Route
           path="/answers"
          element={
            <Answers
              answers={answers}
              setAnswers={setAnswers}
              loading={loading}
              setLoading={setLoading}
            />
          }
        ></Route>
      </Routes>
      <Footer />
      </>     );
}

export default App;
