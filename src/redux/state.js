import createTaskReducer from './createTaskReducer';

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
            showModal: false,
            newTaskTitle: '',
            newTaskDescription: '',
        },
    },

    dispatch(action) {
        this._state.tasks = createTaskReducer(this._state.tasks, action)
        this._callSubscriber(this._state)
    },

    getState() { return this._state },

    _callSubscriber() {},

    subscribe(observer) {
        this._callSubscriber = observer
        this._callSubscriber(this._state)
    }
}

export default store
