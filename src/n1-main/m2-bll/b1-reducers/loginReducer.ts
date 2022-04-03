import {Dispatch} from 'redux';
import {LoginAPI, LoginParamsType, UserType} from '../../m3-dal/d1-login/loginAPI';
import {setAppStatusAC, SetAppStatusACType} from './appReducer';

const initialState: InitialStateType = {
    isLoggedIn: false,
    error: null,
    user: {
        _id: '',
        email: '',
        name: '',
        avatar: '',
        publicCardPacksCount: 0,
        created: null,
        updated: null,
        isAdmin: false,
        verified: false,
        rememberMe: false,
        error: '',
    },
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
export const addUserDateAC = (user: UserType) => {
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
            dispatch(setIsLoggedInAC(false))
        })
}

//type
export type InitialStateType = {
    isLoggedIn: boolean
    error: string | null
    user: UserType
}

type LoginACType = ReturnType<typeof setIsLoggedInAC>
type SetLoginErrorACType = ReturnType<typeof setLoginErrorAC>
type AddUserDateACType = ReturnType<typeof addUserDateAC>

type ActionsLoginType = LoginACType | SetLoginErrorACType | SetAppStatusACType | AddUserDateACType
