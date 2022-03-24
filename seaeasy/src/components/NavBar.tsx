import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";

// `<Link>` enables us to navigate between the pages by using the prop `to`

export const NavBar = () => {
  return (
    <Navbar sticky="top"  expand="md">
      <Container>
        {/* <Navbar.Brand href="#home">SeaEasy</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Link to="/">
                <Navbar.Brand href="#home">
                <img
                    src="../logo.png"
                    // width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="SeaEasy logo"
                />
                </Navbar.Brand>
            </Link>
                <Link to="/">Home</Link>
                <Link to="/">Marketplace</Link>
                <Link to="/">Share trip</Link>
                <Link to="/">Social</Link>
                <Link to="/">Sign In</Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
