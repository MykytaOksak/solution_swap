import React from 'react'
import './App.css'
import {Col, Container, Row} from 'react-bootstrap'
import Header from './components/Header/Header'
import AllTasks from './components/AllTasks/AllTasks'
import PB from './components/PB/PB';
import {BrowserRouter, Redirect, Route} from 'react-router-dom';
import MathStat from './components/MathStat/MathStat';
import MathLog from './components/MathLog/MathLog';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

const App = props => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header/>
            <Container>
                <Row>
                    <Col>
                        <Route path='/Home' render={() => <Home tasks={props.state}/>}/>
                        <Route path='/AllTasks' render={() => <AllTasks tasks={props.state.AllTasks}/>}/>
                        <Route path='/PB' render={() => <PB tasks={props.state.PB}/>}/>
                        <Route path='/MathStat' render={() => <MathStat tasks={props.state.MathStat}/>}/>
                        <Route path='/MathLog' render={() => <MathLog tasks={props.state.MathLog}/>}/>
                        <Redirect to='/home'/>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </BrowserRouter>
    )
}

export default App
