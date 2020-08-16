import React from 'react'
import {Card} from 'react-bootstrap'
import PostCardStyle from './PostCardStyle.module.css'

const RenderTask = ({title, description}) => {
    return (
        <Card bg='light' border="light" style={{width: '100%'}} className='mb-5' width='100%'>
            <Card.Img variant="left" src='./Xcode-fragment.png' width='100%'/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last edited: 3 min ago</small>
            </Card.Footer>
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