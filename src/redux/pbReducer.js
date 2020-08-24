import {ADD_PB_TASK, ADD_TASK} from './actions';

let initialState = {
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
}

export const pbReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PB_TASK:
            state.PB.push(action.newTask)
            return state
        default:
            return state
    }
}

export default pbReducer