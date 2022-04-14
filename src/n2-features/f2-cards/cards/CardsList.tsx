import React, {useEffect} from 'react';
import {Header} from '../../../n1-main/m1-ui/heder/Header';
import {Sidebar} from '../../../n1-main/m1-ui/Sidebar/Sidebar';
import {Navigate, NavLink, useParams} from 'react-router-dom';
import {PATH} from '../../../n1-main/m1-ui/routes/RoutesRoot';
import SuperButton from '../../../n1-main/m1-ui/common/c2-SuperButton/SuperButton';
import {CardsTable} from './cardsTable/CardsTable';
import {addCardTC, fetchCardsTC} from '../../../n1-main/m2-bll/b1-reducers/cardReducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../../../n1-main/m2-bll/store';
import {CardType} from '../../../n1-main/m3-dal/m1-API/cardsAPI';

export const CardsList = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.login.isLoggedIn)
    const cards = useSelector<AppStoreType, CardType []>(state => state.cards.cards)
    const packsUserId = useSelector<AppStoreType, string>(state => state.cards.packUserId)
    const myUserId = useSelector<AppStoreType, string | undefined>(state => state.login.user?._id)

    const {packId} = useParams<{ packId: string }>()

    useEffect(() => {
        if (packId) {
            dispatch(fetchCardsTC(packId))
        }
    }, [dispatch, packId])


    const onClickAddNewPackHandler = () => {
        if (packId) {
            dispatch(addCardTC(packId))
        }
    }

    if (!isLoggedIn) {
        return <Navigate to={PATH.LOGIN}/>
    }

    return (
        <>
            <Header/>
            <Sidebar/>
            <NavLink to={PATH.PACKS}>Back</NavLink>
            <h2>Cards</h2>
            <div>
                {myUserId === packsUserId && <SuperButton onClick={onClickAddNewPackHandler}>Add new card</SuperButton>}
            </div>

            <CardsTable cards={cards}/>
        </>
    );
};

