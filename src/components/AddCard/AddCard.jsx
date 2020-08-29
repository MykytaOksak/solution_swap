import React from 'react'
import { Card } from 'react-bootstrap'
import AddCardStyle from './AddCard.module.css'

const RenderTask = ({ title, description }) => {
    return (
        <Card border='light' className={`${AddCardStyle.card}`}>
            <Card.Img src={require('./../assets/images/Xcode-fragment.png')} className={`${AddCardStyle.cardImg}`} />
            <Card.Body >
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    )
}

const AddCard = props => {
    props.getUsers()
    const tasks = props.tasks.map(task => (
        <RenderTask
            title={task.title}
            description={task.description}
            id={task.id} />
    ))
    return (
        tasks.reverse()
    )
}

export default AddCard