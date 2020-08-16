import React from 'react'
import {Button, Form} from 'react-bootstrap'
import CreatePostStyle from './CreatePost.module.css'
const CreatePost = () => {
    return (
        <Form className={`${CreatePostStyle.form} ${'mt-4 mb-4'}`}>
            <Form.Group>
                <Form.Control className={`${CreatePostStyle.form}`} as="textarea" rows="3" placeholder="Write about your problem..."/>
            </Form.Group>

            <Form.Group>

                <Button variant="dark">Post</Button>
            </Form.Group>
        </Form>
    )
}

export default CreatePost