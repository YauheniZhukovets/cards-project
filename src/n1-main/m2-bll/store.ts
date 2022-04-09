import {applyMiddleware, combineReducers, createStore} from 'redux';
import {profileReducer} from './b1-reducers/profileReducer';
import {loginReducer} from './b1-reducers/loginReducer';
import thunk, { ThunkAction } from 'redux-thunk';

import {appReducer} from './b1-reducers/appReducer';
import {registrationReducer} from './b1-reducers/registrationReducer';
import { authReducer } from './reducers/auth-reducer';
import { cardsReducer } from './reducers/cards-reducer';
import { cardsPackReducer } from './reducers/cardspack-reducer';
import { AppActionType } from './actions/app-actions';
import { AuthActionsType } from './actions/auth-actions';
import { CardsActionsType } from './actions/cards-actions';
import { LearnActionsType } from './actions/learn-actions';
import { CardsPackActionType } from './actions/pack-action';
import { PasswordActionType } from './actions/password-actions';
import { ProfileActionsType } from './actions/profile-actions';
import { RegisterActionType } from './actions/register-actions';

const reducers = combineReducers({
    app: appReducer,
    login: loginReducer,
    registration: registrationReducer,
    profile: profileReducer,
    auth: authReducer,
    cardspack: cardsPackReducer,
    cards: cardsReducer,
})

export const store = createStore(reducers, applyMiddleware(thunk))
export type AppStoreType = ReturnType<typeof reducers>
export type AppRootState = ReturnType<typeof reducers>;

export type AppActionsType =
    | AuthActionsType
    | RegisterActionType
    | PasswordActionType
    | AppActionType
    | CardsPackActionType
    | CardsActionsType
    | ProfileActionsType
    | LearnActionsType;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppRootState,
    unknown,
    AppActionsType
    >;

//@ts-ignore
window.store = store