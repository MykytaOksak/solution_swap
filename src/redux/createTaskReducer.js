import {CLOSE_MODAL, SHOW_MODAL, UPDATE_NEW_TASK_DESCRIPTION, UPDATE_NEW_TASK_TITLE, CHANGE_TYPE} from './actions';

export const initialState = {
    showModal: false,
    newTaskTitle: '',
    newTaskDescription: '',
    newTaskType: '',
}

export const createTaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_TASK_TITLE:
            state.newTaskTitle = action.newText
            return state
        case UPDATE_NEW_TASK_DESCRIPTION:
            state.newTaskDescription = action.newText
            return state
        case CLOSE_MODAL:
            state.showModal = false
            state.newTaskTitle = ''
            state.newTaskDescription = ''
            state.newTaskType = ''
            return state
        case SHOW_MODAL:
            state.showModal = true
            return state
        case CHANGE_TYPE:
            state.newTaskType = action.newType
            return state
        default:
            return state
    }
}

export default createTaskReducer