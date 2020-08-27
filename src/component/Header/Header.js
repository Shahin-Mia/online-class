import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <Navbar variant="dark" className="mb-5">
                    <Navbar.Brand href="#home">OnLine School</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" className="ml-3">Home</Nav.Link>
                        <Nav.Link href="#features" className="ml-3">About</Nav.Link>
                        <Nav.Link href="#pricing" className="ml-3">Courses</Nav.Link>
                    </Nav>
                </Navbar>

                <div className="welcome-section">
                    <h1>Welcome to Our Online School</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus perferendis quidem dolorum sit! Earum sed sunt cupiditate a hic deleniti ex exercitationem deserunt voluptate? Ducimus vero dignissimos excepturi aliquid mollitia.</p>
                </div>
            </div>

        </header>
    );
};

export default Header;