import allTasksReducer from './allTasksReducer';
import {ADD_MATH_LOG_TASK, ADD_PB_TASK} from './actions';

let initialState = {
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
 }

export const mathLogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MATH_LOG_TASK:
            return {
                ...state,
                MathLog: [...state.MathLog, action.newTask]
            }
        default:
            return state
    }
}

export default mathLogReducer