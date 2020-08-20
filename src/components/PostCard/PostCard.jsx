import React from 'react'
import {Card} from 'react-bootstrap'
import PostCardStyle from './PostCard.module.css'

const RenderTask = ({title, description}) => {
    return (
        <Card border='light' width='100%' className={`${PostCardStyle.card}`}>
            <Card.Img src={require('./../assets/images/Xcode-fragment.png')} className={`${PostCardStyle.cardImg}`}/>
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
            {cardsArray.reverse()}
        </div>
    )
}

export default PostCard