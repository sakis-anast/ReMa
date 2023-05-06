// import { Link, useNavigate } from "react-router-dom";
// import * as React from "react";
// // import AppBar from "@mui/material/AppBar";
// // import Box from "@mui/material/Box";
// // import Toolbar from "@mui/material/Toolbar";
// // import IconButton from "@mui/material/IconButton";
// // import Typography from "@mui/material/Typography";
// // import Menu from "@mui/material/Menu";
// // import MenuIcon from "@mui/icons-material/Menu";
// // import Container from "@mui/material/Container";
// // import Button from "@mui/material/Button";
// // import MenuItem from "@mui/material/MenuItem";
// import { FaBars } from 'react-icons/fa'
// import styled from 'styled-components'

// import "../style/Navbar.scss";

// import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
// import { useState } from "react";

// const Navbar = ({ loggedIn, setLoggedIn, setAnswers, setUser }) => {
//   const navigate = useNavigate();
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };
//   const logOut = () => {
//     localStorage.clear();
//     setUser("");
//     setAnswers("");
//     navigate("/");
//     setLoggedIn(false);
//   };
//   const [colorChange, setColorchange] = useState(false);
//   const changeNavbarColor = () => {
//     if (window.scrollY >= 80) {
//       setColorchange(true);
//     } else {
//       setColorchange(false);
//     }
//   };
//   window.addEventListener("scroll", changeNavbarColor);


//  const PrimaryNav = styled.nav`
//   z-index: 14;
//   height: 90px;
//   display: flex;
//   background: #8bc34a;
//   justify-content: space-between;
//   padding: 0.18rem calc((100vw - 1000px) / 2);
// `
//  const MenuLink = styled(Link)`
//   color: #fff;
//   display: flex;
//   cursor: pointer;
//   align-items: center;
//   text-decoration: none;
//   padding: 0 1.2rem;
//   height: 100%;
//   &.active {
//     color: #000000;
//   }
// `
//  const Hamburger = styled(FaBars)`
//   display: none;
//   color: #ffffff;
//   @media screen and (max-width: 450px) {
//     display: block;
//     font-size: 1.9rem;
//     top: 0;
//     right: 0;
//     position: absolute;
//     cursor: pointer;
//     transform: translate(-100%, 75%);
//   }
// `
//  const Menu = styled.div`
//   display: flex;
//   align-items: center;
//   margin-right: -25px;
//   @media screen and (max-width: 450px) {
//     display: none;
//   }
// `
//   return (

//     <>
//     <PrimaryNav>
//       <Hamburger />
//       <Menu>
//         <MenuLink to="/" >
//           Rema
//         </MenuLink>
//         <MenuLink to="/survey" >
//           Survey
//         </MenuLink>
//         <MenuLink to="/Answers" >
//           Answers
//         </MenuLink>
//         <MenuLink href="/" >
//           Metalaxis
//         </MenuLink>
//       </Menu>
//     </PrimaryNav>
//   </>
//     // <AppBar className="color" elevation={1} position="static">
    
//     //     <Container maxWidth="xl">
//     //       <Toolbar disableGutters>
//     //         <Typography
//     //           variant="h6"
//     //           noWrap
//     //           component="a"
//     //           href="/"
//     //           sx={{
//     //             mr: 2,
//     //             display: { xs: "none", md: "flex" },
//     //             fontFamily: "monospace",
//     //             fontWeight: 700,
//     //             letterSpacing: ".3rem",
//     //             color: "inherit",
//     //             textDecoration: "none",
//     //           }}
//     //         >
//     //           ReMa
//     //         </Typography>

//     //         <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//     //           <IconButton
//     //             size="large"
//     //             aria-label="account of current user"
//     //             aria-controls="menu-appbar"
//     //             aria-haspopup="true"
//     //             onClick={handleOpenNavMenu}
//     //             color="inherit"
//     //           >
//     //             <MenuIcon />
//     //           </IconButton>
//     //           <Menu
//     //             id="menu-appbar"
//     //             anchorEl={anchorElNav}
//     //             anchorOrigin={{
//     //               vertical: "bottom",
//     //               horizontal: "left",
//     //             }}
//     //             keepMounted
//     //             transformOrigin={{
//     //               vertical: "top",
//     //               horizontal: "left",
//     //             }}
//     //             open={Boolean(anchorElNav)}
//     //             onClose={handleCloseNavMenu}
//     //             sx={{
//     //               display: { xs: "block", md: "none" },
//     //             }}
//     //           >
//     //             <MenuItem onClick={handleCloseNavMenu}>
//     //               <Typography textAlign="center">
//     //                 {" "}
//     //                 <Link className="link-nav-small" to="/">
//     //                   PROJECT{" "}
//     //                 </Link>
//     //               </Typography>
//     //             </MenuItem>
              

               
//     //           </Menu>
//     //         </Box>
//     //         <Typography
//     //           variant="h5"
//     //           noWrap
//     //           component="a"
//     //           href=""
//     //           sx={{
//     //             mr: 2,
//     //             display: { xs: "flex", md: "none" },
//     //             flexGrow: 1,
//     //             fontFamily: "monospace",
//     //             fontWeight: 700,
//     //             letterSpacing: ".3rem",
//     //             color: "inherit",
//     //             textDecoration: "none",
//     //           }}
//     //         >
//     //           ReMa
//     //         </Typography>
//     //         <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//     //           <Button
//     //             onClick={handleCloseNavMenu}
//     //             sx={{ my: 2, color: "white", display: "block" }}
//     //           >
//     //             <Link className="link-nav-big" to="/">
//     //               PROJECT
//     //             </Link>
//     //           </Button>
           
              
//     //         </Box>

//     //         <Box sx={{ flexGrow: 0 }}>
//     //           <Button
//     //             onClick={handleCloseNavMenu}
//     //             sx={{ my: 2, color: "white", display: "block" }}
//     //           >
//     //             <Link className="link-nav-big" to="/survey">
//     //               SURVEY{" "}
//     //             </Link>
//     //           </Button>
//     //         </Box>
//     //         <Box sx={{ flexGrow: 0 }}>
//     //           <Button
//     //             onClick={handleCloseNavMenu}
//     //             sx={{ my: 2, color: "white", display: "block" }}
//     //           >
//     //             <Link className="link-nav-big" to="/answers">
//     //               Answers{" "}
//     //             </Link>
//     //           </Button>
//     //         </Box>
//     //       </Toolbar>
//     //     </Container>
      
//     // </AppBar>
//   );
// };

// export default Navbar;
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {  FaBars , FaTimes } from 'react-icons/fa'

import "../style/Navbar.scss";
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
 
  return (
    <nav className="navbar">
      <div className="container">
       
        <div className="menu-icon" onClick={handleShowNavbar}>
          Menu {!showNavbar ?<FaBars /> : <FaTimes  className='navclose'/>} 
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Re.Ma</NavLink>
            </li>
            <li>
              <NavLink to="/survey">Survey</NavLink>
            </li>
            <li>
              <NavLink to="/answers">Answers</NavLink>
            </li>
            <li>
              <a href='https://metalaxis.net/'>Metalaxis</a>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar