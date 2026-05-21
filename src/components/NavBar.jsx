import {NavLink} from "react-router-dom";
import {Badge, Container, Nav, Navbar} from "react-bootstrap";
import {Cart3, HouseDoor, InfoCircle, Stars} from "react-bootstrap-icons";

function NavBar(){
    return (
        <Navbar expand="md" sticky="top" className="bg-white border-bottom py-2">
            <Container>
                <Navbar.Brand as={NavLink} to="/">                
                <span>CatsCatsCats</span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="primary-nav"/>
                <Navbar.Collapse id="primary-nav">
                    <Nav>
                        <Nav.Link as={NavLink} to="/">
                        <HouseDoor aria-hidden="true"/> <span>Home</span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar