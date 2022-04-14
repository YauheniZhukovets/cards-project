import {instance} from '../instance';

export const CardsAPI = {
    getCards(params: Partial<CardParamsType>) {
        return instance.get<CardsResponseType>('cards/card/', {params: params})
    },
    addCard(card: Partial<AddCardParamsType>) {
        return instance.post('cards/card/', {card})
    },
    deleteCard(cardId: string) {
        return instance.delete('cards/card/', {params: {id: cardId}})
    },
    updateCard(card: Partial<UpdateCardParamsType>) {
        return instance.put('cards/card/', {card})
    }
}

export type CardParamsType = {
    cardAnswer: string
    cardQuestion: string
    cardsPack_id: string
    min: number
    max: number
    sortCards: string
    page: number
    pageCount: number
}

export type CardsResponseType = {
    cards: CardType []
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    packUserId: string
}

export type CardType = {
    answer: string
    question: string
    cardsPack_id: string
    grade: number
    shots: number
    user_id: string
    created: string
    updated: string
    _id: string
}

export type AddCardParamsType = {
    cardsPack_id: string
    question: string // если не отправить будет таким
    answer: string // если не отправить будет таким
    grade: number // 0..5, не обязателен
    shots: number //не обязателен
    answerImg: string // не обязателен
    questionImg: string // не обязателен
    questionVideo: string // не обязателен
    answerVideo: string // не обязателен
}

export type UpdateCardParamsType = {
    _id: string
    question: string
    comments: string
}