import {combineReducers} from 'redux'
import todoReducer1 from './todoReducer'


const initialStatex = [
    {
        text: 'Use xxxx',
        completed: false,
        id: 0
    }
]

const rootReducer = combineReducers({
    xxx: todoReducer1
})

export default rootReducer
