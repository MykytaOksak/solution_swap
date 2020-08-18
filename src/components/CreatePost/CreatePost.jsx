import React from 'react'
import {Modal, Button, Form} from 'react-bootstrap'
import CreatePostStyle from './CreatePost.module.css'

const CreatePost = props => {

    let show = props.showModal
    let newPostElement = React.createRef()

    const handleClose = () => {
        props.changeShowModal();
    }
    const handleShow = () => {
        props.changeShowModal();
    }
    let handlePost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        props.changeShowModal();
    }

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Pomogite ya obosrals'a
            </Button>

            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Body>Woohoo, you're reading this text in a modal!
                    <Form className={`${CreatePostStyle.form} ${'mt-4 mb-4'}`}>
                        <Form.Group>
                            <Form.Control className={`${CreatePostStyle.form}`} as="textarea" ref={newPostElement} rows="3" placeholder="Write about your problem..."/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handlePost}>
                        Post
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );

}

export default CreatePost