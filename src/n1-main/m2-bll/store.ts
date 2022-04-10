import {applyMiddleware, combineReducers, createStore} from 'redux';
import {profileReducer} from './b1-reducers/profileReducer';
import {loginReducer} from './b1-reducers/loginReducer';
import thunk from 'redux-thunk';
import {appReducer} from './b1-reducers/appReducer';
import {registrationReducer} from './b1-reducers/registrationReducer';
import {packReducer} from './b1-reducers/packReducer';

const reducers = combineReducers({
    app: appReducer,
    login: loginReducer,
    registration: registrationReducer,
    profile: profileReducer,
    packs: packReducer
})

export const store = createStore(reducers, applyMiddleware(thunk))
export type AppStoreType = ReturnType<typeof reducers>

//@ts-ignore
window.store = store