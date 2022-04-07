import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../../../n1-main/m2-bll/store';
import {PATH} from '../../../n1-main/m1-ui/routes/RoutesRoot';
import {Navigate, NavLink} from 'react-router-dom';
import SuperButton from '../../../n1-main/m1-ui/common/c2-SuperButton/SuperButton';
import {logoutTC} from '../../../n1-main/m2-bll/b1-reducers/loginReducer';

export const Profile = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.login.isLoggedIn)
    const userName = useSelector<AppStoreType, string | undefined>(state => state.login.user?.name)
    const userAvatar = useSelector<AppStoreType, string | undefined>(state => state.login.user?.avatar)

    const onClickLogoutHandler = () => {
        dispatch(logoutTC())
    }

    if (!isLoggedIn) return <Navigate to={PATH.REGISTRATION}/>
    /*if (!user) return <Navigate to={PATH.REGISTRATION}/>*/

    return (
        <div>
            <span>ProfilePage</span>
            <div>
                <img src={userAvatar} alt="img"/>
            </div>
            <h3>{userName}</h3>
            <span>Front-end-developer</span>
            <div>
                <NavLink to={PATH.EDIT_PROFILE}><SuperButton>Edit profile</SuperButton></NavLink>
            </div>
            <div>
                <SuperButton onClick={onClickLogoutHandler}>LogOut</SuperButton>
            </div>
        </div>
    );
};


