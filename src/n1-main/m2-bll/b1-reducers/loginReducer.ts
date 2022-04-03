import {Dispatch} from 'redux';
import {LoginAPI, LoginDataType} from '../../m3-dal/d1-login/loginAPI';
import {setAppStatusAC, SetAppStatusACType} from './appReducer';

const initialState: InitialStateType = {
    isLoggedIn: false,
    error: null,
    user: {
        /* _id: '',
         email: '',
         name: '',
         avatar: '',
         publicCardPacksCount: 0,
         created: null,
         updated: null,
         isAdmin: false,
         verified: false,
         rememberMe: false,*/
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

//thunk
export const loginTC = (data: LoginDataType) => (dispatch: Dispatch<ActionsLoginType>) => {
    dispatch(setAppStatusAC('loading'))
    LoginAPI.login(data)
        .then((res) => {
            console.log(res)
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
    user: {}
}

type LoginACType = ReturnType<typeof setIsLoggedInAC>
type SetLoginErrorACType = ReturnType<typeof setLoginErrorAC>

type ActionsLoginType = LoginACType  | SetLoginErrorACType | SetAppStatusACType
