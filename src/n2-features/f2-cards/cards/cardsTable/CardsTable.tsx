import React from 'react';
import {CardType} from '../../../../n1-main/m3-dal/m1-API/cardsAPI';
import {Card} from './Card';

export type CardsTablePropsType = {
    cards: CardType []
}

export const CardsTable: React.FC<CardsTablePropsType> = ({cards}) => {

    return (
        <>
            {cards && cards.map(card => <Card key={card._id} card={card}/>)}
        </>
    );
};
