import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addPackTC, fetchPacksTC, MyPackType} from '../../../n1-main/m2-bll/b1-reducers/packReducer';
import {AppStoreType} from '../../../n1-main/m2-bll/store';
import {PATH} from '../../../n1-main/m1-ui/routes/RoutesRoot';
import {Navigate, NavLink} from 'react-router-dom';
import {Header} from '../../../n1-main/m1-ui/heder/Header';
import {PacksTable} from './packsTable/PacksTable';
import SuperButton from '../../../n1-main/m1-ui/common/c2-SuperButton/SuperButton';
import {Sidebar} from "../../../n1-main/m1-ui/Sidebar/Sidebar";
import {Search} from "../../f1-auth/a7-search/Search";
import style from "../../../n1-main/m1-ui/styles/PackPage.module.css";
import {DoubleRange} from "../../f1-auth/a8-selector/doubleRange/DoubleRange";
import {PacksTableHeader} from "./PacksTableHeader";


export const PackList =React.memo (() => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.login.isLoggedIn)
    const myPacks = useSelector<AppStoreType, MyPackType>(state => state.packs.myPacks)

    useEffect(() => {
        dispatch(fetchPacksTC())
    }, [dispatch,myPacks])

    const onClickAddNewPackHandler = () => {
        dispatch(addPackTC('!!!!New pack!!!'))
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
                        <div className={style.avatarUrl}>
                            <h2>Show Cards Packs</h2>
                            <Sidebar/>
                        </div>
                        <div className={style.descriptionForDoubleRangeSlider}>Cards count in a pack</div>
                        <div className={style.DoubleRangeSliderContainer}>
                            <DoubleRange/>
                        </div>
                    </div>
                    <div className={style.packsBlock} >
                        <h1 className={style.titleCardsBlock}> Pack list</h1>
                        <div className={style.searchAddBlock}>
                            <Search/>
                           <SuperButton className={style.btnContainer}
                                        onClick={onClickAddNewPackHandler}>
                                         Add new Pack
                           </SuperButton>
                        </div>
                        <div className={style.mainTable}>
                            <PacksTableHeader/>
                            <PacksTable/>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        // <>
        //     <Header/>
        //     <Sidebar/>
        //     <h2>Pack List</h2>
        //     <div style={{width:'300px'}}  >
        //         <Search/>
        //         <SuperButton onClick={onClickAddNewPackHandler}>Add new pack</SuperButton>
        //     </div>
        //
        //     <PacksTable/>
        // </>
    );
});

