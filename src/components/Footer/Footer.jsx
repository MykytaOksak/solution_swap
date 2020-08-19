import React from 'react'
import {Col, Container, Nav, Navbar, Row} from 'react-bootstrap'
import FooterStyle from './Footer.module.css'
import HeaderStyle from '../Header/Header.module.css';

const Footer = props => {
    console.log(props)
    return (
        <footer className={FooterStyle.footer}>
            <Container>
                <Row>
                    <Col>
                        <Navbar variant='light' className='justify-content-center'>
                            <Nav>
                                <Nav.Link className={FooterStyle.a} href='https://t.me/sdraste'>telegram</Nav.Link>
                                <Nav.Link className={FooterStyle.a} href='https://instagram.com/ssdraste'>instagram</Nav.Link>
                                <Nav.Link className={FooterStyle.a} href='https://www.linkedin.com/in/mykyta-oksak-8b90b91b4/'>linkedIn</Nav.Link>
                            </Nav>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer