import React from 'react'
import {Card} from 'react-bootstrap'
import PostCardStyle from './PostCardStyle.module.css'

const RenderTask = ({title, description, type}) => {
    return (
        <Card bg='light' style={{width: '100%'}} className='mb-5'>
            <Card.Img variant="left" src="holder.js/100px200" fluid/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Type: {type}</small>
            </Card.Footer>
        </Card>
    )
}


const PostCard = (props) => {
    const cardsArray = props.task.map(task => (
        <RenderTask
            title={task.title}
            description={task.description}
            type={task.type}
            id={task.id}/>
    ))

    return (
        <div>
            {cardsArray}
        </div>
    )
}


export default PostCard