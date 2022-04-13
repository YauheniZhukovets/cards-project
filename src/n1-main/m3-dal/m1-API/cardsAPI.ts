import {instance} from '../instance';

export const CardsAPI = {
    getPacks(params: Partial<PackParamsType>) {
        return instance.get<CardsResponseType>('cards/pack/', {params: params})
    },
    addPack(cardsPack: AddPackParamsType) {
        return instance.post('cards/pack/', {cardsPack})
    },
    deletePack(packId: string) {
        return instance.delete('cards/pack/', {params: {id: packId}})
    },
    updatePack(cardsPack:UpdatePackParamsType) {
        return instance.put('cards/pack/', {cardsPack})
    }
}

export type PackParamsType = {
    packName: string
    min: number
    max: number
    sortPacks: string
    page: number
    pageCount: number
    user_id: string
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

export type AddPackParamsType = {
    name: string
    deckCover: string
    private: boolean
}

export type UpdatePackParamsType = {
    _id: string
    name: string
}