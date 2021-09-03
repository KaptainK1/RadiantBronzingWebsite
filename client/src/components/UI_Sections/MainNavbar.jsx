import React from 'react';
import {Container} from "react-bootstrap";
import {Navbar} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import sun from '../../images/sun-flipped.png';


function MainNavbar(props){

    return(
        <Navbar variant="dark" bg="navBarBG" expand="md">
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img
                        src={sun}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#aboutSection">About</Nav.Link>
                        <Nav.Link href="#pricingSection">Pricing</Nav.Link>
                        <Nav.Link href="#shopSection">Shop</Nav.Link>
                        <Nav.Link href="#contactSection">Contact Me</Nav.Link>
                        <Nav.Link href="#contactSection">Book Now!</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


export default MainNavbar;