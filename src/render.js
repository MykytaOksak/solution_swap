import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App'
import {addPost, changeShowModal} from './components/redux/state'
import {BrowserRouter} from "react-router-dom"

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} changeShowModal={changeShowModal} addPost={addPost}/>
        </BrowserRouter>, document.getElementById('root'))
}