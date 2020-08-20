import React from 'react'
import {ModalDialog, Modal, Button, Form} from 'react-bootstrap'
import CreateTaskStyle from './CreateTask.module.css'

const CreateTask = props => {
    let show = props.showModal
    let newTaskTitle = React.createRef()
    let newTaskDescription = React.createRef()
    const handleOnClick = () => props.changeShowModal()
    let handleOnClickPost = () => {
        let taskTitle = newTaskTitle.current.value;
        let taskDescription = newTaskDescription.current.value;
        props.addPost(taskTitle, taskDescription);
        props.changeShowModal();
    }
    const titleOnChangeHandler = () => props.updateNewPostValue(newTaskTitle.current.value)
    const descriptionOnChangeHandler = () => props.updateNewPostValue(newTaskDescription.current.value)
    return (
        <div>
            <Button variant='primary' className={CreateTaskStyle.btn} onClick={handleOnClick}>
                Pomogite ya obosrals'a
            </Button>

            <Modal className={CreateTaskStyle.modal}
                   dialogClassName={CreateTaskStyle.modalDialog}
                   size='lg'
                   show={show}>
                <Modal.Body className={`${CreateTaskStyle.modalBody}`}>
                    <Form>
                        <Form.Group>
                            <Form.Label>Task name</Form.Label>
                            <Form.Control className={`${CreateTaskStyle.formTextArea}`}
                                          as='textarea'
                                          ref={newTaskTitle}
                                          rows='1'
                                          placeholder='Name your problem'
                                          value={props.newTaskTitle}
                                          onChange={titleOnChangeHandler}
                            />
                        </Form.Group>
                        <Form.Group className='mb-0'>
                            <Form.Label>Description</Form.Label>
                            <Form.Control className={`${CreateTaskStyle.formTextArea}`}
                                          as="textarea"
                                          ref={newTaskDescription}
                                          rows="3"
                                          placeholder='Write about your problem...'
                                          value={props.newTaskDescription}
                                          onChange={descriptionOnChangeHandler}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className={CreateTaskStyle.modalFooter}>
                    <Button variant="secondary" onClick={handleOnClick}>Close</Button>
                    <Button variant="primary" onClick={handleOnClickPost}>Post</Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
}

export default CreateTask