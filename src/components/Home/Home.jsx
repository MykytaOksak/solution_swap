import React from 'react'
import HomeStyle from './Home.module.css'

const Home = props => {
    return (
        <div className={`${HomeStyle.home} ${'mt-4 mb-4'}`}>
            <h4>There is still nothing here =(</h4>
        </div>
    )
}

export default Home