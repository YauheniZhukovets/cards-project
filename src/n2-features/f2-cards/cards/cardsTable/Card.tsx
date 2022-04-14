import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CardType} from '../../../../n1-main/m3-dal/m1-API/cardsAPI';
import {AppStoreType} from '../../../../n1-main/m2-bll/store';
import {AppStatusType} from '../../../../n1-main/m2-bll/b1-reducers/appReducer';
import {Loading} from '../../../../n1-main/m1-ui/common/c0-Preloder/Loading';
import {deleteCardTC, updateCardTC} from '../../../../n1-main/m2-bll/b1-reducers/cardReducer';
import s from './Card.module.css';

export type CardPropsType = {
    card: CardType
}

export const Card: React.FC<CardPropsType> = ({card}) => {
    const dispatch = useDispatch()
    const status = useSelector<AppStoreType, AppStatusType>(state => state.app.status)
    const myUserId = useSelector<AppStoreType, string | undefined>(state => state.login.user?._id)

    const onClickDeleteCardHandler = () => {
        dispatch(deleteCardTC(card._id, card.cardsPack_id))
    }
    const onClickUpdateCardHandler = () => {
        dispatch(updateCardTC(card._id, card.cardsPack_id))
    }

    if (status === 'loading') {
        return <Loading/>
    }

    return (
        <div className={s.item}>
            <div className={s.nameItem}>{card.question}</div>
            <div className={s.cardsCount}>{card.answer}</div>
            <div className={s.updated}>{card.updated.slice(0, 10)}</div>
            <div className={s.buttons}>{myUserId === card.user_id &&
                <>
                    <button onClick={onClickDeleteCardHandler}>Delete</button>
                    <button onClick={onClickUpdateCardHandler}>Edit</button>
                </>
            }
            </div>
        </div>
    );
};
