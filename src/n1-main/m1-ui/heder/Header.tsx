import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../../m2-bll/store';
import {AppStatusType} from '../../m2-bll/b1-reducers/appReducer';
import {PATH} from '../routes/RoutesRoot';
import {Navigate, NavLink} from 'react-router-dom';
import {Loading} from '../common/c0-Preloder/Loading';
import {getPacksTC} from '../../m2-bll/b1-reducers/packReducer';

/*const setActive = ({isActive}: { isActive: boolean }) => isActive ? s.activeLink : s.item*/

export const Header = () => {

    const dispatch = useDispatch()
    const status = useSelector<AppStoreType, AppStatusType>(state => state.app.status)
    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.login.isLoggedIn)

    useEffect(() => {
        dispatch(getPacksTC())
    }, [getPacksTC])

    if (!isLoggedIn) {
        return <Navigate to={PATH.LOGIN}/>;
    }

    return (
        <>
            {status === 'loading' ? (
                <Loading/>
            ) : (
                <>
                    <NavLink to={PATH.PACK_LIST}>PackList</NavLink>
                    <NavLink to={PATH.PROFILE}>ProfilePage</NavLink>
                </>
            )
            }
        </>
    );
}
