import React from 'react'
import {Button, Form} from 'react-bootstrap'

const CreatePost = () => {
    return (
        <Form>
            <Form.Group>
                <Form.Control as="textarea" rows="3" placeholder="Write about your problem..."/>
            </Form.Group>

            <Form.Group>

                <Button variant="dark">Post</Button>
            </Form.Group>
        </Form>
    )
}

export default CreatePost