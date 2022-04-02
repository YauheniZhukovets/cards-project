import {combineReducers, createStore} from 'redux';
import {authReducer} from './b1-reducers/authReducer';
import {profileReducer} from './b1-reducers/profileReducer';


const reducers = combineReducers({
    auth: authReducer,
    profile: profileReducer,
})

const store = createStore(reducers)

export default store
export type AppStoreType = ReturnType<typeof reducers>

//@ts-ignore
window.store = store