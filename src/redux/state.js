const ADD_TASK = 'ADD-TASK'
const CHANGE_SHOW_MODAL = 'CHANGE-SHOW-MODAL'
const UPDATE_NEW_TASK_TITLE = 'UPDATE-NEW-POST-TITLE'
const UPDATE_NEW_TASK_DESCRIPTION = 'UPDATE-NEW-POST-DESCRIPTION'

let store = {
    _state: {
        tasks: {
            PB: [
                {
                    id: 1,
                    title: 'Mathematical judgments',
                    description: 'Help to proof my mathematical judgments ...',
                },
                {
                    id: 2,
                    title: 'Calculation of ...',
                    description: 'Help me to calculate the probability of ...',
                },
            ],
            MathStat: [
                {
                    id: 1,
                    title: 'activeClassName attribute refuses to work',
                    description: 'The attribute has no impact on how the NavLink looks',
                },
                {
                    id: 2,
                    title: 'Calculation of ...',
                    description: 'Help me to calculate the probability of ...',
                },
            ],
            MathLog: [
                {
                    id: 1,
                    title: 'activeClassName attribute refuses to work',
                    description: 'The attribute has no impact on how the NavLink looks',
                },
                {
                    id: 2,
                    title: 'Mathematical judgments',
                    description: 'Help to proof my mathematical judgments ...',
                },
            ],
            AllTasks: [
                {
                    id: 1,
                    title: 'activeClassName attribute refuses to work',
                    description: 'The attribute has no impact on how the NavLink looks',
                },
                {
                    id: 2,
                    title: 'Mathematical judgments',
                    description: 'Help to proof my mathematical judgments ...',
                },
                {
                    id: 3,
                    title: 'Calculation of ...',
                    description: 'Help me to calculate the probability of ...',
                },
            ],
        },
        showModal: false,
        newTaskTitle: '',
        newTaskDescription: '',
    },

    dispatch(action) {
        debugger
/*        switch(action) {
            case ADD_POST:
                let newPost = {
                    id: 5,
                    title: this._state.newTaskTitle,
                    description: this._state.newTaskDescription,
                }
                this._state.tasks.AllTasks.push(newPost)
                this._state.newTaskDescription = ''
                this._state.newTaskTitle = ''
                this._callSubscriber(this._state)
                break
            case UPDATE_NEW_TASK_VALUE:
                this._state.newPostValue = action.text
                this._callSubscriber(this._state)
                break
            case CHANGE_SHOW_MODAL:
                this._state.showModal = !this._state.showModal
                this._callSubscriber(this._state)
                break
            default:
                this._state.showModal = !this._state.showModal
                this._callSubscriber(this._state)
        }*/
        if(action.type === ADD_TASK) {
            let newTask = {
                id: 5,
                title: this._state.newTaskTitle,
                description: this._state.newTaskDescription,
            }
            this._state.tasks.AllTasks.push(newTask)
            this._state.newTaskDescription = ''
            this._state.newTaskTitle = ''
            this._callSubscriber(this._state)
        } else if(action.type === UPDATE_NEW_TASK_TITLE) {
            this._state.newTaskTitle = action.newText
            this._callSubscriber(this._state)
        } else if(action.type === UPDATE_NEW_TASK_DESCRIPTION) {
            this._state.newTaskDescription = action.newText
            this._callSubscriber(this._state)
        } else if(action.type === CHANGE_SHOW_MODAL) {
            this._state.showModal = !this._state.showModal
            this._callSubscriber(this._state)
        }
    },

    getState() { return this._state },

    _callSubscriber() {},

    subscribe(observer) {
        this._callSubscriber = observer
        this._callSubscriber(this._state)
    }
}

export const addTaskActionCreator = () => ({ type: ADD_TASK })
export const updateNewTaskTitleActionCreator = (text) => ({type: UPDATE_NEW_TASK_TITLE, newText: text})
export const updateNewTaskDescriptionActionCreator = (text) => ({type: UPDATE_NEW_TASK_DESCRIPTION, newText: text})
export const changeShowModalActionCreator = () => ({type: CHANGE_SHOW_MODAL})

export default store
