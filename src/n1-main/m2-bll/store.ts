import {combineReducers, createStore} from 'redux';
import {authReducer} from '../../n2-features/f1-auth/authReducer';
import {profileReducer} from '../../n2-features/f3 -profile/profileReducer';


const reducers = combineReducers({
    auth: authReducer,
    profile: profileReducer,
})

const store = createStore(reducers)

export default store
export type AppStoreType = ReturnType<typeof reducers>

//@ts-ignore
window.store = store