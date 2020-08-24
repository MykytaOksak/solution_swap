import {combineReducers, createStore} from 'redux';
import createTaskReducer from './createTaskReducer';
import allTasksReducer from './allTasksReducer';
import mathStatReducer from './mathStatReducer'
import mathLogReducer from './mathLogReducer'
import pbReducer from './pbReducer';


let reducers = combineReducers({
    createTask: createTaskReducer,
    allTasks: allTasksReducer,
    mathStat: mathStatReducer,
    mathLog: mathLogReducer,
    pb: pbReducer
})
let reduxStore = createStore(reducers)

export default reduxStore