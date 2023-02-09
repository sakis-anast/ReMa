import { Link } from "react-router-dom";
const Navbar = ({loggedIn}) => {

  return (
    <nav className="navbar">
      {!loggedIn ? (
      <div className="topnav" id="myTopnav">
      <Link to="/" className="active"> Project</Link>
  <div className="dropdown">
    <button className="dropbtn">Partners
    </button>
    <div className="dropdown-content">
    <Link to="/metalaxis"> Metalaxis</Link>
    <Link to="/ldi"> LDI</Link>
    <Link to="/ecte"> ECTE</Link>
    </div>
  </div>
  <Link to="/contact"> Contact</Link>
  <Link to="/signup"> Sign Up</Link>
  <Link to="/login"> Login</Link>
</div>):(
  <div className="topnav" id="myTopnav">
  <Link to="/" className="active"> Project</Link>
<div className="dropdown">
<button className="dropbtn">Partners
</button>
<div className="dropdown-content">
    <Link to="/metalaxis"> Metalaxis</Link>
    <Link to="/ldi"> LDI</Link>
    <Link to="/ecte"> ECTE</Link>
    </div>
</div>
<Link to="/contact"> Contact</Link>
<div className="dropdown">
<button className="dropbtn">Profile
</button>
<div className="dropdown-content">
  <a href="#">Account</a>
  <a href="#">View Survey</a>
  <a href="#">Logout</a>
</div>
</div>
<Link to="/survey"> Survey</Link>
</div>
)}

      {/* <div className="container">
        <div className="logo"></div>
        <div className="nav-elements">
          {loggedIn ? (
            <ul>
              <li>
              <Link to="/"> Project</Link>
              </li>
              <li>
                Partners
              </li>
              <li>
              <Link to="/contact"> Contact Us</Link>
              </li>

              <li>
                Profile
              </li>
              <li>
                Survey
              </li>
              <li>
                Logout
              </li>
            </ul>
          ) : (
            <ul>
              <li>
              <Link to="/"> Project</Link>
              </li>
              <li>
                Partners
              </li>
              <li>
              <Link to="/contact"> Contact Us</Link>
              </li>
              <li >
              <Link to="/login"> Login</Link>

                            
               </li>
              <li>
              <Link to="/signup"> Sign Up</Link>

              </li>
            </ul>
          )}
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;
