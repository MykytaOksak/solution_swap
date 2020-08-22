import React from 'react'
import PostCard from '../PostCard/PostCard'

const MathStat = props => {
    return (
        <div>
            <PostCard tasks={props.tasks} />
        </div>
    )
}

export default MathStat