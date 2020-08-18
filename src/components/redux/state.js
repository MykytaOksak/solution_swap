import {rerenderEntireTree} from './../../render'

export const state = {
    tasks: {
        PB: [
            {
                id: 1,
                title: 'Mathematical judgments',
                description: 'Help to proof my mathematical judgments ...'
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
                description: 'Help to proof my mathematical judgments ...'
            }
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
                description: 'Help to proof my mathematical judgments ...'
            },
            {
                id: 3,
                title: 'Calculation of ...',
                description: 'Help me to calculate the probability of ...',
            },
        ],
    },
    showModal: false,
}

export const addPost = (postMessage) => {
    let newPost = {
        id: 5,
        title: 'New Post',
        description: postMessage
    };
    state.tasks.AllTasks.push(newPost);
    rerenderEntireTree(state)
}

export const changeShowModal = () => {
    state.showModal=!state.showModal
    rerenderEntireTree(state)
}

export default state
