import React from 'react'
import {Button, Form} from 'react-bootstrap'
import CreatePostStyle from './CreatePost.module.css'

const CreatePost = props => {
    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }

    return (
        <Form className={`${CreatePostStyle.form} ${'mt-4 mb-4'}`}>
            <Form.Group>
                <Form.Control className={`${CreatePostStyle.form}`} as="textarea" ref={newPostElement} rows="3" placeholder="Write about your problem..."/>
            </Form.Group>

            <Form.Group>
                <Button onClick={addPost} variant="dark">Post</Button>
            </Form.Group>
        </Form>
    )
}

export default CreatePost