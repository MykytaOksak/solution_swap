import React from 'react'
import PostCard from '../PostCard/PostCard'

const AllTasks = props => {
        return (
        <div>
            <PostCard task={props.tasks} />
        </div>
    )
}

export default AllTasks