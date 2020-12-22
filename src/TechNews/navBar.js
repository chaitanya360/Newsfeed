import React from "react";
import { Button, Navbar, Nav, Dropdown } from "react-bootstrap";

const NavBarComponent = (props) => {
  const { onCatClick, categoryprop } = props;

  function getStyle(category) {
    if (category == categoryprop) {
      return " rgb(245, 110, 110)";
    } else return "white";
  }

  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top"
      style={{
        zIndex: "1",
        height: "30px",
        // position: "fixed",
        // top: "40px",
        width: "100%",
      }}
      role="navigation"
    >
      {/* <Navbar.Brand href="#home">TechNews</Navbar.Brand> */}
      <Nav className="nav_container" style={{ padding: 0, margin: 0 }}>
        <Nav.Link
          onClick={() => onCatClick("technology")}
          style={{ color: getStyle("technology"), paddingLeft: "0px" }}
        >
          Tech
        </Nav.Link>
        <Nav.Link
          onClick={() => onCatClick("science")}
          style={{ color: getStyle("science") }}
        >
          Science
        </Nav.Link>

        <Nav.Link
          onClick={() => onCatClick("general")}
          style={{ color: getStyle("general") }}
        >
          General
        </Nav.Link>
        <Nav.Link
          onClick={() => onCatClick("entertainment")}
          style={{ color: getStyle("entertainment") }}
        >
          Entertainment
        </Nav.Link>
        <Nav.Link
          onClick={() => onCatClick("sports")}
          style={{ color: getStyle("sports") }}
        >
          sports
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBarComponent;
