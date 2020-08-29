import React from 'react'
import { Button, Container, Form, Modal, Row } from 'react-bootstrap'
import CreateTaskStyle from './CreateTask.module.css'

const CreateTask = props => {

    const show = props.show

    const onShow = () => props.showModal()

    const onClose = () => props.closeModal()

    const onAddTask = () => {
        props.addTask(props.newTaskTitle, props.newTaskDescription, props.newTaskType)
        props.closeModal()
    }

    const onTitleChange = (e) => props.updateNewTaskTitle(e.target.value)

    const onDescriptionChange = (e) => props.updateNewTaskDescription(e.target.value)

    const onSelectChange = (e) => props.updateType(e.target.value)

    return (
        <>
            <Button variant='primary' className={CreateTaskStyle.btn} onClick={onShow}>
                Add task
            </Button>
            <Modal className={CreateTaskStyle.modal}
                dialogClassName={CreateTaskStyle.modalDialog}
                size='lg'
                show={show}
                onHide={onClose}>
                <Container>
                    <Modal.Body className={`${CreateTaskStyle.modalBody}`}>
                        <Form>
                            <Form.Group as={Row} className='mb-4'>
                                <Form.Label className={`${CreateTaskStyle.formLabel}`}>Task type</Form.Label>
                                <Form.Control className={`${CreateTaskStyle.formSelect}`}
                                    as='select'
                                    value={props.newTaskType}
                                    onChange={onSelectChange}>
                                    <option value=''>Choose</option>
                                    <option value='PB'>PB</option>
                                    <option value='MathStat'>MathStat</option>
                                    <option value='MathLog'>MathLog</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Row} className='mb-4'>
                                <Form.Label className={`${CreateTaskStyle.formLabel}`}>Task name</Form.Label>
                                <Form.Control className={`${CreateTaskStyle.formTextArea}`}
                                    as='textarea'
                                    rows='1'
                                    placeholder='Name your problem'
                                    value={props.newTaskTitle}
                                    onChange={onTitleChange}
                                />
                            </Form.Group>
                            <Form.Group as={Row} className='mb-4'>
                                <Form.Label className={`${CreateTaskStyle.formLabel}`}>Description</Form.Label>
                                <Form.Control className={`${CreateTaskStyle.formTextArea}`}
                                    as="textarea"
                                    rows="3"
                                    placeholder='Write about your problem...'
                                    value={props.newTaskDescription}
                                    onChange={onDescriptionChange}
                                />
                            </Form.Group>
                            <Form.Group as={Row} className='mb-4'>
                                <Form.Label className={`${CreateTaskStyle.formLabel}`}>Attachment</Form.Label>
                                <Form.Control name="images[]" type="file" multiple />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                </Container>
                <Modal.Footer as={Button}
                    onClick={onAddTask}
                    variant='primary'
                    className={CreateTaskStyle.modalFooter}>
                    <p className='mr-auto ml-auto'>ADD TASK</p>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CreateTask