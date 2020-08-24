import React from 'react'
import PostCard from '../PostCard/PostCard'

const AllTasks = props => {
    let state = props.store.getState().allTasks
    return (
        <PostCard tasks={state.AllTasks}/>
    )
}

export default AllTasks