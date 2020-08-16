import React from 'react'
import {Image, Card} from 'react-bootstrap'
import PostCardStyle from './PostCardStyle.module.css'

const RenderTask = ({title, description}) => {
    return (
        <Card border="light" style={{width: '100%'}} width='100%' /*className='mb-5'*/ className={`${PostCardStyle.card}`}>
            <Card.Img src='./Xcode-fragment.png' width='100%' style={{borderTopLeftRadius: 16, borderTopRightRadius: 16}}/>
            <Card.Body >
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    )
}


const PostCard = props => {
    const cardsArray = props.task.map(task => (
        <RenderTask
            title={task.title}
            description={task.description}
            id={task.id}/>
    ))

    return (
        <div>
            {cardsArray}
        </div>
    )
}


export default PostCard