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
        newTaskTitle: 'a',
        newTaskDescription: 'b',
    },

    getState() { return this._state },

    _callSubscriber() {},

    addPost(taskTitle, taskDescription) {
        let newPost = {
            id: 5,
            title: taskTitle,
            description: taskDescription,
        }
        this._state.tasks.AllTasks.push(newPost)
        this._state.newTaskDescription = ''
        this._state.newTaskTitle = ''
        this._callSubscriber(this._state)
    },

    changeShowModal() {
        this._state.showModal = !this._state.showModal
        this._callSubscriber(this._state)
    },

    updateNewPostValue(text) {
        this._state.newPostValue = text
        this._callSubscriber(this._state)
    },

    subscribe(observer) {
        this._callSubscriber = observer
        this._callSubscriber(this._state)
    }
}

export default store
