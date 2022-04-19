import {Dispatch} from 'redux';
import {AppStoreType, AppThunkType} from '../store';
import {setAppStatusAC, SetAppStatusACType, setErrorAC, SetErrorACType} from './appReducer';
import {CardsAPI, CardsResponseType, CardType, GradeCardParamsType} from '../../m3-dal/m1-API/cardsAPI';

const initialState: InitialCardsStateType = {
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

export const cardReducer = (state: InitialCardsStateType = initialState, action: ActionsCardsType): InitialCardsStateType => {
    switch (action.type) {
        case 'card/SET-CARDS': {
            return {...state, ...action.payload}
        }
        case 'cards/SET-FILTERED-CARDS': {
            return {...state, cardQuestion: action.payload.cardQuestion}
        }
        case 'cards/SET-PAGE-COUNT': {
            return {...state, pageCount: action.payload.pageCount}
        }
        default:
            return state
    }
}

//action
export const setCardsAC = (data: CardsResponseType) => {
    return {type: 'card/SET-CARDS', payload: data} as const
}
export const setFilteredCardsAC = (cardQuestion: string) => {
    return {type: 'cards/SET-FILTERED-CARDS', payload: {cardQuestion}} as const
}
export const setPageCountAC = (pageCount: number) => {
    return {type: 'cards/SET-PAGE-COUNT', payload: {pageCount}} as const
}
//thunk
export const fetchCardsTC = (packUId: string, pageCardsCount:number) => (dispatch: Dispatch<ActionsCardsType>, getState: () => AppStoreType) => {

    let {cardAnswer, cardQuestion, page, min, max, sortCards, pageCount, cardsPack_id} = getState().cards
    pageCount = pageCardsCount
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
            cardId && dispatch(fetchCardsTC(cardId,10))
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
            dispatch(fetchCardsTC(packId, 10))
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
            dispatch(fetchCardsTC(packId, 10))
            dispatch(setAppStatusAC('succeeded'))
        })
        .catch((e) => {
            const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
            dispatch(setErrorAC(error))
            dispatch(setAppStatusAC('failed'))
        })
}
export const gradeAnswerTC = (grade: number, cardId: string): AppThunkType => (dispatch) => {
    const payload: GradeCardParamsType = {
        grade: grade,
        card_id: cardId
    }
    dispatch(setAppStatusAC('loading'))
    CardsAPI.gradeCard(payload)
        .then(() => {
            dispatch(setAppStatusAC('succeeded'))
        })
        .catch((e) => {
            const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
            dispatch(setErrorAC(error))
            dispatch(setAppStatusAC('failed'))
        })
}

//type
export type InitialCardsStateType = {
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
type SetFilteredCardsACType = ReturnType<typeof setFilteredCardsAC>
type SetPageCountACType = ReturnType<typeof setPageCountAC>

export type ActionsCardsType =
    GetCardsACType
    | SetErrorACType
    | SetAppStatusACType
    | SetFilteredCardsACType
    | SetPageCountACType