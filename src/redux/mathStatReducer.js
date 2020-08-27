import {ADD_MATH_STAT_TASK, ADD_PB_TASK} from './actions';

let initialState = {
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
}

export const mathStatReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MATH_STAT_TASK:
            return {
                ...state,
                MathStat: [...state.MathStat, action.newTask]
            }
        default:
            return state
    }
}

export default mathStatReducer