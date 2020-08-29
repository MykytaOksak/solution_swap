import React from 'react'
import './App.css'
import {Col, Container, Row} from 'react-bootstrap'
import Header from './components/Header/Header'
import AllTasks from './components/AllTasks/AllTasks'
import PB from './components/PB/PB';
import {Redirect, Route} from 'react-router-dom';
import MathStat from './components/MathStat/MathStat';
import MathLog from './components/MathLog/MathLog';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';


const App = props => {
    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Col>
                        <Route path='/Home' render={() => <Home />} />
                        <Route path='/AllTasks' render={() => <AllTasks />} />
{/*                         <Route path='/PB' render={() => <PB store={props.store} />} />
                        <Route path='/MathStat' render={() => <MathStat store={props.store} />} />
                        <Route path='/MathLog' render={() => <MathLog store={props.store} />} /> */}
                        <Redirect to='/AllTasks' />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default App
