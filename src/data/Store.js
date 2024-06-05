import {createStore, combineReducers} from 'redux'
import ProfileReducer from './profileReducer'
import massagesReduser from './massagesReducer'

let reducers = combineReducers({
    ProfilePage:ProfileReducer,
    DioalogsPage:massagesReduser
})
let store=createStore(reducers)


export default store