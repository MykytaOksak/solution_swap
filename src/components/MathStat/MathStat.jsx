import React from 'react'
import PostCard from '../PostCard/PostCard'

const MathStat = props => {
    let state = props.store.getState().mathStat
    return (
        <PostCard tasks={state.MathStat}/>
    )
}

export default MathStat