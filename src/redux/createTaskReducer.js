import {CHANGE_TYPE, CLOSE_MODAL, SHOW_MODAL, UPDATE_NEW_TASK_DESCRIPTION, UPDATE_NEW_TASK_TITLE} from './actions';

export const initialState = {
    showModal: false,
    newTaskTitle: '',
    newTaskDescription: '',
    newTaskType: '',
}

export const createTaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_TASK_TITLE: {
            return {
                ...state,
                newTaskTitle: action.newText
            }
        }
        case UPDATE_NEW_TASK_DESCRIPTION: {
            return {
                ...state,
                newTaskDescription: action.newText
            }
        }
        case CLOSE_MODAL: {
            return {
                ...state,
                showModal: false,
                newTaskTitle: '',
                newTaskDescription: '',
                newTaskType: ''
            }
        }
        case SHOW_MODAL: {
            return {
                ...state,
                showModal: true
            }
        }
        case CHANGE_TYPE: {
            return {
                ...state,
                newTaskType: action.newType
            }
        }
        default:
            return state
    }
}

export default createTaskReducer