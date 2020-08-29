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
