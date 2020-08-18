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
            <Header changeShowModal={props.changeShowModal}
                    addPost={props.addPost}
                    showModal={props.state.showModal}
                    newPostValue={props.state.newPostValue}
                    updateNewPostValue={props.updateNewPostValue}
            />
            <Container>
                <Row>
                    <Col>
                        <Route path='/Home' render={() => <Home tasks={props.state}/>}/>
                        <Route path='/AllTasks' render={() => <AllTasks tasks={props.state.tasks.AllTasks} addPost={props.addPost} />} />
                        <Route path='/PB' render={() => <PB tasks={props.state.tasks.PB} addPost={props.addPost} />}/>
                        <Route path='/MathStat' render={() => <MathStat tasks={props.state.tasks.MathStat} addPost={props.addPost} />} />
                        <Route path='/MathLog' render={() => <MathLog tasks={props.state.tasks.MathLog} addPost={props.addPost} />} />
                        <Redirect to='/AllTasks' />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default App
