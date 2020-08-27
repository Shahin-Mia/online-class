import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';


const Header = () => {
    return (
        <div className="header">
            <Navbar variant="dark" fixed="top">
                <Navbar.Brand href="#home">OnLine School</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home" className="ml-3">Home</Nav.Link>
                    <Nav.Link href="#features" className="ml-3">About</Nav.Link>
                    <Nav.Link href="#pricing" className="ml-3">Courses</Nav.Link>
                </Nav>
            </Navbar>

        </div>
    );
};

export default Header;