import React from 'react'
import {Row, Col, Container, Nav} from 'react-bootstrap'
import FooterStyle from './Footer.module.css'

const Footer = props => {
    console.log(props)
    return (
        <footer className={FooterStyle.jumbotron}>
            <Container >
                <Row>
                    <Col>
                        <h4>Telegram</h4>
                        <a href='https://t.me/sdraste'>Link</a>
                    </Col>
                    <Col>
                        <h4>Instagram</h4>
                        <a href='https://instagram.com/ssdraste'>Link</a>
                    </Col>
                    <Col>
                        <h4>LinkedIn</h4>
                        <a href='https://www.linkedin.com/in/mykyta-oksak-8b90b91b4/'>Link</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer