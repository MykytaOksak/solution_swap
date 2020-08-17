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
        <div>
            <Header/>
            <Container>
                <Row>
                    <Col>
                        <Route path='/Home' render={() => <Home tasks={props.state}/>}/>
                        <Route path='/AllTasks' render={() => <AllTasks tasks={props.state.AllTasks} addPost={props.addPost} />} />
                        <Route path='/PB' render={() => <PB tasks={props.state.PB} addPost={props.addPost} />}/>
                        <Route path='/MathStat' render={() => <MathStat tasks={props.state.MathStat} addPost={props.addPost} />}/>
                        <Route path='/MathLog' render={() => <MathLog tasks={props.state.MathLog} addPost={props.addPost} />}/>
                        <Redirect to='/Home'/>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    )
}

export default App
