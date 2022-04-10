import {Dispatch} from 'redux';
import {PacksAPI} from '../../m3-dal/m1-API/packsAPI';

const initialState: InitialStateType = null
export const packReducer = (state: InitialStateType = initialState, action: ActionsPacksType): InitialStateType => {
    switch (action.type) {
        case 'pack/GET-PACKS': {
            return {...state}
        }
        default:
            return state
    }
}

//action
export const getPacksAC = () => {
    return {type: 'pack/GET-PACKS'} as const
}


//thunk
export const getPacksTC = () => (dispatch: Dispatch<ActionsPacksType>) => {
    PacksAPI.getPacks()
        .then((res) => {
            console.log(res)
        })
        .catch((e) => {
            const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
            console.log(error)
        })
}

//type
export type InitialStateType = any

type GetPacksACType = ReturnType<typeof getPacksAC>

type ActionsPacksType =
    | GetPacksACType
