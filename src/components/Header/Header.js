import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Nav, Navbar, Button } from "react-bootstrap";
import { UserContext } from "../../App";

const Header = () => {
    const [loggedInUser] = useContext(UserContext);
    const { isSignedIn, name } = loggedInUser;
    return (
        <Navbar bg="light" expand="lg">
            <div className="container">
                <Navbar.Brand as ={Link} to="/home" >Destinigo <span>Metro</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as ={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as ={Link} to="/home">Blog</Nav.Link>
                        <Nav.Link as ={Link} to="/home" >Contact</Nav.Link>
                    </Nav>
                    {isSignedIn ? <h4>{name}</h4> :
                        <Button as={Link} to='/login'  variant="primary">Log In</Button>}
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default Header;
