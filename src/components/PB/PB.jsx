import React from 'react'
import PostCard from '../PostCard/PostCard'

const PB = props => {
    let state = props.store.getState().pb
    return (
        <PostCard tasks={state.PB}/>
    )
}

export default PB