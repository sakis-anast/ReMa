import "../style/Home.scss"
import Contact from "./Contact"
import Partners from "./Partners"
import Footer from "./Footer"
import ScrollTop from "./ScrollTop"
function Home() {
  const logo = require("../logos/rema_logo_2.jpg");
  return (
    <>
    {/* <ScrollTop/> */}
    <main>

      <section  id="project" className="section-hero">
        <div className="hero-container">

          <div className="hero-content">
            <h1 className="hero-title">
            Remote Management for SMEs
            </h1>
<p class="hero-text">
  We created a KA210-VET Erasmus+ project for
Small-scale partnerships in the field of vocational

education and training            </p>
          </div>
          <div className="ream-logo">
<img src={logo} alt="Rema Logo" />
</div>
        </div>

      </section>
   
      <section id="mission" className="mission">
        <h2>Our Mission</h2>
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
    
    <header>
      <img src={logo} alt="" />
    </header>
      <div>
      The outbreak of the coronavirus pandemic (COVID-19) has severely affected the global economy. Major victims of the
COVID-19 outbreak, as studies show, were small, and medium-sized enterprises (SMEs). One of the main response
strategies for most of the enterprises was introducing Remote Work to their employees/businesses. While there are still
no precise figures on the scale of teleworking during the COVID crisis, there are some early estimations that suggest a
much larger prevalence than before the crisis. An ad hoc online survey from Eurofound (2020) estimated that close to
40% of those currently working in the EU began to telework full-time as a result of the pandemic. More specifically,
according to the EU Joint Research Center analysis (jrc120945), the prevalence of remote work varied strongly across
sectors and occupations and was already particularly high in knowledge- and ICT-intensive services.
Business managers and leaders especially those of SMEs, have to deal with new challenges related to coordinating a
team across multiple office locations and managing full-time remote workers. However, the training system is not
prepared for the challenges and considerations of managing remote teams. The training market, however, has not yet
caught up with these challenges as only 15% of remote employee managers have received specialized training (the
“2020 State of Remote Work Report”.)

      </div>
      <section className="howitworks" id="howitworks">
      how to use
    </section>
      <section className="partners" id="partners">
      <Partners/>
    </section>
      <Contact/>
      {/* <Footer>
      </Footer> */}
    </>
  );
}

export default Home;