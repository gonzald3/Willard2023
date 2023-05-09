import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

function Navibar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href=""
              target="_blank"
              id="navbar-brand"
            >

            </NavbarBrand>
            <img
                alt="..."
                className="n-logo"
                src={require("../Img/circle-cropped.png")}
            ></img>

            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink to="/home" tag={Link}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/home" tag={Link}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/home" tag={Link}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/home" tag={Link}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/home" tag={Link}>
                  Home
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink to="/team" tag={Link}>
                  Our Team
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/services" tag={Link}>
                  Services
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/properties" tag={Link}>
                  Properties
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contact" tag={Link}>
                  Contact Us
                </NavLink>
              </NavItem> */}






              <NavItem>
                <NavLink
                  href="https://twitter.com/WillardDevelop"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-twitter"></i>
                  {/* <p className="d-lg-none d-xl-none">Twitter</p> */}
                </NavLink>

              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.facebook.com/pages/category/Construction-Company/Willard-Development-Inc-254837794688114/"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  {/* <p className="d-lg-none d-xl-none">Facebook</p> */}
                </NavLink>

              </NavItem>
              <NavItem>
                <NavLink
                    href="https://www.instagram.com/willarddevelopmentinc/"
                    target="_blank"
                    id="instagram-tooltip"
                >
                  <a><i className="fab fa-instagram"></i></a>
                  {/* <p className="d-lg-none d-xl-none">Instagram</p> */}
                </NavLink>

              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navibar;

