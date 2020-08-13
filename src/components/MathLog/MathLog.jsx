import React from 'react'
import CreatePost from './../CreatePost/CreatePost'
import PostCard from '../PostCard/PostCard'
import {TASKS} from './../shared/tasks'

const MathLog = () => {
    let MathLogTasks = TASKS.filter(task => task.type=='MathLog')

    return (
        <div>
            <CreatePost task={MathLogTasks}/>
            <PostCard/>

        </div>
    )
}

export default MathLog