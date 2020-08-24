import React from 'react'
import {Col, Container, Jumbotron, Nav, Navbar, Row} from 'react-bootstrap'
import HeaderStyle from './Header.module.css'
import {Link} from 'react-router-dom';
import CreateTaskContainer from '../CreateTask/CreateTaskContainer';

const NavBar = () => {
    return(
        <Navbar sticky="top" className={HeaderStyle.navbar} collapseOnSelect expand="sm" variant="dark">
            <Navbar.Brand>
                <img src={require('./../assets/images/swapLogo.png')} width='30' height='30'  alt='solution swap logo'/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <Nav.Link className={HeaderStyle.a} eventKey={1} as={Link} to="/Home">Home</Nav.Link>
                    <Nav.Link className={HeaderStyle.a} eventKey={2} as={Link} to="/AllTasks">All tasks</Nav.Link>
                    <Nav.Link className={HeaderStyle.a} eventKey={3} as={Link} to="/PB">PB</Nav.Link>
                    <Nav.Link className={HeaderStyle.a} eventKey={4} as={Link} to="/MathStat">Math stat</Nav.Link>
                    <Nav.Link className={HeaderStyle.a} eventKey={5} as={Link} to="/MathLog">Math log</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
const Header = props => {
    return (
        <React.Fragment>
            <NavBar />
            <Jumbotron className={HeaderStyle.jumbotron}>
                <Container>
                    <Row>
                        <Col>
                            <h1>Solution Swap</h1>
                            <h5 className='mb-3'>Exchange your solutions with others</h5>
                            <CreateTaskContainer store={props.store}/>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </React.Fragment>
    )
}

export default Header