import React from 'react'
import {Navbar, Jumbotron, Nav} from 'react-bootstrap'
import HeaderStyle from './Header.module.css'
import {Link} from 'react-router-dom';


const Header = props => {
    console.log(props)
    return (
        <Jumbotron className={HeaderStyle.jumbotron}>
            <Navbar collapseOnSelect expand="sm" variant="dark">
                <Navbar.Brand as={Link} to="/"><h3>Solutions Swap</h3></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link eventKey={1} as={Link} className={HeaderStyle.nav} to="/AllTasks">All tasks</Nav.Link>
                        <Nav.Link eventKey={2} as={Link} className={HeaderStyle.nav} to="/PB">PB</Nav.Link>
                        <Nav.Link eventKey={3} as={Link} className={HeaderStyle.nav} to="/MathStat">Math stat</Nav.Link>
                        <Nav.Link eventKey={4} as={Link} className={HeaderStyle.nav} to="/MathLog">Math log</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Jumbotron>
    )
}

export default Header