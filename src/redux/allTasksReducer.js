import{ADD_TASK} from './actions'

let initialState = {
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
}

export const allTasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            state.AllTasks.push(action.newTask)
            return state
        default:
            return state
    }
}

export default allTasksReducer
