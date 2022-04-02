import {Dispatch} from 'redux';
import {LoginAPI, LoginDataType} from '../../m3-dal/d1-login/loginAPI';

const initialState = {
    isLoggedIn: false,
    status: '',
    user: {
        _id: '',
        email: '',
        name: '',
        avatar: '',
        publicCardPacksCount: 0,
        created: Date,
        updated: Date,
        isAdmin: false,
        verified: false,
        rememberMe: false,
    },


}
type InitialStateType = typeof initialState

export const loginReducer = (state: InitialStateType = initialState, action: ActionsLoginType): InitialStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN': {
            return {...state, isLoggedIn: action.payload.value}
        }
        case 'login/SET-LOGIN-STATUS': {
            return {...state, status: action.payload.status}
        }
        default:
            return state
    }
}

//action
export const setIsLoggedInAC = (value: boolean) => ({type: 'login/SET-IS-LOGGED-IN', payload: {value}}) as const

export const setLoginErrorAC = (status: string) => ({type: 'login/SET-LOGIN-STATUS', payload: {status}}) as const

//thunk
export const loginTC = (data: LoginDataType) => (dispatch: Dispatch<ActionsLoginType>) => {
    dispatch(setLoginErrorAC('loading'))
    LoginAPI.login(data)
        .then(res => {
            console.log(res)
            dispatch(setLoginErrorAC('success'))
            dispatch(setIsLoggedInAC(true))
        })
        .catch((e) => {
            const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
            dispatch(setLoginErrorAC(error))
        })
}

//type
type LoginACType = ReturnType<typeof setIsLoggedInAC>
type SetLoginErrorACType = ReturnType<typeof setLoginErrorAC>
type ActionsLoginType = LoginACType | SetLoginErrorACType
