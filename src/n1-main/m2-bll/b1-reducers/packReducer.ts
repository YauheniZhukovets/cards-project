import {Dispatch} from 'redux';
import {PacksAPI, PacksResponseType, PackType} from '../../m3-dal/m1-API/packsAPI';
import {AppStoreType} from '../store';

const initialState: InitialStateType = {
    cardPacks: [],
    cardPacksTotalCount: 0,
    minCardsCount: 0,
    maxCardsCount: 0,
    page: 1,
    pageCount: 10,
    myPacks: false,
    sortPacks: '0updated',
    min: 0,
    max: 0,
    packName: '',
    user_id: '',
}


export const packReducer = (state: InitialStateType = initialState, action: ActionsPacksType): InitialStateType => {
    switch (action.type) {
        case 'pack/SET-PACKS': {
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}

//action
export const setPacksAC = (data: PacksResponseType) => {
    return {type: 'pack/SET-PACKS', payload: data} as const
}


//thunk
export const fetchPacksTC = () => (dispatch: Dispatch<ActionsPacksType>, getState: () => AppStoreType) => {
    let {packName, min, max, sortPacks, page, pageCount, user_id, myPacks} = getState().packs
    let myUserId = getState().login.user!._id

    user_id = myPacks ? myUserId : user_id
    let payload = {packName, min, max, sortPacks, page, pageCount, user_id}

    PacksAPI.getPacks(payload)
        .then((res) => {
            dispatch(setPacksAC(res.data))
        })
        .catch((e) => {
            const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
            console.log(error)
        })
}

//type
export type InitialStateType = {
    cardPacks: PackType [],
    cardPacksTotalCount: number,
    minCardsCount: number,
    maxCardsCount: number,
    page: number,
    pageCount: number,
    myPacks: boolean,
    sortPacks: string,
    min: number,
    max: number,
    packName: string,
    user_id: string,
}

type GetPacksACType = ReturnType<typeof setPacksAC>

type ActionsPacksType =
    | GetPacksACType
