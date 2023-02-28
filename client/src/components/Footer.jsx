import "../style/Footer.scss"
import { Link } from "react-router-dom";
import { FaLinkedinIn } from 'react-icons/fa';

function Footer(){
    const eu = require("../logos/eu.png");

return (
    <>
    <div className="eu">
    <img src={eu} alt="EU funded Logo"  />
    </div>
    <div className="footer">
        <div className="sb_footer section_padding">
            <div className="sb_footer_links">
                <div className="sb_footer_links_div">
                    <h4>About the Project</h4>
                    <a href="/#project">
                        <p>Project</p>
                    </a>
                    <a href="/#mission">
                        <p>Our Mission</p>
                    </a>
                    <a href="/#howitworks">
                        <p>How the app works</p>
                    </a>
                </div>
                <div className="sb_footer_links_div">
                    <h4>Team</h4>
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
                <div className="sb_footer_links_div">
                    <h4>Erasmus+</h4>
                    <a href="https://erasmus-plus.ec.europa.eu/">
                        <p>Erasmus+ Website</p>
                    </a>
                    <a href="https://erasmus-plus.ec.europa.eu/programme-guide/part-b/key-action-2/small-scale-partnerships">
                        <p>SmallScale Partnerships</p>
                    </a>
                  
                </div>
                <div className="sb_footer_links_div">
                    <h4>Contact</h4>
                    <div className="socialMedia">
                    <Link to="/contact">
                        <p>Contact us</p>
                    </Link>
                    <a href="https://www.linkedin.com/company/88040455/in.com/in/jaketrent"> <FaLinkedinIn /></a>
                        

  
                        </div>

                    </div>
                </div>
                <hr></hr>
                <div className="sb_footer_below">
                    <div className="sb_footer_copyright">
                        <p>
                            @{new Date().getFullYear()} Rema. All rights reserved
                        </p>
                    </div>
                    <div className="sb_footer_below_links">
                        <a href="#" ><div><p>Terms & Conditions</p></div></a>
                        <a href="#" ><div><p>Privacy</p></div></a>
                        <a href="#" ><div><p>Security</p></div></a>

                    </div>
                </div>
            </div>
    </div>
    </>
)

}
export default Footer