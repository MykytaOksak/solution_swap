import React from 'react'
import PostCard from '../PostCard/PostCard'

const PB = props => {
    return (
        <div>
            <PostCard tasks={props.tasks}/>
        </div>
    )
}

export default PB