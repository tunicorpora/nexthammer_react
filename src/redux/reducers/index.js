import corpusReducer from './corpus'
import taskReducer from './task'
import menuReducer from './menu'
import { combineReducers } from 'redux'

const appReducer = combineReducers({
        corpus: corpusReducer,
        task: taskReducer,
        //resultobjects: taskReducer,
        menus: menuReducer,
})

export default appReducer
