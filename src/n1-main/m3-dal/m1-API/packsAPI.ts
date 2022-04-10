import {instance} from '../instance';
import {AxiosResponse} from 'axios';

export const PacksAPI = {
    getPacks() {
        return instance.get<AxiosResponse<PacksResponseType>>('cards/pack/')
    }
}
export type PacksResponseType = {
    cardPacks: CardsPacksType []
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
    token: string
    tokenDeathTime: number
}

export type CardsPacksType = {
    cardsCount: number
    created: string
    grade: number
    more_id: string
    name: string
    path: string
    private: boolean
    rating: number
    shots: number
    type: string
    updated: string
    user_id: string
    user_name: string
    __v: number
    _id: string
}
