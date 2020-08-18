import React from 'react'
import {Button, Col, Container, Jumbotron, Nav, Navbar, Row} from 'react-bootstrap'
import HeaderStyle from './Header.module.css'
import {Link} from 'react-router-dom';
import CreatePost from './../CreatePost/CreatePost';

const NavBar = () => {
    return(
        <Navbar sticky="top" className={HeaderStyle.navbar} collapseOnSelect expand="sm" variant="dark">
            <Navbar.Brand>
                <img src={require('./swapLogo.png')} width='30' height='30' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <Nav.Link eventKey={2} as={Link} to="/Home">Home</Nav.Link>
                    <Nav.Link eventKey={1} as={Link} to="/AllTasks">All tasks</Nav.Link>
                    <Nav.Link eventKey={3} as={Link} to="/PB">PB</Nav.Link>
                    <Nav.Link eventKey={4} as={Link} to="/MathStat">Math stat</Nav.Link>
                    <Nav.Link eventKey={5} as={Link} to="/MathLog">Math log</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
const Header = props => {
    console.log(props)
    return (
        <React.Fragment>
            <NavBar />

            <Jumbotron className={HeaderStyle.jumbotron}>
                <Container>
                    <Row>
                        <Col className='col-12 col-sm-6'>
                            <h1>Solution Swap</h1>
                            <p>Exchange your solutions with others</p>
                            <p>
                                <CreatePost changeShowModal={props.changeShowModal}
                                            addPost={props.addPost}
                                            showModal={props.showModal}
                                            newPostValue={props.newPostValue}
                                            updateNewPostValue={props.updateNewPostValue}
                                />
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </React.Fragment>
    )
}

export default Header