const ADD_TASK = 'ADD-TASK'
const CHANGE_SHOW_MODAL = 'CHANGE-SHOW-MODAL'
const UPDATE_NEW_TASK_TITLE = 'UPDATE-NEW-POST-TITLE'
const UPDATE_NEW_TASK_DESCRIPTION = 'UPDATE-NEW-POST-DESCRIPTION'

export const createTaskReducer = (state, action) => {
    switch (action.type) {
        case ADD_TASK:
            let newTask = {
                id: 5,
                title: state.newTaskTitle,
                description: state.newTaskDescription,
            }
            state.AllTasks.push(newTask)
            state.newTaskDescription = ''
            state.newTaskTitle = ''
            return state
        case UPDATE_NEW_TASK_TITLE:
            state.newTaskTitle = action.newText
            return state
        case UPDATE_NEW_TASK_DESCRIPTION:
            state.newTaskDescription = action.newText
            return state
        case CHANGE_SHOW_MODAL:
            state.showModal = !state.showModal
            return state
        default:
            return state
    }
}

export const addTaskActionCreator = () => ({ type: ADD_TASK })
export const updateNewTaskTitleActionCreator = (text) => ({type: UPDATE_NEW_TASK_TITLE, newText: text})
export const updateNewTaskDescriptionActionCreator = (text) => ({type: UPDATE_NEW_TASK_DESCRIPTION, newText: text})
export const changeShowModalActionCreator = () => ({type: CHANGE_SHOW_MODAL})

export default createTaskReducer