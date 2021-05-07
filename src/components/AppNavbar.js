import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

class AppNavbar extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <Navbar bg="dark" variant="dark" className="mb-3">
                <Navbar.Brand href="#home">My Movies lists</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/#/Movies">Movies</Nav.Link>
                    <Nav.Link href="/#/Actors">actors</Nav.Link>
                </Nav>
            </Navbar>

        )
    }
}
export default AppNavbar