import React from 'react'
import {
    addMathLogTaskActionCreator,
    addMathStatTaskActionCreator,
    addPBTaskActionCreator,
    addTaskActionCreator,
    closeModalActionCreator,
    showModalActionCreator,
    updateNewTaskDescriptionActionCreator,
    updateNewTaskTitleActionCreator,
    updateTypeActionCreator,
} from '../../redux/actions'
import CreateTask from './CreateTask'
import { connect } from 'react-redux';

/*const CreateTaskContainer = props => {
    const newTaskTitle = props.store.getState().createTask.newTaskTitle
    const newTaskDescription = props.store.getState().createTask.newTaskDescription
    const showModal = props.store.getState().createTask.showModal
    const newTaskType = props.store.getState().createTask.newTaskType

    const onShowModal = () => props.store.dispatch(showModalActionCreator())

    const onCloseModal = () => props.store.dispatch(closeModalActionCreator())

    const onNewTaskTitleChange = (newText) => props.store.dispatch(updateNewTaskTitleActionCreator(newText))

    const onNewTaskDescriptionChange = (newText) => props.store.dispatch(updateNewTaskDescriptionActionCreator(newText))

    const onAddTask = (newTitle, newDescription, newType) => {
        props.store.dispatch(addTaskActionCreator(newTitle, newDescription))
        switch (newType) {
            case 'PB':
                props.store.dispatch(addPBTaskActionCreator(newTitle, newDescription))
                break
            case 'MathStat':
                props.store.dispatch(addMathStatTaskActionCreator(newTitle, newDescription))
                break
            case 'MathLog':
                props.store.dispatch(addMathLogTaskActionCreator(newTitle, newDescription))
                break
            default:
                break
        }
    }

    const onTypeChange = (type) => props.store.dispatch(updateTypeActionCreator(type))

    return <CreateTask showModal={onShowModal}
                       closeModal={onCloseModal}
                       updateNewTaskTitle={onNewTaskTitleChange}
                       updateNewTaskDescription={onNewTaskDescriptionChange}
                       addTask={onAddTask}
                       updateType={onTypeChange}
                       newTaskTitle={newTaskTitle}
                       newTaskDescription={newTaskDescription}
                       show={showModal}
                       newTaskType={newTaskType}
    />
}*/

const mapStateToProps = (state) => {
    return {
        newTaskTitle: state.createTask.newTaskTitle,
        newTaskDescription: state.createTask.newTaskDescription,
        show: state.createTask.showModal,
        newTaskType: state.createTask.newTaskType,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showModal: () => dispatch(showModalActionCreator()),
        closeModal: () => dispatch(closeModalActionCreator()),
        updateNewTaskTitle: (newText) => dispatch(updateNewTaskTitleActionCreator(newText)),
        updateNewTaskDescription: (newText) => dispatch(updateNewTaskDescriptionActionCreator(newText)),
        addTask: (newTitle, newDescription, newType) => {
            dispatch(addTaskActionCreator(newTitle, newDescription))
            switch (newType) {
                case 'PB':
                    dispatch(addPBTaskActionCreator(newTitle, newDescription))
                    break
                case 'MathStat':
                    dispatch(addMathStatTaskActionCreator(newTitle, newDescription))
                    break
                case 'MathLog':
                    dispatch(addMathLogTaskActionCreator(newTitle, newDescription))
                    break
                default:
                    break
            }
        },
        updateType: (type) => dispatch(updateTypeActionCreator(type)),
    }
}

const CreateTaskContainer = connect(mapStateToProps, mapDispatchToProps)(CreateTask)

export default CreateTaskContainer
