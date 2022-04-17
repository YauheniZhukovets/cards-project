import React, {useEffect} from 'react';
import {Header} from '../../../n1-main/m1-ui/heder/Header';
import {Navigate, NavLink, useParams} from 'react-router-dom';
import {PATH} from '../../../n1-main/m1-ui/routes/RoutesRoot';
import SuperButton from '../../../n1-main/m1-ui/common/c2-SuperButton/SuperButton';
import {addCardTC, fetchCardsTC} from '../../../n1-main/m2-bll/b1-reducers/cardReducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../../../n1-main/m2-bll/store';
import {CardType} from '../../../n1-main/m3-dal/m1-API/cardsAPI';
import {CardsTable} from './cardsTable/CardsTable';
import {CardsSearch} from '../../../n1-main/m1-ui/common/c10-Search/CardsSearch';
import style from "../../../n1-main/m1-ui/styles/CardsPage.module.css";
import Tilt from "react-parallax-tilt";

export const CardsList = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.login.isLoggedIn)
    const cards = useSelector<AppStoreType, CardType []>(state => state.cards.cards)
    const packsUserId = useSelector<AppStoreType, string>(state => state.cards.packUserId)
    const myUserId = useSelector<AppStoreType, string | undefined>(state => state.login.user?._id)
    const cardQuestion = useSelector<AppStoreType, string>(state => state.cards.cardQuestion)

    const {packId} = useParams<{ packId: string }>()

    useEffect(() => {
        if (packId) {
            dispatch(fetchCardsTC(packId))
        }
    }, [dispatch, packId, cardQuestion])


    const onClickAddNewPackHandler = () => {
        if (packId) {
            dispatch(addCardTC(packId))
        }
    }

    if (!isLoggedIn) {
        return <Navigate to={PATH.LOGIN}/>
    }

    return (
        <div>
            <Header/>
            <div className={style.mainContainer}>
                <div className={style.container_log}>
                    <div className={style.blockAvatar}>
                        <div className={style.btnContainer}>
                            <NavLink to={PATH.PACKS}><SuperButton className={style.btn}>Back</SuperButton></NavLink>
                        </div>
                    </div>
                    <div className={style.packsBlock}>
                        <h1 className={style.titleCardsBlock}> Cards</h1>
                        <div className={style.searchAddBlock}>
                            <CardsSearch/>
                            {myUserId === packsUserId && <SuperButton style={{marginLeft:'20px'}} onClick={onClickAddNewPackHandler}>Add new card</SuperButton>}

                        </div>
                        <div className={style.mainTable}>
                            <CardsTable cards={cards}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        // <>
        //     <Header/>
        //     <NavLink to={PATH.PACKS}>Back</NavLink>
        //     <h2>Cards</h2>
        //     <CardsSearch/>
        //     <div>
        //         {myUserId === packsUserId && <SuperButton onClick={onClickAddNewPackHandler}>Add new card</SuperButton>}
        //     </div>
        //
        //     <CardsTable cards={cards}/>
        // </>
    );
};

