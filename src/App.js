import React from 'react'
import './App.css'
import {Container} from 'react-bootstrap'
import Header from './components/Header/Header'
import AllTasks from './components/AllTasks/AllTasks'
import PB from './components/PB/PB';
import {BrowserRouter, Route} from 'react-router-dom';
import MathStat from './components/MathStat/MathStat';
import MathLog from './components/MathLog/MathLog';
import Home from './components/Home/Home';

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Container className='col-11 col-md-6 mt-3'>
                <Route path='/solutions_swap' exact component={Home}/>
                <Route path='/AllTasks' component={AllTasks}/>
                <Route path='/PB' component={PB}/>
                <Route path='/MathStat' component={MathStat}/>
                <Route path='/MathLog' component={MathLog}/>
            </Container>
        </BrowserRouter>
    )
}

export default App
