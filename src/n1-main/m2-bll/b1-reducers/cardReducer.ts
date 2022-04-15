import {Dispatch} from 'redux';
import {AppStoreType, AppThunkType} from '../store';
import {setAppStatusAC, SetAppStatusACType, setErrorAC, SetErrorACType} from './appReducer';
import {CardsAPI, CardsResponseType, CardType} from '../../m3-dal/m1-API/cardsAPI';

const initialState: InitialStateType = {
    cards: [],
    cardsTotalCount: 0,
    maxGrade: 5,
    minGrade: 1,
    page: 1,
    pageCount: 10,
    packUserId: '',
    cardAnswer: '',
    cardQuestion: '',
    min: 0,
    max: 0,
    sortCards: '0grade',
    cardsPack_id: '',
}

export const cardReducer = (state: InitialStateType = initialState, action: ActionsCardsType): InitialStateType => {
    switch (action.type) {
        case 'card/SET-CARDS': {
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}

//action
export const setCardsAC = (data: CardsResponseType) => {
    return {type: 'card/SET-CARDS', payload: data} as const
}

//thunk
export const fetchCardsTC = (packUId: string) => (dispatch: Dispatch<ActionsCardsType>, getState: () => AppStoreType) => {

    let {cardAnswer, cardQuestion, page, min, max, sortCards, pageCount, cardsPack_id} = getState().cards
    cardsPack_id = packUId
    const payload = {cardAnswer, cardQuestion, page, min, max, sortCards, pageCount, cardsPack_id}

    dispatch(setAppStatusAC('loading'))
    CardsAPI.getCards(payload)
        .then((res) => {
            dispatch(setCardsAC(res.data))
            dispatch(setAppStatusAC('succeeded'))
        })
        .catch((e) => {
            const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
            dispatch(setErrorAC(error))
            dispatch(setAppStatusAC('failed'))
        })
}
export const addCardTC = (cardId: string): AppThunkType => (dispatch) => {
    dispatch(setAppStatusAC('loading'))
    const payload = {
        cardsPack_id: cardId
    }
    CardsAPI.addCard(payload)
        .then(() => {
            cardId && dispatch(fetchCardsTC(cardId))
            dispatch(setAppStatusAC('succeeded'))
        })
        .catch((e) => {
            const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
            dispatch(setErrorAC(error))
            dispatch(setAppStatusAC('failed'))
        })
}
export const deleteCardTC = (cardId: string, packId: string): AppThunkType => (dispatch) => {
    dispatch(setAppStatusAC('loading'))
    CardsAPI.deleteCard(cardId)
        .then(() => {
            dispatch(fetchCardsTC(packId))
            dispatch(setAppStatusAC('succeeded'))
        })
        .catch((e) => {
            const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
            dispatch(setErrorAC(error))
            dispatch(setAppStatusAC('failed'))
        })
}
export const updateCardTC = (cardId: string, packId: string): AppThunkType => (dispatch) => {
    dispatch(setAppStatusAC('loading'))
    const payload = {
        _id: cardId,
        question: '!!!new question!!!',
    }
    CardsAPI.updateCard(payload)
        .then(() => {
            dispatch(fetchCardsTC(packId))
            dispatch(setAppStatusAC('succeeded'))
        })
        .catch((e) => {
            const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
            dispatch(setErrorAC(error))
            dispatch(setAppStatusAC('failed'))
        })
}

//type
export type InitialStateType = {
    cards: CardType []
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    packUserId: string
    cardAnswer: string
    cardQuestion: string
    cardsPack_id: string
    min: number
    max: number
    sortCards: string
}

type GetCardsACType = ReturnType<typeof setCardsAC>

export type ActionsCardsType = GetCardsACType | SetErrorACType | SetAppStatusACType