import {Dispatch} from 'redux';
import {LoginAPI, LoginParamsType, UserResponseType} from '../../m3-dal/m1-API/loginAPI';
import {setAppStatusAC, SetAppStatusACType} from './appReducer';

const initialState: InitialStateType = {
    isLoggedIn: false,
    error: null,
    user: null
}

export const loginReducer = (state: InitialStateType = initialState, action: ActionsLoginType): InitialStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN': {
            return {...state, isLoggedIn: action.payload.value}
        }
        case 'login/SET-LOGIN-ERROR': {
            return {...state, error: action.payload.error}
        }
        case 'login/SET-USER-DATE': {
            return {...state, user: action.payload.user}
        }
        default:
            return state
    }
}

//action
export const setIsLoggedInAC = (value: boolean) => {
    return {type: 'login/SET-IS-LOGGED-IN', payload: {value}} as const
}
export const setLoginErrorAC = (error: string | null) => {
    return {type: 'login/SET-LOGIN-ERROR', payload: {error}} as const
}
export const addUserDateAC = (user: UserResponseType) => {
    return {type: 'login/SET-USER-DATE', payload: {user}} as const
}

//thunk
export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch<ActionsLoginType>) => {
    dispatch(setAppStatusAC('loading'))
    LoginAPI.login(data)
        .then((res) => {
            dispatch(addUserDateAC(res.data))
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setIsLoggedInAC(true))
        })
        .catch((e) => {
            const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
            dispatch(setLoginErrorAC(error))
            dispatch(setAppStatusAC('failed'))
        })
}

//type
export type InitialStateType = {
    isLoggedIn: boolean
    error: string | null
    user: UserResponseType | null
}

export type setIsLoggedInACType = ReturnType<typeof setIsLoggedInAC>
export type SetLoginErrorACType = ReturnType<typeof setLoginErrorAC>
export type AddUserDateACType = ReturnType<typeof addUserDateAC>

type ActionsLoginType = setIsLoggedInACType | SetLoginErrorACType | SetAppStatusACType | AddUserDateACType
