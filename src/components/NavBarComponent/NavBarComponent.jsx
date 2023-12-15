import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";
import logo from '../../images/logo2.png';

import { Link } from "react-router-dom";

export const NavBarComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" style={{height: "60px"}}> <Link to={"/"}><img src={logo} style={{height: "60px"}}/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" style={{ textDecoration: "none", color: "black", display: "flex", margin: "8px"}}>Home</Link>
            <Link to="#link" style={{ textDecoration: "none", color: "black", display: "flex", margin: "8px"}}>Productos</Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <Link to={"/category/Nike"} style={{ textDecoration: "none", color: "black", display: "flex", margin: "5px" }}>Nike</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <Link to={"/category/Jordan"} style={{ textDecoration: "none", color: "black", display: "flex", margin: "5px" }}>Jordan</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                <Link to={"/category/Adidas"} style={{ textDecoration: "none", color: "black", display: "flex", margin: "5px" }}>Adidas</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                <Link to={"/category/Yeezy"} style={{ textDecoration: "none", color: "black", display: "flex", margin: "5px" }}>Yeezy</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidgetComponent />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


