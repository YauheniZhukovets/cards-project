import {Dispatch} from 'redux';
import {setAppStatusAC, SetAppStatusACType} from './appReducer';
import {addUserDateAC, AddUserDateACType} from './loginReducer';
import {profileAPI, ProfileParamsType} from '../../m3-dal/m1-API/profileAPI';

const initState = {
    name: null,
    avatar: null,
    error: null
}

export const profileReducer = (state: InitialStateType = initState, action: ActionsProfileType): InitialStateType => {
    switch (action.type) {
        case 'profile/UPDATE-NAME': {
            return {...state, name: action.payload.name}
        }
        case 'profile/UPDATE-AVATAR': {
            return {...state, name: action.payload.avatar}
        }
        case 'registration/SET-PROFILE-ERROR': {
            return {...state, error: action.payload.error}
        }
        default:
            return state
    }
}

//action
export const updateNameAC = (name: string) => {
    return {type: 'profile/UPDATE-NAME', payload: {name}} as const
}
export const updateAvatarAC = (avatar: string) => {
    return {type: 'profile/UPDATE-AVATAR', payload: {avatar}} as const
}
export const setProfileErrorAC = (error: string | null) => {
    return {type: 'registration/SET-PROFILE-ERROR', payload: {error}} as const
}

//type
type InitialStateType = {
    name: string | null
    avatar: string | null
    error: string | null
}

//thunk
export const updateProfileTC = (data: ProfileParamsType) => (dispatch: Dispatch<ActionsProfileType>) => {
    dispatch(setAppStatusAC('loading'))
    profileAPI.updateUser(data)
        .then((res) => {
            dispatch(addUserDateAC(res.data.updatedUser))
            dispatch(setAppStatusAC('succeeded'))
        })
        .catch((e) => {
            const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
            dispatch(setProfileErrorAC(error))
            dispatch(setAppStatusAC('failed'))
        })
}


type ActionsProfileType =
    UpdateNameACType
    | UpdateAvatarACType
    | SetAppStatusACType
    | SetProfileErrorACType
    | AddUserDateACType

type UpdateNameACType = ReturnType<typeof updateNameAC>
type UpdateAvatarACType = ReturnType<typeof updateAvatarAC>
type SetProfileErrorACType = ReturnType<typeof setProfileErrorAC>