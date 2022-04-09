import {Dispatch} from 'redux';
import {addUserDateAC, AddUserDateACType, setIsLoggedInAC, setIsLoggedInACType} from './loginReducer';
import {profileAPI} from '../../m3-dal/m1-API/profileAPI';


const initialState: InitialStateType = {
    status: 'idle',
    isInitialize: false,
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsAppType): InitialStateType => {
    switch (action.type) {
        case 'app/SET-APP-STATUS': {
            return {...state, status: action.payload.status}
        }
        case 'app/INITIALIZE-ME': {
            return {...state, isInitialize: action.payload.isInitialize}
        }
        default:
            return state
    }
}

//action
export const setAppStatusAC = (status: AppStatusType) => {
    return {type: 'app/SET-APP-STATUS', payload: {status}} as const
}
export const initializeMeAC = (isInitialize: boolean) => {
    return {type: 'app/INITIALIZE-ME', payload: {isInitialize}} as const
}

//thunk
export const authMeTC = () => (dispatch: Dispatch<ActionsAppType>) => {
    profileAPI.authMe()
        .then((res) => {
            console.log(res)
            dispatch(addUserDateAC(res.data))
            dispatch(setIsLoggedInAC(true))
        })
        .catch((e) => {
            const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
            console.error(error)
        })
        .finally(()=>{
            dispatch(initializeMeAC(true))
        })
}

//type test
export type AppStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

export type InitialStateType = {
    status: AppStatusType
    isInitialize: boolean
}

export type SetAppStatusACType = ReturnType<typeof setAppStatusAC>
export type InitializeMeACType = ReturnType<typeof initializeMeAC>

type ActionsAppType = SetAppStatusACType | AddUserDateACType | setIsLoggedInACType | InitializeMeACType
