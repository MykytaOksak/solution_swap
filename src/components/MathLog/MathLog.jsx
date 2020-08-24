import React from 'react'
import PostCard from '../PostCard/PostCard'

const MathLog = props => {
    let state = props.store.getState().mathLog
    return (
        <PostCard tasks={state.MathLog}/>
    )
}

export default MathLog