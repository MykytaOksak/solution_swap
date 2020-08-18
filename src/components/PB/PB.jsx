import React from 'react'
import PostCard from '../PostCard/PostCard'

const PB = props => {
    return (
        <div>
            <PostCard task={props.tasks}/>
        </div>
    )
}

export default PB