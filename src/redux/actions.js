export const updateNewTaskTitleActionCreator = (text) => ({type: UPDATE_NEW_TASK_TITLE, newText: text})
export const updateNewTaskDescriptionActionCreator = (text) => ({type: UPDATE_NEW_TASK_DESCRIPTION, newText: text})
export const closeModalActionCreator = () => ({type: CLOSE_MODAL})
export const showModalActionCreator = () => ({type: SHOW_MODAL})
export const addTaskActionCreator = (taskTitle, taskDescription) => {
    let newTask = {
        id: 4,
        title: taskTitle,
        description: taskDescription,
    }
    return ({type: ADD_TASK, newTask: newTask})
}
export const addPBTaskActionCreator = (taskTitle, taskDescription) => {
    let newTask = {
        id: 4,
        title: taskTitle,
        description: taskDescription,
    }
    return ({type: ADD_PB_TASK, newTask: newTask})
}
export const addMathStatTaskActionCreator = (taskTitle, taskDescription) => {
    let newTask = {
        id: 4,
        title: taskTitle,
        description: taskDescription,
    }
    return ({type: ADD_MATH_STAT_TASK, newTask: newTask})
}
export const addMathLogTaskActionCreator = (taskTitle, taskDescription) => {
    let newTask = {
        id: 4,
        title: taskTitle,
        description: taskDescription,
    }
    return ({type: ADD_MATH_LOG_TASK, newTask: newTask})
}
export const updateTypeActionCreator = type => ({type: CHANGE_TYPE, newType: type})

export const UPDATE_NEW_TASK_TITLE = 'UPDATE-NEW-TASK-TITLE'
export const UPDATE_NEW_TASK_DESCRIPTION = 'UPDATE-NEW-TASK-DESCRIPTION'
export const SHOW_MODAL = 'SHOW-MODAL'
export const CLOSE_MODAL = 'CLOSE-MODAL'
export const ADD_TASK = 'ADD-TASK'
export const CHANGE_TYPE = 'CHANGE-TYPE'
export const ADD_PB_TASK = 'ADD-PB-TASK'
export const ADD_MATH_STAT_TASK = 'ADD-MATH_STAT-TASK'
export const ADD_MATH_LOG_TASK = 'ADD-MATH_LOG-TASK'