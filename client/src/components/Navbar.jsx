import { Link, useNavigate } from "react-router-dom";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
const Navbar = ({ loggedIn, setLoggedIn, setAnswers, setUser }) => {
  const navigate = useNavigate();
  const pages = ["Project", "METALAXIS", "ECTE", "LDI", "Contact Us"];
  const settings = ["Profile", "Answers", "Logout"];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const logOut = () => {
    localStorage.clear();
    setUser("");
    setLoggedIn(false);
    setAnswers("");
    navigate("/");
  };
  return (
   
    <AppBar position="static">
       {loggedIn ?(
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ReMa
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  {" "}
                  <Link className="link-nav-small" to="/">
                    PROJECT{" "}
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  {" "}
                  <Link className="link-nav-small" to="/metalaxis">
                    METALAXIS{" "}
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  {" "}
                  <Link className="link-nav-small" to="/ldi">
                    LDI{" "}
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  {" "}
                  <Link className="link-nav-small" to="/ecte">
                    ECTE{" "}
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  {" "}
                  <Link className="link-nav-small" to="/contact">
                    CONTACT US{" "}
                  </Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ReMa
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link className="link-nav-big" to="/">
                PROJECT{" "}
              </Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link className="link-nav-big" to="/metalaxis">
                METALAXIS
              </Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link className="link-nav-big" to="/ldi">
                LDI{" "}
              </Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link className="link-nav-big" to="/ecte">
                ECTE{" "}
              </Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link className="link-nav-big" to="/contact">
                CONTACT US{" "}
              </Link>
            </Button>
          </Box>
          
          <Box sx={{ flexGrow: 0 }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link className="link-nav-big" to="/survey">
                SURVEY{" "}
              </Link>
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
              <Button
                onClick={handleOpenUserMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                PROFILE
              </Button>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClick={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  {" "}
                  <Link className="link-nav-small" to="/profile">
                    INFO{" "}
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  {" "}
                  <Link className="link-nav-small" to="/answers">
                    ANSWERS{" "}
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center"><Link className="link-nav-small" href="#" onClick={() => {
                    logOut();}}>Logout</Link></Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>  ):(
      <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          ReMa
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">
                {" "}
                <Link className="link-nav-small" to="/">
                  PROJECT{" "}
                </Link>
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">
                {" "}
                <Link className="link-nav-small" to="/metalaxis">
                  METALAXIS{" "}
                </Link>
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">
                {" "}
                <Link className="link-nav-small" to="/ldi">
                  LDI{" "}
                </Link>
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">
                {" "}
                <Link className="link-nav-small" to="/ecte">
                  ECTE{" "}
                </Link>
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">
                {" "}
                <Link className="link-nav-small" to="/contact">
                  CONTACT US{" "}
                </Link>
              </Typography>
            </MenuItem>
          </Menu>
        </Box>
        <Typography
          variant="h5"
          noWrap
          component="a"
          href=""
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          ReMa
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <Button
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            <Link className="link-nav-big" to="/">
              PROJECT{" "}
            </Link>
          </Button>
          <Button
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            <Link className="link-nav-big" to="/metalaxis">
              METALAXIS
            </Link>
          </Button>
          <Button
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            <Link className="link-nav-big" to="/ldi">
              LDI{" "}
            </Link>
          </Button>
          <Button
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            <Link className="link-nav-big" to="/ecte">
              ECTE{" "}
            </Link>
          </Button>
          <Button
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            <Link className="link-nav-big" to="/contact">
              CONTACT US{" "}
            </Link>
          </Button>
        </Box>
        
        <Box sx={{ flexGrow: 0 }}>
          <Button
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            <Link className="link-nav-big" to="/signup">
              Sign Up{" "}
            </Link>
          </Button>
        </Box>
        <Box sx={{ flexGrow: 0 }}>
          <Button
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            <Link className="link-nav-big" to="/login">
              Login{" "}
            </Link>
          </Button>
        </Box>
      </Toolbar>
    </Container>
      ) }
    </AppBar>

    //     <nav className="navbar">
    //       {!loggedIn ? (
    //       <div className="topnav" id="myTopnav">
    //       <Link to="/" className="active"> Project</Link>
    //   <div className="dropdown">
    //     <button className="dropbtn">Partners
    //     </button>
    //     <div className="dropdown-content">
    //     <Link to="/metalaxis"> Metalaxis</Link>
    //     <Link to="/ldi"> LDI</Link>
    //     <Link to="/ecte"> ECTE</Link>
    //     </div>
    //   </div>
    //   <Link to="/contact"> Contact Us</Link>
    //   <Link to="/signup"> Sign Up</Link>
    //   <Link to="/login"> Login</Link>
    // </div>):(
    //   <div className="topnav" id="myTopnav">
    //   <Link to="/" className="active"> Project</Link>
    // <div className="dropdown">
    // <button className="dropbtn">Partners
    // </button>
    // <div className="dropdown-content">
    //     <Link to="/metalaxis"> Metalaxis</Link>
    //     <Link to="/ldi"> LDI</Link>
    //     <Link to="/ecte"> ECTE</Link>
    //     </div>
    // </div>
    // <Link to="/contact"> Contact Us</Link>
    // <div className="dropdown">
    // <button className="dropbtn">Profile
    // </button>
    // <div className="dropdown-content">
    // <Link to="/profile"> Profile</Link>
    // <Link to="/answers"> Your Answers</Link>

    //               <Link href="#" onClick={() => {
    //                 logOut();}}>Logout</Link>
    // </div>
    // </div>
    // <Link to="/survey"> Survey</Link>
    // </div>
    // )}
    //     </nav>
  );
};

export default Navbar;
