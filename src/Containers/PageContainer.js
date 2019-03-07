import React, { Component } from "react";
import { Navbar, NavDropdown, Nav, Form, FormControl, Button, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function PageContainer(props) {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <LinkContainer to="/hello">
                    <Navbar.Brand>
                        <b>IDK-do</b> <small>(Idée Cadeau)</small>
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/list">
                            <Nav.Link>Ma liste</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/sharedWithMe">
                            <Nav.Link>partagées avec moi</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Nav pullright="true">
                        <LinkContainer to="/disconnect">
                            <Nav.Link>se Déconnecter</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container>{props.children}</Container>
        </>
    );
}
