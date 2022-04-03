import {applyMiddleware, combineReducers, createStore} from 'redux';
import {meReducer} from './b1-reducers/meReducer';
import {profileReducer} from './b1-reducers/profileReducer';
import {loginReducer} from './b1-reducers/loginReducer';
import thunk from 'redux-thunk';
import {appReducer} from './b1-reducers/appReducer';


const reducers = combineReducers({
    app: appReducer,
    login: loginReducer,
    me: meReducer,
    profile: profileReducer,
})

export const store = createStore(reducers, applyMiddleware(thunk))
export type AppStoreType = ReturnType<typeof reducers>

//@ts-ignore
window.store = store