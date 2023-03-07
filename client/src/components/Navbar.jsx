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
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaUserCircle } from "react-icons/fa";

import "../style/Navbar.scss";

import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = ({ loggedIn, setLoggedIn, setAnswers, setUser }) => {
  const navigate = useNavigate();
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
    setAnswers("");
    navigate("/");
    setLoggedIn(false);
  };
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <AppBar className="color" elevation={1} position="static">
      {loggedIn ? (
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
                {/* <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  {" "}
                  <a className="link-nav-small" href="/#partners">
                  Partners{" "}
                  </a>
                </Typography>
              </MenuItem> */}

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
                  PROJECT
                </Link>
              </Button>
              {/* <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
               <a className="link-nav-big" href="/#partners">
                PARTNERS
              </a>
            </Button> */}
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
                <FaUserCircle />
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
                {/* <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  {" "}
                  <Link className="link-nav-small" to="/profile">
                    INFO{" "}
                  </Link>
                </Typography>
              </MenuItem> */}
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    {" "}
                    <Link className="link-nav-small" to="/answers">
                      ANSWERS{" "}
                    </Link>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <a
                      className="link-nav-small"
                      onClick={() => {
                        logOut();
                      }}
                    >
                      <FontAwesomeIcon icon={faArrowRightFromBracket} />
                    </a>
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      ) : (
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
                {/* <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">
                {" "}
                <Link className="link-nav-small" to="/#partners">
                PARTNERS{" "}
                </Link>
              </Typography>
            </MenuItem> */}
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
              {/* <Button
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            <Link className="link-nav-big" to="#partners">
            PARTNERS
            </Link>
          </Button> */}
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
      )}
    </AppBar>
  );
};

export default Navbar;
