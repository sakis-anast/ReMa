import Carousel from 'react-bootstrap/Carousel';

function Partners() {
  const metalaxis = require("../logos/metalaxis.png");
  const ldi = require("../logos/LDI_logo.JPG");
  const ecte = require("../logos/ECTE_logo_EN.jpg");
  const meeting = require("../logos/meeting.jpg");

    return (
      <div className='partners'>
      <Carousel  variant="dark" >
      <Carousel.Item className='partners'>
        <img
          className="w-25"
          src={metalaxis}
          alt="First slide"
        />
        <div>
          <h3>Metalaxis</h3>
          <p className='p-carousel'  >Metalaxis s.r.o. is a specialized management consulting firm that helps organizations and enterprises grow remotely.
Metalaxis s.r.o. main focus is to facilitate the transition and transformation of enterprises and organizations to the new
digital era providing them the appropriate training, guidance and IT tools required to succeed.
Services include remote management consulting, virtual project management, agile team coaching, transition and
transformation project management, knowledge management, workflow management, remote team design and
management and business process design.
Metalaxis s.r.o aims to utilize and repackage the best practices and management approaches used by the cutting-edge
technology leading corporations and institutes in order to serve traditional SME’s and organizations so they can
effectively adapt to the new demands of the global digital markets.</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-25"
          src={ldi}
          alt="Second slide"
        />

        <div>
          <h3>LDI</h3>
          <p className='p-carousel'> LDI UG
Country Germany
Region BERLIN
City Berlin
Website www.ldi-berlin.de
LDI is a private educational institute, located in Berlin. It concentrates on European educational projects and activities in
the areas of vocational training and education, adult education, and labor. LDI aims are to initiate European exchange
within these fields, to integrate into educational processes gender & diversity as concepts for more equal chances and
acknowledgment, and to bring innovative approaches with European dimensions into education and labor.
Services include the arrangement of work-based training and observatory technical visits in Europe and in Berlin. LDI
offers to counsel to vocational schools, colleges, universities, and enterprises, who are interested in offering their
trainees, apprentices, or employees a work-related exchange abroad in order to deepen their professional knowledge and
skills. It also offers services for evaluation and assessments of training programs, educational projects, and events.</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-25 "
          src={ecte}
          alt="Third slide"
        />

        <div>
          <h3>ECTE</h3>
          <p className='p-carousel'>
          EUROPEAN CENTER IN TRAINING FOR EMPLOYMENT
        Greece
Region Κρήτη (Kriti)
City RETHYMNO
Website www.ecte.gr
upskilling and/or re-skilling of labor, to cover skills gap, according to the market needs, which integrate innovation and a
European dimension. More specifically the spectrum of ECTE activities involve:
• Implementation of formal training programs (physical presence).
• Development of curricula and training courses, in line with ECVET and EQAVET procedures, adapted to market needs
(micro-credential approach).
• Elaboration of researches related to the skills needs of the labor market.
• Offering courses based in both face-to-face and e-learning in a ubiquitous form.
• Development of emerging professional profiles and official certification of the emerging qualifications according to ISO
27024 norms.
• Hosting of international students in Summer schools as well as for work-based learning.
          </p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-25"
          src={meeting}
          alt="First slide"
        />
        <div>
          <h3>Our Team</h3>
          <p className='p-carousel'  >Metalaxis s.r.o. is a specialized management consulting firm that helps organizations and enterprises grow remotely.
Metalaxis s.r.o. main focus is to facilitate the transition and transformation of enterprises and organizations to the new
digital era providing them the appropriate training, guidance and IT tools required to succeed.
Services include remote management consulting, virtual project management, agile team coaching, transition and
transformation project management, knowledge management, workflow management, remote team design and
management and business process design.
Metalaxis s.r.o aims to utilize and repackage the best practices and management approaches used by the cutting-edge
technology leading corporations and institutes in order to serve traditional SME’s and organizations so they can
effectively adapt to the new demands of the global digital markets.</p>
        </div>
      </Carousel.Item>
    </Carousel>
    </div>
       
    
    );
  }
  
  export default Partners;


