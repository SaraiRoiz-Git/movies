import React from 'react';
import { Form, ListGroup, Nav, Navbar } from 'react-bootstrap';

class AppNavbar extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <Navbar bg="dark" variant="dark" className="mb-3">
                <Navbar.Brand href="#home">My Movies lists</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#/movies">Movies</Nav.Link>
                    <Nav.Link href="#/actors">actors</Nav.Link>
                    {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                </Nav>
            </Navbar>

        )
    }
}
export default AppNavbar