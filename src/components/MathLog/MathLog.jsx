import React from 'react'
import PostCard from '../PostCard/PostCard'

const MathLog = props => {
    return (
        <div>
            <PostCard tasks={props.tasks} />
        </div>
    )
}

export default MathLog