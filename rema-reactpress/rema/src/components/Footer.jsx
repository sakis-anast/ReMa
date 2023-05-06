import "../style/Footer.scss";
import { FaLinkedinIn } from "react-icons/fa";
import {  FaBars , FaTimes } from 'react-icons/fa'
import { useState } from 'react'

function Footer() {
  const eu = require("../logos/eu.png");
  const [showNavbar1, setShowNavbar1] = useState(false)
  const [showNavbar2, setShowNavbar2] = useState(false)
  const [showNavbar3, setShowNavbar3] = useState(false)
  const [showNavbar4, setShowNavbar4] = useState(false)

  const handleShowNavbar1 = () => {
    setShowNavbar1(!showNavbar1)
  }

  const handleShowNavbar2 = () => {
    setShowNavbar2(!showNavbar2)
  }

  const handleShowNavbar3 = () => {
    setShowNavbar3(!showNavbar3)
  }
  const handleShowNavbar4 = () => {
    setShowNavbar4(!showNavbar4)
  }
  return (
    <>
      <div className="eu">
        <img  src={eu} alt="EU funded Logo" />
      </div>
      <div className="footer">
        <div className="sb_footer section_padding">
          <div className="sb_footer_links">
          <div className={`sb_footer_links_div d1  ${showNavbar1 && 'h1'}`}>
              <h4 className="foot">About the Project 
              {!showNavbar1 ?<  FaBars className="show" onClick={handleShowNavbar1}/> :<FaTimes className="show" onClick={handleShowNavbar1}/> }
              
              </h4>
              <a href="https://rema-project.eu/">
                <p>Project Website</p>
              </a>
            
            </div>
            <div className={`sb_footer_links_div d2  ${showNavbar2 && 'h2'}`}>
              <h4 className="foot">Team  
              {!showNavbar2 ?<FaBars className="show" onClick={handleShowNavbar2}/> :<FaTimes className="show" onClick={handleShowNavbar2}/> }

              </h4>
              <a href="https://metalaxis.net/">
                <p>Metalaxis website</p>
              </a>
              <a href="http://www.ecte.gr/">
                <p>ECTE Website</p>
              </a>
              <a href="http://www.ldi-berlin.de/">
                <p>LDI Website</p>
              </a>
            </div>
            <div className={`sb_footer_links_div d3  ${showNavbar3 && 'h3'}`}>
              <h4 className="foot">Erasmus+ 
              {!showNavbar3 ?<FaBars className="show" onClick={handleShowNavbar3}/> :<FaTimes className="show" onClick={handleShowNavbar3}/> }

              </h4>
              <a href="https://erasmus-plus.ec.europa.eu/">
                <p>Erasmus+ Website</p>
              </a>
              <a href="https://erasmus-plus.ec.europa.eu/programme-guide/part-b/key-action-2/small-scale-partnerships">
                <p>SmallScale Partnerships</p>
              </a>
            </div>
            <div className={`sb_footer_links_div d4  ${showNavbar4 && 'h4'}`}>
              <h4 className="foot">Contact 
              {!showNavbar4 ?<FaBars className="show" onClick={handleShowNavbar4}/> :<FaTimes className="show" onClick={handleShowNavbar4}/> }
              </h4>
              <div className="socialMedia">
                <a href="https://www.linkedin.com/company/remote-management-for-smes/">
                  {" "}
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="sb_footer_below">
            <div className="sb_footer_copyright">
              <p>@{new Date().getFullYear()} Rema. All rights reserved</p>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
