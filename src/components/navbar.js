import React from "react"
import { Navbar, Nav } from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap"
import { withRouter } from "react-router";

export const HeaderWithRouter = withRouter(Navigation)

const folder = process.env.PUBLIC_URL;
function Navigation(props) {
    const { location } = props;
    console.log(location)
    return (
        <Navbar expand="lg" variant="dark" sticky="top">
            <div className="container-fluid col-lg-10 col-12">
                <LinkContainer to="/" exact>
                    <Navbar.Brand><img src={`${folder}/img/logo.png`} className="logo" alt="Logo" /></Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="navbar-text">
                    <Nav className="mr-auto" activeKey={location.pathname}>
                        <LinkContainer to="/" exact>
                            <Nav.Link className="navbar-text">Inicio</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/about" >
                            <Nav.Link className="navbar-text">Nuestro Equipo</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/services" >
                            <Nav.Link className="navbar-text">Servicios</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/portfolio" >
                            <Nav.Link className="navbar-text">Portafolio</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/voice-bank" >
                            <Nav.Link className="navbar-text">Banco de Voces</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/contact" >
                            <Nav.Link className="navbar-text">Contactanos</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Nav>
                        <Nav.Link className="nav-link d-none d-xl-block" href="https://www.facebook.com" target="_blank">
                            <i className="fab fa-facebook-square"></i>
                        </Nav.Link>
                        <Nav.Link className="nav-link d-none d-xl-block" href="https://www.instagram.com" target="_blank">
                            <i className="fab fa-instagram"></i>
                        </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </div>
        </Navbar>

    )
}

