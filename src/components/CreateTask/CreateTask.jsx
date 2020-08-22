import React from 'react'
import {ButtonGroup, Button, Col, Form, Modal, Row} from 'react-bootstrap'
import CreateTaskStyle from './CreateTask.module.css'
import {
    addTaskActionCreator,
    changeShowModalActionCreator,
    updateNewTaskDescriptionActionCreator,
    updateNewTaskTitleActionCreator,
} from '../../redux/createTaskReducer';

const CreateTask = props => {
    let show = props.showModal
    let newTaskTitle = React.createRef()
    let newTaskDescription = React.createRef()
    const handleOnClick = () => props.dispatch(changeShowModalActionCreator())
    let handleOnClickPost = () => {
        /*        let taskTitle = newTaskTitle.current.value;
                let taskDescription = newTaskDescription.current.value;*/
        props.dispatch(addTaskActionCreator())
        props.dispatch(changeShowModalActionCreator())
    }
    const titleOnChangeHandler = () => props.dispatch(updateNewTaskTitleActionCreator(newTaskTitle.current.value))
    const descriptionOnChangeHandler = () => props.dispatch(updateNewTaskDescriptionActionCreator(newTaskDescription.current.value))
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
                        <Form.Group as={Row}>
                            <Form.Label className={`${CreateTaskStyle.formLabel}`} column sm={2}>Task type</Form.Label>
                            <Col sm={3}>
                                <Form.Control className={`${CreateTaskStyle.formSelect}`} as="select">
                                    <option value="0">Choose</option>
                                    <option value="1">PB</option>
                                    <option value="2">MathStat</option>
                                    <option value="3">MathLog</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label className={`${CreateTaskStyle.formLabel}`} column sm={2}>Task name</Form.Label>
                            <Col sm={10}>
                                <Form.Control className={`${CreateTaskStyle.formTextArea}`}
                                              as='textarea'
                                              ref={newTaskTitle}
                                              rows='1'
                                              placeholder='Name your problem'
                                              value={props.newTaskTitle}
                                              onChange={titleOnChangeHandler}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label className={`${CreateTaskStyle.formLabel}`} column
                                        sm={2}>Description</Form.Label>
                            <Col sm={10}>
                                <Form.Control className={`${CreateTaskStyle.formTextArea}`}
                                              as="textarea"
                                              ref={newTaskDescription}
                                              rows="3"
                                              placeholder='Write about your problem...'
                                              value={props.newTaskDescription}
                                              onChange={descriptionOnChangeHandler}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className='mb-0'>
                            <Form.Label className={`${CreateTaskStyle.formLabel}`} column sm={2}>Attachment</Form.Label>
                            <Col sm={5}>
                                <Form.File/>
                            </Col>
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer className={CreateTaskStyle.modalFooter}>
                    <ButtonGroup>
                        <Button className={`${CreateTaskStyle.btn}`} variant="secondary"
                                onClick={handleOnClick}>Close</Button>
                        <Button className={`${CreateTaskStyle.btn}`} variant="primary"
                                onClick={handleOnClickPost}>Post</Button>
                    </ButtonGroup>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default CreateTask