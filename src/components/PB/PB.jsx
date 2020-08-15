import React from 'react'
import CreatePost from './../CreatePost/CreatePost'
import PostCard from '../PostCard/PostCard'

const PB = props => {
    return (
        <div>
            <CreatePost/>
            <PostCard task={props.tasks}/>
        </div>
    )
}

export default PB