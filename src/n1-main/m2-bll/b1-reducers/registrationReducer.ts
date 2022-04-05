import {Dispatch} from 'redux';
import {setAppStatusAC, SetAppStatusACType} from './appReducer';
import {registrationAPI, RegistrationParamsType} from '../../m3-dal/m1-API/registrationAPI';
import {setIsLoggedInAC, setIsLoggedInACType} from './loginReducer';

const initialState: InitialStateType = {
    error: null,
}

export const registrationReducer = (state: InitialStateType = initialState, action: ActionsRegistrationType): InitialStateType => {
    switch (action.type) {
        case 'registration/SET-REGISTRATION-ERROR': {
            return {...state, error: action.payload.error}
        }
        default:
            return state
    }
}

//action
export const setRegistrationErrorAC = (error: string | null) => {
    return {type: 'registration/SET-REGISTRATION-ERROR', payload: {error}} as const
}


//thunk
export const registrationTC = (data: RegistrationParamsType) => (dispatch: Dispatch<ActionsRegistrationType>) => {
    dispatch(setAppStatusAC('loading'))
    registrationAPI.registration(data)
        .then(() => {
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setIsLoggedInAC(false))
        })
        .catch((e) => {
            const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
            dispatch(setRegistrationErrorAC(error))
            dispatch(setAppStatusAC('failed'))
        })
}

//type
export type InitialStateType = {
    error: string | null
}

type SetRegistrationErrorACType = ReturnType<typeof setRegistrationErrorAC>

type ActionsRegistrationType = | SetRegistrationErrorACType | SetAppStatusACType | setIsLoggedInACType
