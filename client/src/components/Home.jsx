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
      <section className="partners" id="partners">
      <Partners/>
    </section>
      <section id="mission" className="mission">
        <h2>Our Mission</h2>
        <div className="mission-container">
          <div>
            <p> Project Objectives</p>
          <ul>
            <li>
            A systematic review of the practices on remote management tools and strategies
            </li>
            <li>
            MOOC (Massive Online and Open Course) on remote management
            </li>
          </ul>
          </div>
          <div>
          <p>Expected Outcomes</p>

          <ul>
            <li>
            Review of the practices on remote management tools and strategies

            </li>
            <li>
            Reporting on remote management readiness of SME's 
            </li>
            <li>
            List of skills needed list for SMEs managers
            </li>
            <li>
            Curriculum development
            </li>
            <li>
            MOOC for upskilling SMEs managers 
            </li>
          </ul>
          </div>

        </div>
      </section>
      <section class="section service" aria-labelledby="service-label">
        <div class="container">

          <p class="section-subtitle" id="service-label">The objective of the project “Remote Management”, is to promote the acquisition of competences of SMEs managers, in
the adoption of remote management strategies and the use of related tools.</p>

          <h2 class="h2 section-title">
          Our Mission
          </h2>

          <ul class="grid-list">

            <li>
              <div class="service-card">

                <div class="card-icon">
                  <ion-icon name="call-outline" aria-hidden="true"></ion-icon>
                </div>

                <h3 class="h4 card-title">24/7 Support</h3>

                <p class="card-text">
                A systematic review of the practices on remote management tools and strategies
                </p>

                <a href="#" class="btn-text">
                  <span class="span">Learn More</span>

                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </a>

              </div>
            </li>

            <li>
              <div class="service-card">

                <div class="card-icon">
                  <ion-icon name="shield-checkmark-outline" aria-hidden="true"></ion-icon>
                </div>

                <h3 class="h4 card-title">Secure Payments</h3>

                <p class="card-text">
                  Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras
                  justo.
                </p>

                <a href="#" class="btn-text">
                  <span class="span">Learn More</span>

                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </a>

              </div>
            </li>

            <li>
              <div class="service-card">

                <div class="card-icon">
                  <ion-icon name="cloud-download-outline" aria-hidden="true"></ion-icon>
                </div>

                <h3 class="h4 card-title">Daily Updates</h3>

                <p class="card-text">
                  Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras
                  justo.
                </p>

                <a href="#" class="btn-text">
                  <span class="span">Learn More</span>

                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </a>

              </div>
            </li>

            <li>
              <div class="service-card">

                <div class="card-icon">
                  <ion-icon name="pie-chart-outline" aria-hidden="true"></ion-icon>
                </div>

                <h3 class="h4 card-title">Market Research</h3>

                <p class="card-text">
                  Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras
                  justo.
                </p>

                <a href="#" class="btn-text">
                  <span class="span">Learn More</span>

                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </a>

              </div>
            </li>

          </ul>

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
The objective of the project “Remote Management”, is to promote the acquisition of competences of SMEs managers, in
the adoption of remote management strategies and the use of related tools. For addressing this objective, the following
specific objectives (aims) have been set:
SO1. A systematic review of the practices on remote management tools and strategies
SO2. MOOC (Massive Online and Open Course) on remote management


The expected outcomes (R) include:
R1- Review of the practices on remote management tools and strategies
R2- Reporting on remote management readiness of SME's in partners' regions,
R3 -Skills needed list for SMEs managers, to adopt an effective remote management strategy,
R4- Curriculum development in line with ECVET procedures
R5- MOOC (Massive Online and Open Course) in line with EQAVET, for upskilling SMEs managers in remote
management adoption.
LINKS WITH SELECTED PRIORITIES
-ADAPTING VOCATIONAL EDUCATION AND TRAINING TO LABOR NEEDS. The ReMa project Objective is to adapt
existing training for ensuring that managers in SMEs can effectively adopt remote management strategies and tools.
-CREATING NEW, INNOVATIVE CURRICULA and COURSES. A new curriculum and respective online course, will be
developed for
- OVERCOMING SKILLS MISMATCH AND ADDRESSING THE NEEDS OF THE LABOUR MARKET and addressing
the skills needed in the field of remote management.
- Acquisition of new DIGITAL SKILLS AND COMPETENCES is the of skills needed list (A1.3), resulting from reviewing
digital readiness survey of SMEs (A1.2)

how to use the app



eu
      </div>
      <Contact/>
      {/* <Footer>
      </Footer> */}
    </>
  );
}

export default Home;