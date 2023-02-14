import { Link , useNavigate } from "react-router-dom";
const Navbar = ({loggedIn , setLoggedIn, setAnswers, setUser}) => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    setUser("")
    setLoggedIn(false);
    setAnswers("")
    navigate("/")
  };
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
  <Link to="/contact"> Contact Us</Link>
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
<Link to="/contact"> Contact Us</Link>
<div className="dropdown">
<button className="dropbtn">Profile
</button>
<div className="dropdown-content">
<Link to="/profile"> Profile</Link>
<Link to="/answers"> Your Answers</Link>
  <button onClick={() => {
                logOut();
              }}>Logout</button>
</div>
</div>
<Link to="/survey"> Survey</Link>
</div>
)}
    </nav>
  );
};

export default Navbar;
