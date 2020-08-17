import React from 'react'
import CreatePost from './../CreatePost/CreatePost'
import PostCard from '../PostCard/PostCard'

const MathLog = props => {
    return (
        <div>
            <CreatePost addPost={props.addPost} />
            <PostCard task={props.tasks} />
        </div>
    )
}

export default MathLog