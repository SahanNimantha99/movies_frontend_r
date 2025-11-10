import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./Header.css"; // 👈 We'll add some custom CSS here

const Header = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="shadow-sm py-3 navbar-custom"
    >
      <Container fluid>
        <Navbar.Brand
          as={NavLink}
          to="/"
          className="d-flex align-items-center brand-text"
        >
          <FontAwesomeIcon
            icon={faVideo}
            className="me-2 text-warning"
            size="lg"
          />
          <span className="fw-bold text-warning">CineScope</span>
          <span className="text-light ms-1">– Movie Management System</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 d-flex align-items-center"
            navbarScroll
          >
            <NavLink className="nav-link custom-link mx-2" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link custom-link mx-2" to="/watchList">
              Watch List
            </NavLink>

            <div className="d-flex ms-lg-3 mt-2 mt-lg-0">
              <Button variant="outline-warning" className="me-2 fw-semibold">
                Login
              </Button>
              <Button variant="warning" className="fw-semibold text-dark">
                Register
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
