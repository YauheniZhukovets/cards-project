import React from 'react';
import {CardType} from '../../../../n1-main/m3-dal/m1-API/cardsAPI';
import {Card} from './Card';
import packsS from "./CardsTable.module.css";



export type CardsTablePropsType = {
    cards: CardType []
}

export const CardsTable: React.FC<CardsTablePropsType> = ({cards}) => {

    return (
        <div>
            <div className={packsS.tableHeaderWrapper}>
                <div className={packsS.tableHeader}>
                    <div >
                        Questions
                    </div>

                    <div >
                        Answer
                    </div>

                    <div >
                        Last Updated
                    </div>

                    <div>
                        Actions
                    </div>
                </div>
            </div>

            <div>
                <div style={{height: '440px'}}>
                    {cards && cards.map(card => <Card key={card._id} card={card}/>)}
                </div>
            </div>
        </div>

       /* // <>
        //     {cards && cards.map(card => <Card key={card._id} card={card}/>)}
        // </>*/
    );
};
