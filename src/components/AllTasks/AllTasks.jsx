import React from 'react'
import CreatePost from './../CreatePost/CreatePost'
import PostCard from '../PostCard/PostCard'
import { TASKS } from './../shared/tasks'

const AllTasks = () => {
    return (
        <div>
            <CreatePost/>
            <PostCard task={TASKS}/>
        </div>
    )
}

export default AllTasks