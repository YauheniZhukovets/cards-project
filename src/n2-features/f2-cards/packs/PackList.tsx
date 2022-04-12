import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addPackTC, fetchPacksTC, MyPackType} from '../../../n1-main/m2-bll/b1-reducers/packReducer';
import {AppStoreType} from '../../../n1-main/m2-bll/store';
import {PATH} from '../../../n1-main/m1-ui/routes/RoutesRoot';
import {Navigate} from 'react-router-dom';
import {Header} from '../../../n1-main/m1-ui/heder/Header';
import {PacksTable} from './packsTable/PacksTable';
import SuperButton from '../../../n1-main/m1-ui/common/c2-SuperButton/SuperButton';
import {Sidebar} from '../../../n1-main/m1-ui/Sidebar/Sidebar';

export const PackList = () => {
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
        <>
            <Header/>
            <Sidebar/>
            <h2>Pack List</h2>
            <SuperButton onClick={onClickAddNewPackHandler}>Add new pack</SuperButton>
            <PacksTable/>
        </>
    );
};

