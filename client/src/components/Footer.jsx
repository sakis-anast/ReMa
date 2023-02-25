import "../style/Footer.scss"
function Footer(){
return (
    <>
    <div className="footer">
        <div className="sb_footer section_padding">
            <div className="sb_footer_links">
                <div className="sb_footer_links_div">
                    <h4>About the Project</h4>
                    <a href="#">
                        <p>ok</p>
                    </a>
                    <a href="#">
                        <p>ok</p>
                    </a>
                    <a href="#">
                        <p>ok</p>
                    </a>
                    <a href="#">
                        <p>ok</p>
                    </a>
                </div>
                <div className="sb_footer_links_div">
                    <h4>Team</h4>
                    <a href="#partners">
                        <p>Partbers</p>
                    </a>
                    <a href="#">
                        <p>ECTE website</p>
                    </a>
                    <a href="#">
                        <p>LDI website</p>
                    </a>
                    <a href="#">
                        <p>Metalaxis website</p>
                    </a>
                </div>
                <div className="sb_footer_links_div">
                    <h4>EU</h4>
                    <a href="#">
                        <p>ok</p>
                    </a>
                    <a href="#">
                        <p>ok</p>
                    </a>
                    <a href="#">
                        <p>ok</p>
                    </a>
                    <a href="#">
                        <p>ok</p>
                    </a>
                </div>
                {/* <div className="sb_footer_links_div">
                    <h4>Social</h4>
                    <a href="#">
                        <p>ok</p>
                    </a>
                    <a href="#">
                        <p>ok</p>
                    </a>
                    <a href="#">
                        <p>ok</p>
                    </a>
                    <a href="#">
                        <p>ok</p>
                    </a>
                </div> */}
                <div className="sb_footer_links_div">
                    <h4>Contact</h4>
                    <div className="socialMedia">
                    <a href="#">
                        <p>Contact us</p>
                    </a>
                        <p><img src="" alt="" /></p>
                        <p><img src="" alt="" /></p>
                        <p><img src="" alt="" /></p>
                        <p><img src="" alt="" /></p>
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
                        <a href="#" ><div><p>Cookies</p></div></a>

                    </div>
                </div>
            </div>
    </div>
    </>
)

}
export default Footer