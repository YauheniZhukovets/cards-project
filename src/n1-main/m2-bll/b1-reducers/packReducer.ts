import {Dispatch} from 'redux';
import {PacksAPI, PacksResponseType, PackType} from '../../m3-dal/m1-API/packsAPI';
import {AppStoreType, AppThunkType} from '../store';
import {setAppStatusAC, SetAppStatusACType, setErrorAC, SetErrorACType} from './appReducer';

const initialState: InitialStateType = {
    cardPacks: [],
    cardPacksTotalCount: 0,
    minCardsCount: 0,
    maxCardsCount: 0,
    page: 1,
    pageCount: 10,
    myPacks: 'All',
    sortPacks: '0updated',
    min: 0,
    max: 200,
    packName: '',
    user_id: '',

}


export const packReducer = (state: InitialStateType = initialState, action: ActionsPacksType): InitialStateType => {
    switch (action.type) {
        case 'pack/SET-PACKS': {
            return {...state, ...action.payload}
        }
        case 'pack/SET-MY-PACKS': {
            return {...state, myPacks: action.payload.value}
        }
        case "CARDS/PACKS/RANGE-VALUE": {
            return {...state, min: action.min, max: action.max};
        }
        case "CARDS/PACKS/SET-PACK-CARDS": {
            return {...state, cardPacks:action.cardPacks};
        }
        default:
            return state
    }
}

//action
export const setPacksAC = (data: PacksResponseType) => {
    return {type: 'pack/SET-PACKS', payload: data} as const
}
export const setMyPacksAC = (value: MyPackType) => {
    return {type: 'pack/SET-MY-PACKS', payload: {value}} as const
}
export const rangeValueAC = (min: number, max: number) => {
    return { type: "CARDS/PACKS/RANGE-VALUE", min, max } as const;
};
export const setPackCardsAC= (cardPacks: PackType [] ) => {
    return {type: 'CARDS/PACKS/SET-PACK-CARDS', cardPacks} as const
}


//thunk
export const fetchPacksTC = () => (dispatch: Dispatch<ActionsPacksType>, getState: () => AppStoreType) => {
    dispatch(setAppStatusAC('loading'))
    let {packName, min, max, sortPacks, page, pageCount, user_id, myPacks} = getState().packs
    let myUserId = getState().login.user!._id

    user_id = myPacks === 'My' ? myUserId : user_id
    const payload = {packName, min, max, sortPacks, page, pageCount, user_id}

    PacksAPI.getPacks(payload)
        .then((res) => {
            dispatch(setPacksAC(res.data))
            dispatch(setAppStatusAC('succeeded'))
        })
        .catch((e) => {
            const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
            dispatch(setErrorAC(error))
            dispatch(setAppStatusAC('failed'))
        })
}
export const addPackTC = (packName: string): AppThunkType => (dispatch) => {
    dispatch(setAppStatusAC('loading'))
    const payload = {
        name: packName,
        deckCover: '',
        private: false
    }
    PacksAPI.addPack(payload)
        .then(() => {
            dispatch(fetchPacksTC())
            dispatch(setAppStatusAC('succeeded'))
        })
        .catch((e) => {
            const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
            dispatch(setErrorAC(error))
            dispatch(setAppStatusAC('failed'))
        })
}
export const deletePackTC = (packId: string): AppThunkType => (dispatch) => {
    dispatch(setAppStatusAC('loading'))
    PacksAPI.deletePack(packId)
        .then(() => {
            dispatch(fetchPacksTC())
            dispatch(setAppStatusAC('succeeded'))
        })
        .catch((e) => {
            const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
            dispatch(setErrorAC(error))
            dispatch(setAppStatusAC('failed'))
        })
}
export const updatePackTC = (packId: string): AppThunkType => (dispatch) => {
    dispatch(setAppStatusAC('loading'))
    const payload = {
        _id: packId,
        name: '!!Changed name!!'
    }
    PacksAPI.updatePack(payload)
        .then(() => {
            dispatch(fetchPacksTC())
            dispatch(setAppStatusAC('succeeded'))
        })
        .catch((e) => {
            const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
            dispatch(setErrorAC(error))
            dispatch(setAppStatusAC('failed'))
        })
}
export const searchPacksCardsTC = (value?: string)=>{
    return (dispatch:Dispatch)=>{
        return PacksAPI.searchPacs(value)
            .then((res)=>{
                dispatch(setPackCardsAC(res.data.cardPacks))
            })
            .catch((e) => {
                const error = e.response ? e.response.data.error : (e.message + ', Some error occurred')
                dispatch(setErrorAC(error))
                dispatch(setAppStatusAC('failed'))
            })
    }
}


//type
export type InitialStateType = {
    cardPacks: PackType [],
    cardPacksTotalCount: number,
    minCardsCount: number,
    maxCardsCount: number,
    page: number,
    pageCount: number,
    myPacks: MyPackType,
    sortPacks: string,
    min: number,
    max: number,
    packName: string,
    user_id: string,
}
export type MyPackType = 'All' | 'My'

type GetPacksACType = ReturnType<typeof setPacksAC>
type SetMyPacksACType = ReturnType<typeof setMyPacksAC>
type rangeValueACType = ReturnType<typeof rangeValueAC>;
type setPackCardsAC = ReturnType<typeof setPackCardsAC>;

export type ActionsPacksType = GetPacksACType | SetErrorACType | SetAppStatusACType | SetMyPacksACType | rangeValueACType | setPackCardsAC
