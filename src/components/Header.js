import React from 'react';
import { Navbar, Container, Offcanvas, Nav } from 'react-bootstrap';
import comlogo from "../image/logo.webp";
import menu from "../image/menu.svg";
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div>
        <Navbar className="navbar-color" expand={false}>
            <Container fluid>
                <Navbar.Brand href="#">
                    <img src={comlogo} alt="comapny logo"  height="60" width="100%"/>
                </Navbar.Brand>
                <Navbar.Toggle>
                    <img src={menu} alt="menu" width="50" height="60"/>
                </Navbar.Toggle>
                <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
                >
                <Offcanvas.Header className="custom-offcanvas" closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel">
                        <img className="text-center" src={comlogo} alt="company logo"/>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body  className="custom-offcanvas">
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <hr></hr>
                    <Link to="/about" className='nav-link'>About Us</Link>
                    <hr></hr>
                    <Nav.Link href="#action2">Our Project</Nav.Link>
                    <hr></hr>
                    <Link to="/service" className='nav-link'>Our Services</Link>
                    <hr></hr>
                    <Nav.Link href="#action2">Contact Us</Nav.Link>
                    <hr></hr>
                    </Nav>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header