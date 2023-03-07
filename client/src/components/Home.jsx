import "../style/Home.scss"
import Partners from "./Partners"
import { useState } from 'react';
import InfoModal from "./InfoModal";

function Home() {
  const logo = require("../logos/rema_logo_2.jpg");
  const how = require("../logos/how.PNG");

  const [openInfoModal, setOpenInfoModal] = useState(false);

  return (
    <>
  
    <main>

      <section  id="project" className="section-hero">
        
        <div className="hero-container">
        <div className="rema-logo">
<div>
<svg className="circle1" height="140" width="140">
	<circle className="circle" cx="70" cy="70" r="66" stroke="#ffffff" strokeWidth="5" fillOpacity="0" />
</svg>
<svg className="circle2" height="140" width="140">
	<circle className="circle" cx="70" cy="70" r="66" stroke="#ffffff" strokeWidth="5" fillOpacity="0" />
</svg>
</div>
<div className="logo-text" >
<h1> <span className="s1">Re.Ma </span>
<br></br>
<span   className="s2">- - - - - -</span>

</h1>
 <h6>  <span className="s3">Remote Management</span>
</h6> 
 <h6>  <span className="s4"> for SMEs</span>
</h6> 
  

</div>
</div>
          <div className="hero-content">
            <h1 className="hero-title">
            Remote Management for SMEs
            </h1>
<p className="hero-text">
  Erasmus+ project for
Small-scale partnerships in the field of vocational
education and training about Remote Management         </p>
<span className="info" onClick={() => {
              setOpenInfoModal(true);
            }}>Why Remote Management</span>
            
          </div>
       
          
        </div>
     
      </section>
     
      <section id="mission" className="mission">
        <h2 className="underline">Our Mission</h2>
          <div className="objectives">
            <div className="outcomes">
          <h4>Project Objectives</h4>

            <p>
            A systematic review of the practices on remote management tools and strategies
            </p>
            <p>
            MOOC (Massive Online and Open Course) on remote management
            </p>
            </div>
          <div className="outcomes">
            <h4>Expected Outcomes</h4>
  <p>            Review of the practices on remote management tools and strategies
</p>
<p>            Reporting on remote management readiness of SME's 
</p>
<p>List of skills needed list for SMEs managers</p>
<p>            Curriculum development
</p>
<p> MOOC for upskilling SMEs managers </p>
  
          

        </div>
        </div>

      </section>
     
    </main>
    
   
      <section className="howitworks" id="howitworks">
      <h2 className="underline">How to use the app</h2>
      <div className="howitworks_div">
<div className="howitworks_img">
  <img src={how} alt="" />
</div>
<div>
  <ol>
    <li> You need to create a profile if you don't  already have one</li>
    <li> You need login with your account details </li>
    <li>Fill in a survey about your enterprise</li>
    <li>Now you can download an action plan for your enterprise based on your answers</li>

  </ol>
</div>

      </div>
    </section>
      <section className="partners" id="partners">
      <Partners/>
      <InfoModal
        open={openInfoModal}
        onClose={() => {
          setOpenInfoModal(false);
        }}
      />
    </section>
  
    </>
  );
}

export default Home;