import React from 'react'
import CreatePost from './../CreatePost/CreatePost'
import PostCard from '../PostCard/PostCard'
import {TASKS} from './../shared/tasks'

const PB = () => {
    let PBTasks = TASKS.filter(task => task.type === 'PB')

    return (
        <div>
            <CreatePost/>
            <PostCard task={PBTasks}/>
        </div>
    )
}

export default PB