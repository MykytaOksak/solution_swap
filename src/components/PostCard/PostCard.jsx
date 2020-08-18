import React from 'react'
import {Card} from 'react-bootstrap'
import PostCardStyle from './PostCardStyle.module.css'

const RenderTask = ({title, description}) => {
    return (
        <Card border="light" style={{width: '100%'}} width='100%' className={`${PostCardStyle.card}`}>
            <Card.Img src={require('./../assets/images/Xcode-fragment.png')} style={{borderTopLeftRadius: 16, borderTopRightRadius: 16}}/>
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