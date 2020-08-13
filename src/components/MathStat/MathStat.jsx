import React from 'react'
import CreatePost from './../CreatePost/CreatePost'
import PostCard from '../PostCard/PostCard'
import {TASKS} from './../shared/tasks'

const MathStat = () => {
    let MathStatTasks = TASKS.filter(task => task.type=='MathStat')

    return (
        <div>
            <CreatePost/>
            <PostCard task={MathStatTasks}/>
        </div>
    )
}

export default MathStat